import { FC } from 'react'
import styles from '../styles/Layout.module.css'

import Header from './Header'

const Layout: FC = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
)

export default Layout
