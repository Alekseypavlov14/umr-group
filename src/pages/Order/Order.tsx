import { FC, useEffect, useState, FocusEvent } from 'react'
import { Container } from '../../components/Container/Container'
import { AdditiveInput } from '../../components/AdditiveInput/AdditiveInput'
import { Button } from '../../components/Button/Button'
import { mailer } from '../../business/SendMail/Sendmail'
import Select from 'react-select'
import services from './services.json'
import styles from './Order.module.css'

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
  const [time, setTime] = useState(Date.now())
  const [letter, setLetter] = useState('')

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

    if (time - Date.now() < 0) {
      if (new Date().getDay() !== new Date(time).getDay()) {
        setInvalidById('date')
        problems.push('date')
      }
    }

    if (letter.length < 30 || letter.length > 500) {
      setInvalidById('letter')
      problems.push('letter')
    }

    if (problems.length > 0) return false
    return true
  }

  function getDefaultDate() {
    const now = new Date()

    let day = now.getDate().toString()
    if (day.length === 1) day = '0' + day

    let month = (now.getMonth() + 1).toString()
    if (month.length === 1) month = '0' + month

    return `${now.getFullYear()}-${month}-${day}`
  }

  console.log(getDefaultDate())

  function setInvalidById(id: string) {
    const inputDate = document.getElementById(id) as HTMLInputElement
    inputDate.classList.add(styles.InputInvalid)
  }

  function removeInvalidClass(e: FocusEvent) {
    e.target.classList.remove(styles.InputInvalid)
  }

  useEffect(() => console.log('current service', service), [service])
  useEffect(() => console.log('current price', currentPrice), [currentPrice])
  useEffect(() => console.log('current time', time), [time])

  return (
    <div className={styles.Order}>
      <Container>
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
                    setCurrentPrice(price => {
                      return e.target.value 
                        ? price + additive.price
                        : price - additive.price
                    })
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
                value={getDefaultDate()}
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
      </Container>
    </div>
  )
}

export { Order }