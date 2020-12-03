import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home = (): JSX.Element => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.grid}>
          <Link href="/ssg" passHref>
            <a className={styles.card}>SSG Page</a>
          </Link>
          <Link href="/ssr" passHref>
            <a className={styles.card}>SSR Page</a>
          </Link>
          <Link href="/csr" passHref>
            <a className={styles.card}>CSR Page</a>
          </Link>
          <Link href="/next-api" passHref>
            <a className={styles.card}>CSR(Next Api) Page</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
