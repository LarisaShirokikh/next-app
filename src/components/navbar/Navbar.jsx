"use client"
import Link from "next/link"
import styles from "./page.module.css";
import Image from "next/image";

const links = [
  // {
  //   id: 1,
  //   title: '+7(917)5137977',
  //   url: 'tel:+79175137977'
  // },
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
        {/* <div className={styles.social}>
          <Image src='/tele.png' width={20} height={20} className={styles.icon} alt='phone' />
        </div> */}

        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        <button className={styles.logout} onClick={() => { console.log('logget out'); }}>Выйти</button>
      </div>
    </nav>
  )
}

export default Navbar