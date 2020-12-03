import { FC } from 'react'
import { GetStaticProps } from 'next'
import styles from '../styles/Ssg.module.css'

import Layout from '../components/Layout'

type Props = {
  currentTime: string
}

const Ssg: FC<Props> = ({ currentTime }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.description}>
          SSG だとビルド時にレンダリングされているため時刻が変わらない
        </h1>
        <div className={styles.time}>{currentTime}</div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const currentTime = new Date().toISOString()

  return {
    props: {
      currentTime,
    },
  }
}

export default Ssg
