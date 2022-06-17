import { FC, useState, FocusEvent, useEffect } from 'react'
import { Container } from '../../components/Container/Container'
import { AdditiveInput } from '../../components/AdditiveInput/AdditiveInput'
import { Button } from '../../components/Button/Button'
import { mailer } from '../../business/SendMail/Sendmail'
import { TextBlock } from '../../components/TextBlock/TextBlock'
import Select from 'react-select'
import services from './services.json'
import styles from './Order.module.css'
import { useToggle } from '../../hooks/useToggle'

interface OrderProps {}

type Service = {
  name: string;
  label: string;
  startPrice: number;
  additives: {
    name: string;
    label: string;
    price: number;
  }[];
}

const Order: FC<OrderProps> = () => {
  const [service, setService] = useState<Service>(services[0])
  const [currentPrice, setCurrentPrice] = useState(service.startPrice)
  const [isUrgently, setUrgently] = useToggle(true)
  const [time, setTime] = useState(Date.now())
  const [letter, setLetter] = useState('')

  useEffect(() => {
    updateUrgently(time)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  function updateUrgently(time: number) {
    // TWO days period is urgently
    const URGENTLY = 2 * 24 * 3600 * 1000

    if (time - Date.now() < URGENTLY) {
      setUrgently(true)
    } else {
      setUrgently(false)
    }
  }

  useEffect(() => {
    console.log(isUrgently)

    if (isUrgently) {
      setCurrentPrice(price => price + 20)
    } else {
      setCurrentPrice(price => price - 20)
    }
  }, [isUrgently])

  useEffect(() => {
    // fix bag with double adding of price
    return () => setCurrentPrice(price => price - 20)
  }, [])

  useEffect(() => {
    console.log(currentPrice)
  }, [currentPrice])

  function getServiceByName(name: string): Service {
    return services.filter(service => service.name === name)[0]
  }

  function uncheckAllAdditives() {
    const checkboxes = service.additives
      .map(additive => additive.name)
      .map(name => document.getElementById(name) as HTMLInputElement)

    checkboxes.forEach(checkbox => checkbox.checked = false)
  }

  function convertServiceToOption(service: Service) {
    return ({
      label: service.label,
      value: service.name
    })
  }

  function valid(): boolean {
    const problems: string[] = []

    // validation of date
    if (time - Date.now() < 0) {
      if (new Date().getDay() !== new Date(time).getDay()) {
        setInvalidById('date')
        problems.push('date')
      }
    }

    const dateInput = document.getElementById('date') as HTMLInputElement
    if (!Date.parse(dateInput.value)) {
      setInvalidById('date')
      problems.push('date')
    }

    // validation of letter
    if (letter.length < 30 || letter.length > 500) {
      setInvalidById('letter')
      problems.push('letter')
    }

    if (problems.length > 0) return false
    return true
  }

  function getInputDateFormat(time: number) {
    const now = new Date(time)

    let day = now.getDate().toString()
    if (day.length === 1) day = '0' + day

    let month = (now.getMonth() + 1).toString()
    if (month.length === 1) month = '0' + month

    return `${now.getFullYear()}-${month}-${day}`
  }

  function setInvalidById(id: string) {
    const inputDate = document.getElementById(id) as HTMLInputElement
    inputDate.classList.add(styles.InputInvalid)
  }

  function removeInvalidClass(e: FocusEvent) {
    e.target.classList.remove(styles.InputInvalid)
  }

  return (
    <div className={styles.Order}>
      <Container>
        <div>
          <div className={styles.TextContent}>
            <TextBlock
              title='Як це працює?'
              content='Ви замовляєте перекладача. Коли ми його знаходимо, Ви 
              сплачуєте його роботу, відправляючи гроші до нас. Якщо перекладач роботу виконав,
              він отримає оплату, а інакше ми повертаємо її Вам. Це гарантує якість роботи
              перекладача'
            />
          </div>
          <div className={styles.OrderContent}>
            <form className={styles.Form}>
              <div className={styles.FormSection}>
                <div className={styles.Description}>Обрати послугу:</div>
                <Select
                  defaultValue={convertServiceToOption(service)}
                  options={services.map(convertServiceToOption)}
                  className={styles.Select}
                  onChange={(e) => {
                    if (e) {
                      uncheckAllAdditives()
                      const service = getServiceByName(e.value)
                      setService(service)
                      setCurrentPrice(service.startPrice)
                      setTime(Date.now())
                    }
                  }}
                />
              </div>

              <div className={styles.FormSection}>
                <div className={styles.Description}>Опції:</div>
                {service.additives.map((additive, index) => (
                  <AdditiveInput 
                    key={index}
                    additive={additive}
                    onChange={(e) => {
                      if (e.target.checked) return setCurrentPrice(price => price + additive.price)
                      else return setCurrentPrice(price => price - additive.price)
                    }}
                  />
                ))}
              </div>

              <div className={styles.FormSection}>
                <div className={styles.Description}>
                  Оберіть дату:
                </div>
                <input 
                  className={styles.Input}
                  onChange={(e) => setTime(new Date(e.target.value).getTime())}
                  onFocus={(e) => removeInvalidClass(e)}
                  min={getInputDateFormat(Date.now())}
                  value={getInputDateFormat(time)}
                  id='date'
                  type='date'
                />
              </div>

              <div className={styles.FormSection}>
                <div className={styles.Description}>
                  Опишіть потребу детальніше (30-500 символів):
                </div>
                <div className={styles.LetterTip}>
                  * Залишіть контакти, щоб ми могли з Вами зв'язатися
                </div>
                <textarea 
                  id='letter'
                  wrap='soft'
                  minLength={30}
                  maxLength={500}
                  className={styles.Input}
                  onChange={(e) => setLetter(e.target.value)}
                  onFocus={(e) => removeInvalidClass(e)}
                />
              </div>

              <div className={styles.FormSection}>
                <div className={styles.CurrentPrice}>
                  Вартість: <span>{currentPrice}</span> лей за годину
                </div>
                <div className={styles.OrderButton}>
                  <Button
                    href=''
                    onClick={(e) => {
                      e.preventDefault()
                      if (!valid()) return
                      mailer.send(letter)
                    }}
                  >
                    Замовити
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Order }