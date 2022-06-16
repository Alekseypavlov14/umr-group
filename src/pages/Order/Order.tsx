import { FC, useEffect, useState } from 'react'
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
  const [letter, setLetter] = useState('')

  function getServiceByName(name: string): Service {
    return services.filter(service => service.name === name)[0]
  }

  function uncheckAllInputs() {
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

  useEffect(() => console.log('current service', service), [service])
  useEffect(() => console.log('current price', currentPrice), [currentPrice])

  return (
    <div className={styles.Order}>
      <Container>
        <div className={styles.OrderContent}>
          <form className={styles.Form}>
            <div className={styles.SelectService}>
              <div className={styles.Description}>Обрати послугу:</div>
              <Select
                defaultValue={convertServiceToOption(service)}
                options={services.map(convertServiceToOption)}
                onChange={(e) => {
                  if (e) {
                    uncheckAllInputs()
                    const service = getServiceByName(e.value)
                    setService(service)
                    setCurrentPrice(service.startPrice)
                  }
                }}
              />
            </div>

            <div className={styles.Additives}>
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

            <div className={styles.Letter}>
              <div className={styles.Description}>
                Опишіть потребу детальніше:
              </div>
              <div className={styles.LetterTip}>
                * Залишіть контакти, щоб ми могли з Вами зв'язатися
              </div>
              <textarea 
                wrap='soft'
                minLength={30}
                maxLength={500}
                className={styles.LetterInput}
                onChange={(e) => setLetter(e.target.value)}
              />
            </div>

            <div className={styles.MakeOrder}>
              <div className={styles.CurrentPrice}>
                Вартість: <span>{currentPrice}</span> лей за годину
              </div>
              <div className={styles.OrderButton}>
                <Button
                  href=''
                  onClick={() => mailer.send(letter)}
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