import { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'

import LoginForm from '../components/login/LoginForm'

function LoginPage () {
  const { signIn, isLoading, errorMessage, isAuth } = useContext(AuthContext)

  const handleLogin = (data) => {
    signIn({ username: data.username })
  }

  return (
    <div>
      <LoginForm handleLogin={handleLogin}>
        {isLoading ? <div>Loading...</div> : ''}
        {isAuth() ? <div>Auth</div> : ''}
        {errorMessage ? <div role='alert'>{errorMessage}</div> : ''}
      </LoginForm>
    </div>
  )
}

export default LoginPage
