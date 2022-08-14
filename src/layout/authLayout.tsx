import React from 'react'
import { Outlet } from 'react-router'
import { motion } from 'framer-motion'
import SignImage from '../assets/images/sign.png'
import styles from './index.module.scss'

const AuthLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
        >
          <img src={SignImage} />
          <h1 className={styles.title}>
            Welcome to <br />
            MyMessenger
          </h1>
        </motion.div>
        <div className={styles.formWrap}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
