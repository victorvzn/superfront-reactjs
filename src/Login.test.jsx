import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { afterEach, describe, expect, it, vi } from 'vitest'

import LoginForm from './LoginForm'

describe('<LoginForm />', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<LoginForm />)
  })

  it('should render title correctly', () => {
    render(<LoginForm />)

    screen.getByRole('button', { name: /Login/i })
  })

  it('should submit a form and invoke a handleLogin', async () => {
    const user = userEvent.setup()

    const mockHandleLogin = vi.fn()

    const mockUser = { email: 'test@tmail.com', password: '123456' }

    render(<LoginForm handleLogin={mockHandleLogin} />)

    const usernameInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')
    const buttonSubmit = screen.getByRole('button', { name: /Login/i })

    await user.type(usernameInput, mockUser.email)
    await user.type(passwordInput, mockUser.password)

    await user.click(buttonSubmit)

    expect(mockHandleLogin).toHaveBeenCalledTimes(1)

    expect(mockHandleLogin).toHaveBeenCalledWith({
      email: mockUser.email,
      password: mockUser.password
    })
  })
})
