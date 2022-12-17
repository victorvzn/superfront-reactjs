import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import ShowListPage from '../pages/ShowListPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/shows' element={<ShowListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
