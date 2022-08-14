import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

const MessengerLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.messenger_container}>
        <Outlet />
      </div>
    </div>
  )
}

export default MessengerLayout
