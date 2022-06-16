import { FC, useEffect, useState } from 'react'
import { Container } from '../../components/Container/Container'
import { AdditiveInput } from '../../components/AdditiveInput/AdditiveInput'
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
          </form>
        </div>
      </Container>
    </div>
  )
}

export { Order }