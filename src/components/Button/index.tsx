import React from 'react'
import styles from './index.module.scss'

type ButtonProps = {
  label: string
  onClick: () => void
  disabled: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} className={styles.btn} disabled={disabled}>
      {label}
    </button>
  )
}

export default Button
