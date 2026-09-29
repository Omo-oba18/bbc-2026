import { useState } from 'react'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import styles from './ContactPage.module.scss'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className={styles.page}>
      <Container>
        <div className={styles.heading}>
          <span>Devis gratuit</span>
          <h1>Parlons de votre projet.</h1>
          <p>Décrivez votre opération et le besoin d’accompagnement. Les coordonnées et informations de traitement seront connectées au backend BBC lors de l’étape dédiée.</p>
        </div>
        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Nom et prénom<input name="name" required autoComplete="name" /></label>
            <label>Société<input name="company" autoComplete="organization" /></label>
            <div className={styles.two}><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>Téléphone<input name="phone" type="tel" autoComplete="tel" /></label></div>
            <div className={styles.two}><label>Ville<input name="city" autoComplete="address-level2" /></label><label>Type de projet<select name="project"><option value="">Sélectionner</option><option>Construction neuve</option><option>Réhabilitation</option><option>Vérification réglementaire</option><option>Autre</option></select></label></div>
            <label>Votre message<textarea name="message" rows="6" /></label>
            <Button type="submit">Envoyer ma demande</Button>
            {submitted && <p className={styles.notice} role="status">Formulaire enregistré localement pour validation. L’envoi réel sera branché au service de contact BBC.</p>}
          </form>
          <aside className={styles.side}><span>BBC</span><h2>Un interlocuteur dédié.</h2><p>Cette zone accueillera les coordonnées officielles, horaires, email, téléphone et informations d’agence lorsque les données BBC seront validées.</p><div><strong>Coordonnées</strong><small>À renseigner</small></div><div><strong>Disponibilité</strong><small>À renseigner</small></div></aside>
        </div>
      </Container>
    </main>
  )
}
