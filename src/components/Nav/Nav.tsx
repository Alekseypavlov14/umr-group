import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

interface NavProps {}

const Nav: FC<NavProps> = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.Nav__list}>
        <div className={styles.Nav__item}>
          <Link 
            className={styles.Nav__link} 
            children='Головна'
            to='/'
          />
        </div>
        <div className={styles.Nav__item}>
          <Link 
            className={styles.Nav__link}
            children='Замовити'
            to='/order'
          />
        </div>
        <div className={styles.Nav__item}>
          <Link 
            className={styles.Nav__link} 
            children='О нас'
            to='/about'
          />
        </div>
        <div className={styles.Nav__item}>
          <Link 
            className={styles.Nav__link} 
            children='Контакти'
            to='/contacts'
          />
        </div>
      </div>
    </div>
  )
}

export { Nav }