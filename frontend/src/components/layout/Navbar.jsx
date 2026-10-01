import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { competenceItems, groupItems, missionItems, agencyItems } from '../../constants/navigation'
import { Container } from './Container'
import styles from './Navbar.module.scss'
import logo from '../../assets/images/logo-bbc.webp'

const menuGroups = [
  { title: 'Compétences', path: '/competences', items: competenceItems },
  { title: 'Missions', path: '/missions', items: missionItems },
  { title: 'Agences', path: '/agences', items: agencyItems },
  { title: 'Groupe', path: '/groupe', items: groupItems, cta: true },
]

function itemPath(group, item) {
  if (!item.slug) return group.path
  return `${group.path}/${item.slug}`
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Navigation principale">
        <Container className={styles.inner}>
          <Link to="/" className={styles.brand} onClick={closeMenu} aria-label="Benin BTP Control — accueil">
            <img src={logo} alt="Benin BTP Control" className={styles.logo} />
          </Link>
          <div className={styles.headerActions}>
            <NavLink to="/contact" className={styles.quoteLink} onClick={closeMenu}>Devis gratuit</NavLink>
            <button type="button" className={styles.menuTrigger} aria-expanded={isOpen} aria-controls="site-menu" onClick={() => setIsOpen((open) => !open)}>
              <span>Menu</span>
              <i className={isOpen ? styles.triggerOpen : ''} aria-hidden="true" />
            </button>
          </div>
        </Container>
      </nav>

      <div id="site-menu" className={`${styles.menuPanel} ${isOpen ? styles.menuPanelOpen : ''}`}>
        <Container>
          <div className={styles.menuIntro}>
            <div><span>Benin BTP Control</span><h2>Une navigation pensée comme un bureau de contrôle.</h2></div>
            <button type="button" onClick={closeMenu}>Fermer ×</button>
          </div>
          <div className={styles.directLinks}>
            <Link to="/" onClick={closeMenu}>Accueil</Link>
            <Link to="/realisations" onClick={closeMenu}>Réalisations</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </div>
          <div className={styles.menuGrid}>
            {menuGroups.map((group) => (
              <section key={group.title} className={styles.menuGroup}>
                <Link to={group.path} className={styles.groupTitle} onClick={closeMenu}>{group.title}<span>→</span></Link>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.label}><Link to={itemPath(group, item)} onClick={closeMenu}>{item.label}</Link></li>
                  ))}
                </ul>
                {group.cta && (
                  <Link to="/contact" className={styles.menuQuote} onClick={closeMenu}>Devis gratuit</Link>
                )}
              </section>
            ))}
          </div>
          <div className={styles.menuFooter}>
            <span>Navigation métier</span>
            <span>Les contenus, agences et coordonnées BBC seront remplacés par les données officielles au fur et à mesure.</span>
          </div>
        </Container>
      </div>
    </header>
  )
}
