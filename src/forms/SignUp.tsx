import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Input from '../components/Input'
import Subtitle from '../components/Subtitle'

import validators from '../utils/validators'

const SignUpForm: React.FC = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [repeatPassword, setRepeatPassword] = React.useState('')
  const [username, setUsername] = React.useState('')

  const [disabled, setDisabled] = React.useState(true)

  const checkIsValidateForm = (
    email: string,
    password: string,
    repeat: string,
    username: string
  ) => {
    if (
      validators.email(email) &&
      validators.password(password) &&
      validators.password(repeat) &&
      password === repeat &&
      validators.username(username)
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    checkIsValidateForm(event.target.value, password, repeatPassword, username)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    checkIsValidateForm(email, event.target.value, repeatPassword, username)
  }

  const handleRepeatPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(event.target.value)
    checkIsValidateForm(email, password, event.target.value, username)
  }

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
    checkIsValidateForm(email, password, repeatPassword, event.target.value)
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
        Have an account? <Link to={'/auth'}>Sign in</Link>
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
      <Input
        label={'Repeat password'}
        type={'password'}
        onChange={handleRepeatPassword}
        validate={validators.password}
        value={repeatPassword}
        style={{ marginBottom: '24px' }}
      />
      <Input
        label={'Username (from 6 to 18 characters)'}
        type={'text'}
        onChange={handleUsername}
        validate={validators.username}
        value={username}
        style={{ marginBottom: '24px' }}
      />
      <Button label="Sign up" onClick={() => {}} disabled={disabled} />
      <Subtitle>
        If you forgot your password, you can recover it{' '}
        <Link to={'/reset'}>here</Link>.
      </Subtitle>
    </motion.div>
  )
}

export default SignUpForm
