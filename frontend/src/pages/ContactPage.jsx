import { useState } from 'react'
import { Container } from '../components/layout/Container'
import { ArticleHero } from '../components/sections/ArticleHero'
import { Button } from '../components/ui/Button'
import { contact } from '../data/contact'
import styles from './ContactPage.module.scss'

const CHAMPS_REQUIS = {
  nom: 'Indiquez votre nom, pour que nous sachions à qui répondre.',
  email: 'Indiquez une adresse à laquelle vous joindre.',
  message: 'Décrivez votre opération, même en une phrase.',
}

function valide(donnees) {
  const erreurs = {}
  for (const [champ, message] of Object.entries(CHAMPS_REQUIS)) {
    if (!donnees[champ]?.trim()) erreurs[champ] = message
  }
  if (donnees.email?.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(donnees.email)) {
    erreurs.email = 'Cette adresse ne semble pas valide.'
  }
  return erreurs
}

export function ContactPage() {
  const [erreurs, setErreurs] = useState({})
  const [etat, setEtat] = useState('saisie')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const donnees = Object.fromEntries(new FormData(event.currentTarget))
    const trouvees = valide(donnees)
    setErreurs(trouvees)

    if (Object.keys(trouvees).length > 0) {
      document.querySelector(`[name="${Object.keys(trouvees)[0]}"]`)?.focus()
      return
    }

    // Sans adresse d'envoi configurée, on ne fait pas semblant d'avoir envoyé.
    if (!contact.endpoint) {
      setEtat('hors-service')
      return
    }

    setEtat('envoi')
    try {
      const reponse = await fetch(contact.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donnees),
      })
      setEtat(reponse.ok ? 'envoye' : 'echec')
    } catch {
      setEtat('echec')
    }
  }

  // Ne renvoyer vers les coordonnées que si au moins une est réellement publiée.
  const joignable = contact.coordonnees.some((c) => c.valeur)

  const champErreur = (nom) =>
    erreurs[nom] ? { 'aria-invalid': 'true', 'aria-describedby': `erreur-${nom}` } : {}

  const Erreur = ({ nom }) =>
    erreurs[nom] ? <small id={`erreur-${nom}`} className={styles.erreur}>{erreurs[nom]}</small> : null

  return (
    <>
      <ArticleHero {...contact.hero} />

      <section className={styles.page}>
        <Container>
          <div className={styles.grid}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <label>
                Nom et prénom
                <input name="nom" autoComplete="name" {...champErreur('nom')} />
                <Erreur nom="nom" />
              </label>

              <label>
                Société ou organisme
                <input name="societe" autoComplete="organization" />
              </label>

              <div className={styles.deux}>
                <label>
                  Courriel
                  <input name="email" type="email" autoComplete="email" {...champErreur('email')} />
                  <Erreur nom="email" />
                </label>
                <label>
                  Téléphone
                  <input name="telephone" type="tel" autoComplete="tel" />
                </label>
              </div>

              <div className={styles.deux}>
                <label>
                  Localisation de l’opération
                  <input name="lieu" autoComplete="address-level2" />
                </label>
                <label>
                  Échéance souhaitée
                  <select name="echeance" defaultValue="">
                    <option value="">Sélectionner</option>
                    {contact.champs.echeances.map((e) => <option key={e}>{e}</option>)}
                  </select>
                </label>
              </div>

              <label>
                Nature du besoin
                <select name="besoin" defaultValue="">
                  {contact.champs.besoins.map((b) => (
                    <option key={b.label} value={b.value}>{b.label}</option>
                  ))}
                </select>
              </label>

              <label>
                Votre opération
                <textarea name="message" rows="6" {...champErreur('message')} />
                <Erreur nom="message" />
              </label>

              <Button type="submit" disabled={etat === 'envoi'}>
                {etat === 'envoi' ? 'Envoi en cours…' : 'Envoyer ma demande'}
              </Button>

              <p className={styles.statut} role="status" aria-live="polite">
                {etat === 'envoye' && 'Votre demande est partie. Nous revenons vers vous rapidement.'}
                {etat === 'echec' &&
                  (joignable
                    ? 'L’envoi a échoué. Réessayez dans un instant, ou joignez-nous directement.'
                    : 'L’envoi a échoué. Réessayez dans un instant.')}
                {etat === 'hors-service' &&
                  (joignable
                    ? 'Votre saisie est complète, mais l’envoi en ligne n’est pas encore ouvert. Utilisez les coordonnées ci-contre pour nous joindre.'
                    : 'Votre saisie est complète. L’envoi en ligne n’est pas encore ouvert sur ce site, et nos coordonnées n’y sont pas encore publiées.')}
              </p>
            </form>

            <aside className={styles.cote}>
              <div className={styles.bloc}>
                <h2>{contact.suite.title}</h2>
                <ol className={styles.etapes}>
                  {contact.suite.etapes.map((e) => <li key={e}>{e}</li>)}
                </ol>
              </div>

              <div className={styles.bloc}>
                <h2>Nous joindre</h2>
                <dl className={styles.coordonnees}>
                  {contact.coordonnees.map(({ label, valeur }) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd className={valeur ? undefined : styles.manquant}>
                        {valeur ?? 'à renseigner'}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className={styles.bloc}>
                <h2>{contact.aide.title}</h2>
                <ul className={styles.aide}>
                  {contact.aide.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
