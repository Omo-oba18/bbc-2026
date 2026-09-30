import { useCallback, useState } from 'react'
import { Container } from '../layout/Container'
import { SectionHeading } from './SectionHeading'
import { SectionNote } from './SectionNote'
import { testimonialCaption } from '../../data/shared/pageBlocks'
import styles from './TestimonialCarousel.module.scss'

function initials(value) {
  return value
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function TestimonialCarousel({ eyebrow, items }) {
  const [active, setActive] = useState(0)
  const total = items.length
  const go = useCallback((step) => setActive((index) => (index + step + total) % total), [total])

  const testimonial = items[active]

  return (
    <section className={styles.testimonials}>
      <Container>
        <SectionHeading eyebrow={eyebrow} />
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
            {items.map((item, index) => (
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
        <SectionNote>{testimonialCaption}</SectionNote>
      </Container>
    </section>
  )
}
