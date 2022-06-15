import { FC } from 'react'
import { Container } from '../../components/Container/Container'
import styles from './Order.module.css'

interface OrderProps {}

const Order: FC<OrderProps> = () => {
  return (
    <div className={styles.Order}>
      <Container>
        Order
      </Container>
    </div>
  )
}

export { Order }