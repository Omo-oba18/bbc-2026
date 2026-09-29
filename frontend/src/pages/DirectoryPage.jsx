import { Link, useParams } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { competenceItems, groupItems, missionItems } from '../constants/navigation'
import { siteData } from '../data/siteData'
import styles from './DirectoryPage.module.scss'

const sets = { missions: missionItems.filter((item) => item.slug), competences: competenceItems, agences: siteData.agencies, groupe: groupItems }

function findItem(collection, slug) {
  return collection.find((item) => item.slug === slug)
}

export function DirectoryPage({ type, title, eyebrow, description }) {
  const { slug } = useParams()
  const items = sets[type] ?? []
  const current = slug ? findItem(items, slug) : null

  if (current) {
    return (
      <main className={styles.detail}>
        <Container>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1>{current.label}</h1>
          <p className={styles.lead}>Cette page reprend la logique éditoriale BBC prévue pour ce domaine. Le contenu métier détaillé sera renseigné à partir des informations officielles de l’entreprise.</p>
          <div className={styles.detailGrid}>
            <div className={styles.visual}><span>BBC / {type.toUpperCase()}</span><strong>{current.label}</strong></div>
            <div className={styles.content}><h2>Un accompagnement structuré</h2><p>Présentation, périmètre d’intervention, documents utiles, références et contact seront organisés ici sans modifier la structure globale du site.</p><Button to="/contact">Parler de votre projet</Button></div>
          </div>
        </Container>
      </main>
    )
  }

  return (
    <main className={styles.directory}>
      <Container>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1>{title}</h1>
        <p className={styles.lead}>{description}</p>
        <div className={styles.grid}>
          {items.map((item, index) => (
            <Link key={item.slug} to={`/${type}/${item.slug}`} className={styles.card}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.label}</strong>
              <small>Découvrir →</small>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  )
}
