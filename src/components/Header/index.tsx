import React from 'react'
import Search from '../Search'
import styles from './index.module.scss'
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Search />
    </header>
  )
}

export default Header
