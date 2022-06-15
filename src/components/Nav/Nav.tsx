import { FC } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import styles from './Nav.module.css'
import { useSelector } from 'react-redux'
import { isOpenedSelector } from '../../features/menu/menuSlice'

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const isOpened = useSelector(isOpenedSelector)

  return (
    <div className={cn(styles.Nav, isOpened && styles.Opened)}>
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