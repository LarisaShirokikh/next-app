import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023 LoraSher. All rights reserved</div>
      <div className={styles.social}>
        <Image src='/vk.png' width={15} height={15} className={styles.icon} alt='vk.com' />
        <Image src='/inst.png' width={15} height={15} className={styles.icon} alt='instagram.com' />
        <Image src='/link.png' width={15} height={15} className={styles.icon} alt='linkedin.com' />
        <Image src='/yt.png' width={15} height={15} className={styles.icon} alt='youtube.com' />
      </div>
    </footer>
  )
}

export default Footer