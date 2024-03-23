import './index.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <Routes>
      <Route index path='/' element={ <Landing/> } />
      <Route path='/signup' element={ <Signup /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/user' element={ <Dashboard /> } />
    </Routes>
  )
}

export default App
