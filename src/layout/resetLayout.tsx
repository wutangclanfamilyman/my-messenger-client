import React from 'react'
import { Outlet } from 'react-router'
import { motion } from 'framer-motion'
import ResetImage from '../assets/images/reset.jpg'
import styles from './index.module.scss'

const ResetLayout: React.FC = () => {
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
          <img src={ResetImage} />
        </motion.div>
        <div className={styles.formWrap}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ResetLayout
