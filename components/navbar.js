import utilStyles from '../styles/utils.module.css';

export default function Navbar() {
  return (
    <div className={utilStyles.navbar}>
        <a href="/blog"className={utilStyles.aboutheading}>Blog</a>
        <a href="/about" className={utilStyles.aboutheading}>About</a>
        <a href="/contact"className={utilStyles.aboutheading}>Contact</a>
    </div>
  )
}