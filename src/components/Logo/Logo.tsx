import { FC } from 'react'
import logo from './../../assets/logo.png'
import styles from './Logo.module.css'

interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div className={styles.Logo}>
      <img src={logo} alt='Logo'/>
    </div>
  )
}

export { Logo }