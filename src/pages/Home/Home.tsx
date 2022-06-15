import { FC } from 'react'
import { Container } from '../../components/Container/Container'
import styles from './Home.module.css'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <Container>
        Home
      </Container>
    </div>
  )
}

export { Home }