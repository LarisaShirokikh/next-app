import Image from "next/image";
import styles from "./page.module.css";
import Button from '@/components/button/button'
import Hero from 'public/hero.png';


export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Создаем инновации с легкостью и страстью...
        </h1>
        <p className={styles.desc}>
          чтобы ваше будущее стало сегодняшней реальностью!.
        </p>
        <Button url='/portfolio' text="Посмотреть работы" />
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt='main photo' className={styles.img} />

      </div>
    </main>
  )
}
