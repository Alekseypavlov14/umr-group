import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import styles from './Layout.module.css'

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.Layout}>
      <Header />

      <div className={styles.Main}>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export { Layout }