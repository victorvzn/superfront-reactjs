import { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'

import SignUpForm from '../components/sign-up-form/SignUpForm'

function SignUpPage () {
  const { signUp, isLoading, errorMessage } = useContext(AuthContext)

  const handleSignUp = (data) => {
    signUp({ username: data.username })
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
