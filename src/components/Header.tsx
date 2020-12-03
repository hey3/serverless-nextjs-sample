import { FC } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header: FC = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>
      <Link href="/" passHref>
        <a>Serverless Next.js Component Sample</a>
      </Link>
    </h1>
  </header>
)

export default Header
