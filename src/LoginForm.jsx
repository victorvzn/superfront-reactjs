import { useState } from 'react'

const LoginForm = ({ handleLogin }) => {
  const DEFAULT_FORM = { email: '', password: '' }

  const [form, setForm] = useState(DEFAULT_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    handleLogin(form)
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          type='text'
          name='email'
          placeholder='Email'
          value={form.email}
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
