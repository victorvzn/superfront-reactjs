import { createContext, useState } from 'react'
import { verify, signUpUser } from '../services/auth'

const USER_LOCAL_STORAGE_KEY = 'superfront.user'

export const AuthContext = createContext()

export const UserProvider = ({ children }) => {
  const userLocalStorage = window.localStorage.getItem(USER_LOCAL_STORAGE_KEY)

  const parsedUser = JSON.parse(userLocalStorage)

  const [user, setUser] = useState(parsedUser)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const signIn = async ({ username }) => {
    setErrorMessage('')
    setIsLoading(true)

    const response = await verify({ username })

    const existUser = !!response.length

    if (!existUser) {
      setErrorMessage('Lo sentimos intenta nuevamente')
      setIsLoading(false)
      return false
    }

    if (existUser) {
      const userResponse = response.length > 0 ? response[0] : null
      storeUser(userResponse)
    }

    setIsLoading(false)

    return existUser
  }

  const signUp = async ({ username }) => {
    setErrorMessage('')
    setIsLoading(true)

    const response = await verify({ username })

    const existUser = !!response.length

    if (existUser) {
      setErrorMessage('Lo sentimos intenta nuevamente')
      setIsLoading(false)
      return false
    }

    if (!existUser) {
      await signUpUser({ username })
    }

    setIsLoading(false)

    return true
  }

  const storeUser = data => {
    setUser(data)
    saveInLocalStorage({
      key: USER_LOCAL_STORAGE_KEY,
      data
    })
  }

  const cleanUser = () => {
    window.localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
    setUser(null)
  }

  function logout () {
    cleanUser()
    // window.location.href = '/'
  }

  function saveInLocalStorage ({ key, data }) {
    window.localStorage.setItem(key, JSON.stringify(data))
  }

  function isAuth () {
    return !!user?.username
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, logout, isAuth, errorMessage }}>
      {children}
    </AuthContext.Provider>
  )
}
