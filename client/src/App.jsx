import './index.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ForgotPassword from './pages/Forgot'
import { ToastContainer, toast } from 'react-toastify'


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
      <Route path='/user' element={ <Dashboard /> } />
    </Routes>
    </>
  )
}

export default App
