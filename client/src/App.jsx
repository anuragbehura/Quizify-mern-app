import './index.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'



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
