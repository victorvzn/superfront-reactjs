import { useState } from 'react'

const LoginForm = ({ children, handleLogin }) => {
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

    if (!form?.password) {
      setError('Password is required')
      return
    }

    handleLogin(form)
  }

  return (
    <>
      <h1>Login</h1>

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

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={form.password}
          onChange={handleChange}
        />

        <button>Login</button>
      </form>
    </>
  )
}

export default LoginForm
