import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '../components/ui/Button'
import { Container } from '../components/layout/Container'
import { controleConstruction as page } from '../data/missions/controleConstruction'
import styles from './ControleConstructionPage.module.scss'

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function initials(value) {
  return value
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function ControleConstructionPage() {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const total = page.testimonials.items.length

  const go = useCallback((step) => setActive((index) => (index + step + total) % total), [total])

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : 'hidden',
    whileInView: reduceMotion ? undefined : 'visible',
    viewport: { once: true, amount: 0.18 },
    variants: revealVariants,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  })

  const testimonial = page.testimonials.items[active]

  return (
    <>
      <Link className={styles.quoteTab} to="/contact">Devis gratuit</Link>

      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <motion.div className={styles.heroCopy} {...reveal()}>
              <h1>{page.hero.title}</h1>
              <p className={styles.heroLead}>
                <span aria-hidden="true" />
                {page.hero.lead}
              </p>
              <p className={styles.heroText}>{page.hero.text}</p>
              <Button to={page.hero.cta.to}>{page.hero.cta.label}</Button>
            </motion.div>
            <motion.figure className={styles.heroVisual} {...reveal(0.12)}>
              <img src={page.hero.image.src} alt={page.hero.image.alt} width="1240" height="830" />
            </motion.figure>
          </div>
        </Container>
      </section>

      <section className={styles.process}>
        <Container>
          <h2 className={styles.processTitle}>{page.process.title}</h2>
          <ul className={styles.processGrid}>
            {page.process.steps.map((step, index) => (
              <motion.li key={step.title} className={styles.processCard} {...reveal(index * 0.06)}>
                <span className={styles.check} aria-hidden="true" />
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={styles.references}>
        <Container>
          <div className={styles.centeredHeading}>
            <span className={styles.eyebrow}>{page.references.eyebrow}</span>
            <h2>{page.references.title}</h2>
          </div>
          <ul className={styles.referenceGrid}>
            {page.references.items.map((item, index) => (
              <motion.li key={item.title} className={styles.referenceCard} {...reveal((index % 3) * 0.06)}>
                <div className={styles.referenceImage}>
                  <img src={item.image} alt="" loading="lazy" width="880" height="620" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className={styles.referenceLocation}>{item.location}</span>
              </motion.li>
            ))}
          </ul>
          <p className={styles.referenceNote}>{page.references.note}</p>
        </Container>
      </section>

      <section className={styles.statement}>
        <Container>
          <motion.div className={styles.statementInner} {...reveal()}>
            <h2>{page.statement.title}</h2>
            {page.statement.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className={styles.atouts}>
        <Container>
          <div className={styles.centeredHeading}>
            <h2>{page.atouts.title}</h2>
          </div>
          <ul className={styles.atoutGrid}>
            {page.atouts.items.map((item, index) => (
              <motion.li key={item.title} className={styles.atoutCard} {...reveal(index * 0.05)}>
                <div className={styles.atoutImage}>
                  <img src={item.image} alt="" loading="lazy" width="620" height="440" />
                </div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </motion.li>
            ))}
          </ul>
        </Container>
      </section>

      <section className={styles.testimonials}>
        <Container>
          <div className={styles.centeredHeading}>
            <span className={styles.eyebrow}>{page.testimonials.eyebrow}</span>
          </div>
          <div className={styles.testimonialBox}>
            <span className={styles.avatar} aria-hidden="true">{initials(testimonial.author)}</span>
            <span className={styles.testimonialTheme}>{testimonial.theme}</span>
            <blockquote>
              <button type="button" onClick={() => go(-1)} aria-label="Témoignage précédent">‹</button>
              <p>« {testimonial.quote} »</p>
              <button type="button" onClick={() => go(1)} aria-label="Témoignage suivant">›</button>
            </blockquote>
            <footer>
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
            </footer>
            <div className={styles.dots} role="tablist" aria-label="Choisir un témoignage">
              {page.testimonials.items.map((item, index) => (
                <button
                  key={item.theme}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={item.theme}
                  className={index === active ? styles.dotActive : undefined}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          </div>
          <p className={styles.referenceNote}>{page.testimonials.caption}</p>
        </Container>
      </section>

      <section className={styles.steps}>
        <Container>
          <div className={styles.centeredHeading}>
            <h2>{page.steps.title}</h2>
          </div>
          <ol className={styles.stepGrid}>
            {page.steps.items.map((item, index) => (
              <motion.li key={item.title} className={styles.stepCard} {...reveal(index * 0.05)}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </motion.li>
            ))}
          </ol>
        </Container>
      </section>

    </>
  )
}
