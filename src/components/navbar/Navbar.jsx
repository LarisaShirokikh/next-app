"use client"
import Link from "next/link"
import styles from "./page.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 2,
    title: 'Home',
    url: '/'
  },
  {
    id: 3,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 4,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 5,
    title: 'About',
    url: '/about'
  },
  {
    id: 6,
    title: 'Dushboard',
    url: '/dushboard'
  },
  {
    id: 7,
    title: 'Contact',
    url: '/contact'
  }
]

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href='/' className={styles.logo}>LoraSher</Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        <button className={styles.logout} onClick={() => { console.log('logget out'); }}>Выйти</button>
      </div>
    </nav>
  )
}

export default Navbar