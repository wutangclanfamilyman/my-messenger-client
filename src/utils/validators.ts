const emailValidator = (email: string): boolean => {
  const pattern = /\S+@\S+\.\S+/

  return pattern.test(email.toLowerCase())
}

const passwordValidator = (password: string): boolean => {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  return pattern.test(password)
}

const usernameValidator = (username: string): boolean => {
  const pattern = /^[a-zA-Z0-9_.]{6,18}$/

  return pattern.test(username)
}

export default {
  email: emailValidator,
  password: passwordValidator,
  username: usernameValidator,
}
