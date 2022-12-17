import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

import LoginForm from '../components/login/LoginForm'

function LoginPage () {
  const { signIn, isLoading, errorMessage, isAuth } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = (data) => {
    signIn({ username: data.username })
      .then((ok) => {
        if (ok) {
          navigate('/shows')
        }
      })
  }

  return (
    <LoginForm handleLogin={handleLogin}>
      {isLoading ? <div>Loading...</div> : ''}
      {isAuth() ? <div>Auth</div> : ''}
      {errorMessage ? <div role='alert'>{errorMessage}</div> : ''}
    </LoginForm>
  )
}

export default LoginPage
