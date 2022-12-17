import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
