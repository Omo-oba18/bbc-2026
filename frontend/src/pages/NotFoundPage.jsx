import { Button } from '../components/ui/Button'
import { Container } from '../components/layout/Container'
import styles from './NotFoundPage.module.scss'

export function NotFoundPage() {
  return (
    <section className={styles.page}>
      <Container>
        <span className={styles.code}>404</span>
        <h1>Page introuvable</h1>
        <p>Cette route n’existe pas encore dans la fondation du projet.</p>
        <Button to="/">Retour à l’accueil</Button>
      </Container>
    </section>
  )
}
