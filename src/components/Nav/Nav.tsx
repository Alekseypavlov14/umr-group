import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isOpenedSelector, close } from '../../features/menu/menuSlice'
import cn from 'classnames'
import styles from './Nav.module.css'

interface NavProps {}

const Nav: FC<NavProps> = () => {
  const isOpened = useSelector(isOpenedSelector)
  const dispatch = useDispatch()

  return (
    <div className={cn(styles.Nav, isOpened && styles.Opened)}>
      <div className={styles.Nav__list}>
        <div className={styles.Nav__item}>
          <Link 
            onClick={() => dispatch(close())}
            className={styles.Nav__link} 
            children='Головна'
            to='/'
          />
        </div>
        <div className={styles.Nav__item}>
          <Link 
          onClick={() => dispatch(close())}
            className={styles.Nav__link}
            children='Замовити'
            to='/order'
          />
        </div>
        <div className={styles.Nav__item}>
          <Link 
            onClick={() => dispatch(close())}
            className={styles.Nav__link} 
            children='Перекладачі'
            to='/translators'
          />
        </div>
        <div className={styles.Nav__item}>
          <Link 
            onClick={() => dispatch(close())}
            className={styles.Nav__link} 
            children='О нас'
            to='/about'
          />
        </div>
        <div className={styles.Nav__item}>
          <Link 
            onClick={() => dispatch(close())}
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