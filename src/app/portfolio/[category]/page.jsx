import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/button'
import Image from 'next/image'

const Category = ({ params }) => {
  //console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item} key='1'>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text='Посмотреть еще...' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img}
            fill={true} src='/create.jpg'
            alt='тут фотка'
          />
        </div>
      </div>
      <div className={styles.item} key='2'>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text='Посмотреть еще...' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img}
            fill={true} src='/create.jpg'
            alt='тут фотка'
          />
        </div>
      </div>
    </div>
  )
}

export default Category