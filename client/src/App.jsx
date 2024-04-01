import './index.css'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/Forgot'
import { ToastContainer } from 'react-toastify'
import ResetPassword from './pages/ResetPassword'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreateQuiz from './pages/CreateQuiz'
// import AuthContext from './context/AuthContext'
import UserContextProvider from './context/UserContextProvider'



function App() {

  const [ isAuth, setIsAuth ] = useState(false);
  const [ user, setUser ] = useState({})

  return (
    <>
      <ToastContainer
        position='top-right'
        // autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition:Bounce
      />
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index path='/' element={<Landing />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
            <Route path='/resetPassword/:token' element={<ResetPassword />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/createquiz' element={<CreateQuiz />} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  )
}

export default App
