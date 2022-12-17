import Router from './router'

import { UserProvider } from './context/AuthContext'

function App () {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App
