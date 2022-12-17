import { useState } from 'react'

const SignUpForm = ({ handleSignup, children }) => {
  const DEFAULT_FORM = { username: '', password: '' }

  const [form, setForm] = useState(DEFAULT_FORM)
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form?.username) {
      setError('Username is required')
      return
    }

    handleSignup(form)
  }

  return (
    <>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        {children}

        {error ? <div role='alert'>{error}</div> : ''}

        <input
          type='text'
          name='username'
          placeholder='Username'
          value={form.username}
          onChange={handleChange}
        />

        <button>Sign up</button>
      </form>
    </>
  )
}

export default SignUpForm
