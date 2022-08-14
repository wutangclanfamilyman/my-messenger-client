import React from 'react'
import styles from './index.module.scss'
type SubtitleProps = {
  children: React.ReactNode
}

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <p className={styles.subtitle}>{children}</p>
}

export default Subtitle
