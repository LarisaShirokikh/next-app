import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'


async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { cashe: 'no-store' })
  if (!res.ok) throw new Error('no data')
  return res.json()
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`blog/${item._id}`} className={styles.container} key={item._id}>
          <div>
            <Image
              src={item.image}
              alt=''
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>

        </Link>
      ))}
      {/* <Link href='blog/test' className={styles.container} key='2'>
        <div>
          <Image
            src='/dom2.jpg'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
        </div>

      </Link> */}
    </div>
  )
}

export default Blog