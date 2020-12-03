import { FC } from 'react'
import useSWR from 'swr'
import styles from '../styles/Csr.module.css'

import Layout from '../components/Layout'

type Props = {
  currentTime: string
}

const Csr: FC<Props> = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <DogImage />
      </div>
    </Layout>
  )
}

const DogImage: FC = () => {
  const { data, error } = useSWR('https://dog.ceo/api/breeds/image/random', (url: string) =>
    fetch(url).then(res => res.json())
  )

  if (error) {
    return <div>fetch error</div>
  }
  if (!data) {
    return <div>loading...</div>
  }
  return <img src={data.message} alt={data.message} />
}

export default Csr
