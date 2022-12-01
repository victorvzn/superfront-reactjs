import { render } from '@testing-library/react'
import { describe, it } from 'vitest'

const Login = () => {
  return <h1>Login</h1>
}

describe('<Login />', () => {
  it('should render', () => {
    render(<Login />)
  })
})
