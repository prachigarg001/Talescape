import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Editor from './pages/Editor'
import { generateRandomUsername } from './services/mockData'

export default function App() {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('talescape_user')
    return stored ? JSON.parse(stored) : null
  })

  const handleLogin = (userData) => {
    const newUser = {
      ...userData,
      id: Date.now(),
      username: userData.username || generateRandomUsername(),
      joinDate: new Date().toLocaleDateString(),
      pfpColor: userData.pfpColor || 'bg-blue-500',
    }
    setUser(newUser)
    localStorage.setItem('talescape_user', JSON.stringify(newUser))
  }

  const handleGoogleLogin = () => {
    const googleUser = {
      id: Date.now(),
      username: generateRandomUsername(),
      email: 'user@gmail.com',
      pfpColor: 'bg-red-500',
      joinDate: new Date().toLocaleDateString(),
      provider: 'google',
    }
    handleLogin(googleUser)
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('talescape_user')
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Landing />} />
        <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login onLogin={handleLogin} onGoogleLogin={handleGoogleLogin} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
        <Route path="/editor" element={user ? <Editor user={user} /> : <Navigate to="/login" replace />} />
        <Route path="/editor/:id" element={user ? <Editor user={user} /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}
