import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'

import LoginForm from './LoginForm'

describe('<LoginForm />', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    cleanup()
  })

  it('should render', () => {
    render(<LoginForm />)
  })

  it('should render title correctly', () => {
    render(<LoginForm />)

    screen.getByRole('button', { name: /Login/i })
  })

  it('should submit a form with the username and password and invoke a handleLogin', async () => {
    const mockHandleLogin = vi.fn()

    const mockUser = { email: 'test@tmail.com', password: '123456' }

    render(<LoginForm handleLogin={mockHandleLogin} />)

    const usernameInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password')
    const buttonSubmit = screen.getByRole('button', { name: /Login/i })

    await userEvent.type(usernameInput, mockUser.email)
    await userEvent.type(passwordInput, mockUser.password)

    await userEvent.click(buttonSubmit)

    expect(mockHandleLogin).toHaveBeenCalledTimes(1)

    expect(mockHandleLogin).toHaveBeenCalledWith(mockUser)
  })

  it('should show an error message when submit is clicked and no username is provided', async () => {
    const mockHandleLogin = vi.fn()

    const mockUser = { password: '123456' }

    render(<LoginForm handleLogin={mockHandleLogin} />)

    const passwordInput = screen.getByPlaceholderText('Password')
    const buttonSubmit = screen.getByRole('button', { name: /Login/i })

    await userEvent.type(passwordInput, mockUser.password)
    await userEvent.click(buttonSubmit)

    const errorMessage = screen.getByRole('alert')

    expect(errorMessage).toContain(/username is required/i)

    expect(mockHandleLogin).not.toHaveBeenCalled()
  })

  it('should show an error message when submit is clicked and no password is provided', async () => {
    const mockHandleLogin = vi.fn()

    const mockUser = { email: 'test@tmail.com' }

    render(<LoginForm handleLogin={mockHandleLogin} />)

    const usernameInput = screen.getByPlaceholderText('Email')
    const buttonSubmit = screen.getByRole('button', { name: /Login/i })

    await userEvent.type(usernameInput, mockUser.email)
    await userEvent.click(buttonSubmit)

    const errorMessage = screen.getByRole('alert')

    expect(errorMessage).toContain(/password is required/i)

    expect(mockHandleLogin).not.toHaveBeenCalled()
  })
})
