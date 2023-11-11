import utilStyles from '../styles/utils.module.css';

export default function Navbar() {
  return (
    <div className={utilStyles.navbar}>
        <a href="#"className={utilStyles.headingMd}>Blog</a>
        <a href="/about" className={utilStyles.headingMd}>About</a>
        <a href="#"className={utilStyles.headingMd}>Contact</a>
    </div>
  )
}