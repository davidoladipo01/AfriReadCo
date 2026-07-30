// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import DashboardSectionPage from './pages/DashboardSectionPage'
import Onboarding from './pages/Onboarding'
import Cookies from 'universal-cookie'
import Authguard from './auth/Authguard'
import DashboardLayout from './layouts/DashboardLayout'

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
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="books" element={<DashboardSectionPage title="Books" />} />
            <Route path="communities" element={<DashboardSectionPage title="Communities" />} />
            <Route path="discover" element={<DashboardSectionPage title="Discover" />} />
            <Route path="analytics" element={<DashboardSectionPage title="Analytics" />} />
            <Route path="settings" element={<DashboardSectionPage title="Settings" />} />
          </Route>
          <Route path="/onboard" element={<Onboarding />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
