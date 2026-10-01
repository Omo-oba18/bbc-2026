import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { siteData } from '../data/siteData'
import styles from './HomePage.module.scss'

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export function HomePage() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : 'hidden',
    whileInView: reduceMotion ? undefined : 'visible',
    viewport: { once: true, amount: 0.18 },
    variants: revealVariants,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroGrid}>
            <motion.div className={styles.heroCopy} {...reveal()}>
              <span className={styles.eyebrow}>Le bureau de contrôle technique</span>
              <h1>À vos côtés pour faire grandir <em>vos projets.</em></h1>
              <p>Benin BTP Control accompagne les acteurs de la construction dans la maîtrise technique, la conformité et la prévention des risques.</p>
              <div className={styles.heroActions}>
                <Button to="/contact">Demander un devis</Button>
                <Button to="/missions" variant="secondary">Découvrir nos missions</Button>
              </div>
              <div className={styles.heroNote}><span /> Une expertise pensée pour les ouvrages de demain.</div>
            </motion.div>

            <motion.div className={styles.heroVisual} {...reveal(.12)} aria-label="Illustration technique BBC">
              <div className={styles.heroBuilding} aria-hidden="true">
                <div className={styles.buildingSky} />
                <div className={styles.buildingCore}>
                  {Array.from({ length: 5 }).map((_, row) => <span key={row} />)}
                </div>
                <div className={styles.buildingLines} />
                <div className={styles.crane}><i /><b /><strong /></div>
              </div>
              <div className={styles.heroStamp}><strong>BBC</strong><span>CONTRÔLE<br />TECHNIQUE</span></div>
              <div className={styles.heroCode}>01 / CONTROL<br />BUILD · SAFETY · PERFORMANCE</div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className={styles.serviceTicker} aria-label="Domaines d’intervention">
        <div className={styles.tickerTrack}>
          {siteData.competences.map((item) => <span key={item.slug}>{item.label}</span>)}
        </div>
      </div>

      <Section eyebrow="Nos missions" title="Un accompagnement sur tous vos ouvrages" className={styles.missionsSection}>
        <div className={styles.missionLayout}>
          <motion.div className={styles.missionVisual} {...reveal()} aria-hidden="true">
            <div className={styles.abstractBuilding}>
              <span /><span /><span /><span /><span /><span />
            </div>
            <div className={styles.visualCorner}>BBC / 02</div>
          </motion.div>
          <div className={styles.missionList}>
            {siteData.featuredMission.map((item, index) => (
              <motion.div key={item.slug} className={styles.missionItem} {...reveal(index * .06)}>
                <span className={styles.missionNumber}>{item.number}</span>
                <div>
                  <Link to={`/missions/${item.slug}`}><h3>{item.title}</h3></Link>
                  <p>{item.text}</p>
                </div>
                <Link className={styles.missionArrow} to={`/missions/${item.slug}`} aria-label={`Voir ${item.title}`}>→</Link>
              </motion.div>
            ))}
            <Button to="/missions" variant="text">Plus de services <span aria-hidden="true">→</span></Button>
          </div>
        </div>
      </Section>

      <section className={styles.projectSection}>
        <div className="container">
          <div className={styles.projectGrid}>
            <motion.div className={styles.projectVisual} {...reveal()} aria-hidden="true">
              <div className={styles.projectShape}>
                <span className={styles.projectTower} />
                <span className={styles.projectLow} />
                <span className={styles.projectGround} />
              </div>
              <span className={styles.projectLabel}>RÉALISATION / BBC</span>
            </motion.div>
            <motion.div className={styles.projectCopy} {...reveal(.08)}>
              <span className={styles.eyebrow}>Réalisations</span>
              <h2>Des projets qui traduisent notre exigence technique.</h2>
              <p>Cette zone est prête à accueillir les projets BBC : typologie d’ouvrage, localisation, missions réalisées, images et quelques informations essentielles.</p>
              <Button to="/realisations" variant="secondary">Voir nos réalisations</Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {siteData.stats.map((stat, index) => (
              <motion.div key={stat.label} className={styles.stat} {...reveal(index * .05)}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Ils nous font confiance" title="Une relation construite dans la durée" className={styles.trustSection}>
        <div className={styles.trustGrid}>
          <div className={styles.trustIntro}>
            <span className={styles.quoteMark}>“</span>
            <p>La confiance se construit avec de la disponibilité, de la rigueur et des échanges simples avec les équipes projet.</p>
            <span className={styles.trustCaption}>Témoignage client — contenu à renseigner</span>
          </div>
          <div className={styles.clientWall} aria-label="Emplacements des références clients">
            {Array.from({ length: 10 }).map((_, index) => <span key={index}>RÉFÉRENCE {String(index + 1).padStart(2, '0')}</span>)}
          </div>
        </div>
      </Section>

      <section className={styles.agencySection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <div><span className={styles.eyebrow}>Un réseau de proximité</span><h2>Nos agences</h2></div>
            <p>Implantations provisoires. Les coordonnées, responsables et zones d’intervention seront renseignés par BBC.</p>
          </div>
          <div className={styles.agencyGrid}>
            {siteData.agencies.map((agency, index) => (
              <Link key={agency.slug} to={`/agences/${agency.slug}`} className={styles.agencyCard}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{agency.label}</strong>
                <small>Voir l’agence →</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div className={styles.ctaCard} {...reveal()}>
            <div><span className={styles.eyebrow}>Parlons de votre projet</span><h2>Un interlocuteur dédié pour avancer sereinement.</h2><p>Décrivez votre besoin et préparez la prochaine étape avec BBC.</p></div>
            <Button to="/contact">Demander un devis</Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
