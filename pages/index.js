import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          My First NextJS Site
        </title>
        <link rel="icon" href="/icono_opt.jpg" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/hectorrdz98" target="_blank">My Site!</a>
        </h1>
        <p className={`${styles.description} ${styles.mb0}`}>
          This is my first NextJS project
        </p>
      </main>
    </div>
  )
}
