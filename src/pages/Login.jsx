import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Mail, Lock, User, Github, Chrome } from 'lucide-react'

export default function Login({ onLogin, onGoogleLogin }) {
  const navigate = useNavigate()
  const [isSignUp, setIsSignUp] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pfpColor, setPfpColor] = useState('bg-blue-500')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Generate random anonymous name if not provided
    const getAnonymousName = () => {
      if (username.trim()) return username
      
      const adjectives = ['Shadow', 'Cosmic', 'Silent', 'Mystical', 'Digital', 'Neon', 'Phoenix', 'Echo', 'Storm', 'Crystal', 'Twilight', 'Lunar', 'Solar', 'Nebula', 'Stellar', 'Quantum']
      const nouns = ['Writer', 'Poet', 'Creator', 'Scribe', 'Dreamer', 'Sage', 'Voice', 'Mind', 'Heart', 'Soul', 'Wanderer', 'Explorer', 'Mystic', 'Sentinel', 'Oracle']
      const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
      const noun = nouns[Math.floor(Math.random() * nouns.length)]
      const num = Math.floor(Math.random() * 999)
      return `${adj}${noun}${num}`
    }
    
    const userData = {
      username: getAnonymousName(),
      email,
      pfpColor,
      joinDate: new Date().toLocaleDateString(),
    }
    onLogin(userData)
    navigate('/dashboard')
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
            {isSignUp ? 'Create Your Identity' : 'Welcome Back'}
          </h1>
          <p className="text-dark-muted">
            {isSignUp ? 'Build your anonymous writer profile' : 'Continue your literary journey'}
          </p>
        </div>

        {/* Main Card */}
        <div className="glass rounded-2xl p-8 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username/Anonymous Profile Field */}
            {isSignUp && (
              <div className="space-y-2">
                <label className="text-sm text-dark-muted">Create Your Anonymous Profile Name</label>
                <p className="text-xs text-dark-muted/70">Choose any username to represent yourself (e.g., ShadowWriter, MysticPoet, NeonDreamer)</p>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-dark-muted" />
                  <input
                    type="text"
                    placeholder="e.g., ShadowWriter123 or EchoPoet"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-glass-lighter border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm text-dark-muted">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-dark-muted" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-glass-lighter border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth"
                />
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

            {/* PFP Color Selection */}
            {isSignUp && (
              <div className="space-y-2">
                <label className="text-sm text-dark-muted">Profile Picture Color</label>
                <div className="flex gap-3">
                  {['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-red-500', 'bg-green-500', 'bg-indigo-500'].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setPfpColor(color)}
                      className={`w-8 h-8 rounded-full ${color} border-2 ${pfpColor === color ? 'border-white' : 'border-transparent'} transition-smooth`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-smooth font-semibold text-white">
              {isSignUp ? 'Create Anonymous Profile' : 'Sign In'}
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
                setEmail('')
                setPassword('')
              }}
              className="text-dark-muted hover:text-blue-400 transition-smooth"
            >
              {isSignUp ? 'Already have a profile?' : "Don't have a profile yet?"}{' '}
              <span className="text-blue-400 font-semibold">{isSignUp ? 'Sign In' : 'Create One'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
