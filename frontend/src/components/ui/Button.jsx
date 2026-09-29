import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

export function Button({ children, to, href, type = 'button', variant = 'primary', ...props }) {
  const className = `${styles.button} ${styles[variant] || ''}`.trim()

  if (to) return <Link className={className} to={to} {...props}>{children}</Link>
  if (href) return <a className={className} href={href} {...props}>{children}</a>
  return <button className={className} type={type} {...props}>{children}</button>
}
