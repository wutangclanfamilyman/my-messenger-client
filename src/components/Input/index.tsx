import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import styles from './index.module.scss'

type InputProps = {
  label: string
  value: string
  type?: string
  style?: {}
  validate: (email: string) => boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  type = 'text',
  style,
  validate,
  onChange,
}) => {
  return (
    <div className={styles.wrap} style={style}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        value={value}
        type={type}
        onChange={onChange}
      />
      {value && (
        <motion.span
          className={styles.icon}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
        >
          {validate(value) ? (
            <FontAwesomeIcon
              icon={faCircleCheck}
              size={'2x'}
              color={'#4BB549'}
            />
          ) : (
            <FontAwesomeIcon
              icon={faCircleXmark}
              size={'2x'}
              color={'#FB4C5B'}
            />
          )}
        </motion.span>
      )}
    </div>
  )
}

export default Input
