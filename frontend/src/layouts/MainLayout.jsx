import { Outlet } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { PageTransition } from '../components/ui/PageTransition'
import styles from './MainLayout.module.scss'

export function MainLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}
