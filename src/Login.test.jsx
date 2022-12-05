import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'

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

    screen.getByText('Login')
  })
})
