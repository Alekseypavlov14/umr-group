import { FC } from 'react'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { Nav } from '../Nav/Nav'
import styles from './Header.module.css'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className={styles.Header}>
      <Container>
        <div className={styles.HeaderContent}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </div>
  )
}

export { Header }