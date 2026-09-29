import { Link } from 'react-router-dom'
import { Container } from './Container'
import { competenceItems, groupItems, missionItems } from '../../constants/navigation'
import { siteData } from '../../data/siteData'
import styles from './Footer.module.scss'
import logo from '../../assets/images/logo-bbc.jpg'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.cta}>
          <div><span>Un projet ?</span><h2>Parlons de votre projet, sans attendre.</h2></div>
          <Link to="/contact">Demander un devis <b>→</b></Link>
        </div>
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <img src={logo} alt="Benin BTP Control" />
            <p>{siteData.identity.descriptor}</p>
            <small>{siteData.identity.tagline}</small>
          </div>
          <div className={styles.groups}>
            <div><h3>Missions</h3><ul>{missionItems.slice(0, 6).map((item) => <li key={item.slug}><Link to={`/missions/${item.slug}`}>{item.label}</Link></li>)}</ul></div>
            <div><h3>Compétences</h3><ul>{competenceItems.slice(0, 7).map((item) => <li key={item.slug}><Link to={`/competences/${item.slug}`}>{item.label}</Link></li>)}</ul></div>
            <div><h3>Agences</h3><ul>{siteData.agencies.map((item) => <li key={item.slug}><Link to={`/agences/${item.slug}`}>{item.label}</Link></li>)}<li><Link to="/agences">Toutes les agences</Link></li></ul></div>
            <div><h3>Groupe</h3><ul>{groupItems.map((item) => <li key={item.slug}><Link to={`/groupe/${item.slug}`}>{item.label}</Link></li>)}</ul></div>
          </div>
        </div>
        <div className={styles.bottom}><span>© {new Date().getFullYear()} Benin BTP Control</span><span>Mentions légales · Politique de confidentialité</span></div>
      </Container>
    </footer>
  )
}
