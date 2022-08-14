import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Input from '../components/Input'
import Subtitle from '../components/Subtitle'

import validators from '../utils/validators'

const SignInForm: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [disabled, setDisabled] = React.useState(true)

  const checkIsValidateForm = (email: string, password: string) => {
    if (validators.email(email) && validators.password(password)) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    checkIsValidateForm(event.target.value, password)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    checkIsValidateForm(email, event.target.value)
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
      <Subtitle>
        Sign in or <Link to={'/auth/sign-up'}>create an account</Link>
      </Subtitle>
      <Input
        label={'Email'}
        onChange={handleEmail}
        validate={validators.email}
        value={email}
        type={'text'}
      />
      <Input
        label={'Password'}
        type={'password'}
        onChange={handlePassword}
        validate={validators.password}
        value={password}
        style={{ marginBottom: '24px' }}
      />
      <Button label="Sign in" onClick={() => {}} disabled={disabled} />
      <Subtitle>
        If you forgot your password, you can recover it{' '}
        <Link to={'/reset'}>here</Link>.
      </Subtitle>
    </motion.div>
  )
}

export default SignInForm
