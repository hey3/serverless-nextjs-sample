import { FC } from 'react'
import useSWR from 'swr'

import Layout from '../components/Layout'
import styles from '../styles/NextApi.module.css'

const NextApi: FC = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Name />
      </div>
    </Layout>
  )
}

const Name: FC = () => {
  const { data, error } = useSWR('/api/hello', (url: string) => fetch(url).then(res => res.json()))

  if (error) {
    return <div>fetch error</div>
  }
  if (!data) {
    return <div>loading...</div>
  }
  return <div>{data.name}</div>
}

export default NextApi
