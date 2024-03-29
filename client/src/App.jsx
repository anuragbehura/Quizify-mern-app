import './index.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/Forgot'
import { ToastContainer } from 'react-toastify'
import ResetPassword from './pages/ResetPassword'
import Home from './pages/Home'



function App() {

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
    transition: Bounce
    />
    <Routes>
      <Route index path='/' element={ <Landing/> } />
      <Route path='/signup' element={ <Signup /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/forgotPassword' element={ <ForgotPassword /> } />
      <Route path='/resetPassword/:token' element={ <ResetPassword /> } />
      <Route path='/home' element={ <Home /> } />
    </Routes>
    </>
  )
}

export default App
