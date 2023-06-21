'use client'
import React, { useState } from "react";
import styles from './page.module.css'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value

    try {
      const res = await fetch("/api/auth/register", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email, password
        })
      })
      res.status === 200 && router.push("/dashboard/login?success=Account has been created")
    } catch (error) {
      setError(error)
      console.log(error);
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Создать аккаунт</h1>
      <h2 className={styles.subtitle}>Пожалуйста, введите данные</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' required className={styles.input} />
        <input type="text" placeholder='email' required className={styles.input} />
        <input type="text" placeholder='password' required className={styles.input} />
        <button className={styles.button}>Регистрация</button>
        {error && 'Что-то пошло не так...'}
      </form>
      <span>- или -</span>
      <Link className={styles.link} href='/dashboard/login'>Войти</Link>
    </div>
  )
}

export default Register