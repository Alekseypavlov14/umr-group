import { FC } from 'react'
import { Container } from '../../components/Container/Container'
import styles from './About.module.css'

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div className={styles.About}>
      <Container>
        About
      </Container>
    </div>
  )
}

export { About }