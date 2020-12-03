import { FC } from 'react'
import { GetServerSideProps } from 'next'

import Layout from '../components/Layout'
import styles from '../styles/Ssg.module.css'

type Props = {
  currentTime: string
}

const Ssr: FC<Props> = ({ currentTime }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.description}>
          SSR はリクエスト時にレンダリングされるためアクセスする度に時刻が変わる
        </h1>
        <div className={styles.time}>{currentTime}</div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const currentTime = new Date().toISOString()

  return {
    props: {
      currentTime,
    },
  }
}

export default Ssr
