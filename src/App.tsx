import React from 'react'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SignInForm from './forms/SignIn'
import SignUpForm from './forms/SignUp'
import DefaultLayout from './layout'
import AuthLayout from './layout/authLayout'
import './styles/app.scss'
import ResetLayout from './layout/resetLayout'
import ResetForm from './forms/Reset'
import MessengerLayout from './layout/MessengerLayout'
import Main from './pages/Main'

const App: React.FC = () => {
  const isLogin = true
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/sign-up" element={<SignUpForm />} />
            <Route index element={<SignInForm />} />
          </Route>
          <Route path="/reset" element={<ResetLayout />}>
            <Route index element={<ResetForm />} />
          </Route>
          <Route
            element={isLogin ? <MessengerLayout /> : <Navigate to={'/auth'} />}
          >
            <Route index element={<Main />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
