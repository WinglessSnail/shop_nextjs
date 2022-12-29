import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Link href="https://www.nike.com" target="_blank" className={styles.title_link}>Nike Shop</Link>
        </div>
        <br />
        <Link href='/login' className={styles.Link} >
          <button className={styles.button}>Login</button>
        </Link>
      </div>
    </>
  )
}
