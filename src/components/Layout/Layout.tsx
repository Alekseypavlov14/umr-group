import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Header}>
        header
      </div>

      <div className={styles.Main}>
        <Outlet />
      </div>

      <div className={styles.Footer}>
        footer
      </div>
    </div>
  )
}

export { Layout }