import { FC, useEffect, useState } from 'react'
import { Container } from '../../components/Container/Container'
import Select from 'react-select'
import services from './services.json'
import styles from './Order.module.css'

interface OrderProps {}

const Order: FC<OrderProps> = () => {
  const [service, setService] = useState(services[0])
  const [currentPrice, setCurrentPrice] = useState(service.startPrice)

  function getServiceByName(name: string) {
    return services.filter(service => service.name === name)[0]
  }

  function uncheckAllInputs() {
    const checkboxes = service.additives
      .map(additive => additive.name)
      .map(name => document.getElementById(name) as HTMLInputElement)

    checkboxes.forEach(checkbox => {
      if (checkbox) {
        checkbox.checked = false
      }
    })
  }

  useEffect(() => {
    uncheckAllInputs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service])

  useEffect(() => console.log('current service', service), [service])
  useEffect(() => console.log('current price', currentPrice), [currentPrice])

  return (
    <div className={styles.Order}>
      <Container>
        <div className={styles.OrderContent}>
          <form className={styles.Form}>
            <div className={styles.SelectService}>
              <Select
                defaultValue={{ label: service.label, value: service.name }}
                options={services.map((service, index) => ({
                  value: service.name,
                  label: service.label
                }))}
                onChange={(e) => {
                  if (e) {
                    const service = getServiceByName(e.value)
                    setService(service)
                    setCurrentPrice(service.startPrice)
                  }
                }}
              />
            </div>

            <div className={styles.Additives}>
              {service.additives.map((additive, index) => (
                <label 
                  htmlFor={additive.name} 
                  className={styles.InputContainer} 
                  key={index}
                >
                  <input 
                    id={additive.name}
                    key={index}
                    className={styles.Input}
                    type='checkbox'
                    name={additive.name} 
                    onChange={(e) => {
                      if (e.target.checked) return setCurrentPrice(price => price + additive.price)
                      else return setCurrentPrice(price => price - additive.price)
                    }}
                  />
                  <div className={styles.InputLabel}>
                    {additive.label}
                  </div>
                </label>
              ))}
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export { Order }