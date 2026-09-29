import { Container } from '../components/layout/Container'
import styles from './ProjectsPage.module.scss'

export function ProjectsPage() {
  return (
    <main className={styles.page}>
      <Container>
        <span className={styles.eyebrow}>Réalisations</span>
        <h1>Des ouvrages, des exigences, des références.</h1>
        <p className={styles.lead}>La bibliothèque de projets BBC sera alimentée avec les réalisations officielles : image, localisation, typologie, missions et données clés.</p>
        <div className={styles.empty}><span>BBC / PROJECTS</span><strong>Réalisations à renseigner</strong><small>La structure est prête à accueillir les projets réels sans modifier le layout.</small></div>
      </Container>
    </main>
  )
}
