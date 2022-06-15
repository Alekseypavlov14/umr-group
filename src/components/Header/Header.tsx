import { FC } from 'react'
import { BurgerButton } from '../BurgerButton/BurgerButton'
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
          <BurgerButton />
        </div>
      </Container>
    </div>
  )
}

export { Header }