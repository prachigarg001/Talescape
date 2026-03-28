import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Lock, User, Github, Chrome } from 'lucide-react'
import { generateAvatar } from '../services/avatarService'

export default function Login({ onLogin, onGoogleLogin }) {
  const navigate = useNavigate()
  const [isSignUp, setIsSignUp] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [avatarPreview, setAvatarPreview] = useState(null)
  const [avatarStyle, setAvatarStyle] = useState('discord')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!username.trim() || !password.trim()) {
      alert('Please fill in all fields')
      return
    }

    const avatarData = generateAvatar(username)
    
    const userData = {
      username: username.trim(),
      password: password,
      avatarColor: avatarData.color,
      avatarData: avatarData,
      avatarStyle: avatarStyle,
      joinDate: new Date().toLocaleDateString(),
      // Profile info to be filled in settings
      bio: '',
      realName: '',
      anonymousName: '',
      age: '',
      birthDate: '',
    }
    onLogin(userData)
    // First time users redirected to account settings
    navigate('/account-settings')
  }

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value
    setUsername(newUsername)
    if (newUsername.trim()) {
      const avatar = generateAvatar(newUsername)
      setAvatarPreview(avatar)
    }
  }

  const handleGoogleLogin = () => {
    onGoogleLogin()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Talescape
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-dark-muted">
            {isSignUp ? 'Join the community of anonymous writers' : 'Continue your literary journey'}
          </p>
        </div>

        {/* Main Card */}
        <div className="glass rounded-2xl p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-sm text-dark-muted">Username</label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <User className="absolute left-3 top-3 w-5 h-5 text-dark-muted" />
                  <input
                    type="text"
                    placeholder="Choose your username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="w-full bg-glass-lighter border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth"
                  />
                </div>
                {/* Avatar Preview */}
                {(avatarPreview || username) && (
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-10 h-10 rounded-lg border-2 border-blue-400 flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{
                        background: avatarPreview?.color || '#3b82f6',
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
                      }}
                    >
                      {username ? username.substring(0, 2).toUpperCase() : '?'}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm text-dark-muted">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-dark-muted" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-glass-lighter border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth"
                />
              </div>
            </div>

            {/* Avatar Style Selection */}
            <div className="space-y-2">
              <label className="text-sm text-dark-muted">Choose Avatar Style</label>
              <div className="grid grid-cols-4 gap-2">
                {['discord', 'minecraft', 'gradient', 'neon'].map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setAvatarStyle(style)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-smooth capitalize border-2 ${
                      avatarStyle === style
                        ? 'border-blue-400 bg-blue-400/10 text-blue-300'
                        : 'border-dark-border bg-glass-lighter text-dark-muted hover:border-blue-400/50'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-smooth font-semibold text-white">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-dark-border" />
            <span className="text-dark-muted text-sm">Or continue with</span>
            <div className="h-px flex-1 bg-dark-border" />
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3">
            <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 py-3 rounded-lg glass hover:bg-glass-light transition-smooth border border-dark-border">
              <Chrome className="w-5 h-5" />
              <span>Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg glass hover:bg-glass-light transition-smooth border border-dark-border">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </button>
          </div>

          {/* Toggle Sign Up / Sign In */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp)
                setUsername('')
                setPassword('')
                setAvatarPreview(null)
                setAvatarStyle('discord')
              }}
              className="text-dark-muted hover:text-blue-400 transition-smooth"
            >
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <span className="text-blue-400 font-semibold">{isSignUp ? 'Sign In' : 'Create One'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
