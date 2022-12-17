import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

import SignUpForm from '../components/sign-up-form/SignUpForm'

function SignUpPage () {
  const { signUp, isLoading, errorMessage } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSignUp = (data) => {
    signUp({ username: data.username })
      .then((ok) => {
        if (ok) {
          navigate('/login')
        }
      })
  }

  return (
    <div>
      <SignUpForm handleSignup={handleSignUp}>
        {isLoading ? <div>Loading...</div> : ''}
        {errorMessage ? <div role='alert'>{errorMessage}</div> : ''}
      </SignUpForm>
    </div>
  )
}

export default SignUpPage
