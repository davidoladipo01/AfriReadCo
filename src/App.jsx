// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import Cookies from 'universal-cookie'
import Authguard from '../auth/Authguard'

function App() {
  const cookies = new Cookies()
  const token = cookies.get("token")
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authguard isAuth={token} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onboard" element={<Onboarding />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
