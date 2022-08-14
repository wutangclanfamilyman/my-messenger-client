import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Input from '../components/Input'
import Subtitle from '../components/Subtitle'

import validators from '../utils/validators'

const ResetForm: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [disabled, setDisabled] = React.useState(true)

  const checkIsValidateForm = (email: string) => {
    if (validators.email(email)) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    checkIsValidateForm(event.target.value)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transform: 'translateX(0)' }}
      exit={{
        opacity: 0,
        transform: 'translateX(50%)',
        transition: { duration: 0.1 },
      }}
    >
      <Subtitle>Please enter your email to search for your account.</Subtitle>
      <Input
        label={'Email'}
        onChange={handleEmail}
        validate={validators.email}
        value={email}
        type={'text'}
        style={{ marginBottom: '24px' }}
      />
      <Button label="Submit" onClick={() => {}} disabled={disabled} />
      <Subtitle>
        If you remember the password, please <Link to={'/auth'}>Sign in</Link>
      </Subtitle>
    </motion.div>
  )
}

export default ResetForm
