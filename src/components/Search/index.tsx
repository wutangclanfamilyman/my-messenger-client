import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.scss'

const Search: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <label className={styles.icon}>
        <FontAwesomeIcon icon={faSearch} size={'lg'} color={'#ADB8BA'} />
      </label>
      <input className={styles.input} placeholder="Search..." />
    </div>
  )
}

export default Search
