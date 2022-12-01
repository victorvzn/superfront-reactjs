import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'

const Login = () => {
  return <h1>Login</h1>
}

describe('<Login />', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Login />)
  })

  it('should render title correctly', () => {
    render(<Login />)

    screen.getByText('Login')
  })
})
