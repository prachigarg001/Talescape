import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Zap, Users, Trophy } from 'lucide-react'
import '../styles/landing-animations.css'

export default function Landing() {
  const navigate = useNavigate()
  const [loadedLines, setLoadedLines] = useState(0)

  const features = [
    'Write & share your stories',
    'Create epic poetry battles',
    'Discover new writers',
    'Build your community',
    'Climb the leaderboard',
    'Express yourself anonymously',
  ]

  // Animate loading lines
  useEffect(() => {
    if (loadedLines < features.length) {
      const timer = setTimeout(() => {
        setLoadedLines(loadedLines + 1)
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [loadedLines, features.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className="glass border-b border-dark-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Talescape
            </span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-smooth font-semibold"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Hero Section */}
      <div className="flex-1 flex items-center justify-center px-6 py-20 relative">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Animated Loading Text */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
              Welcome to Talescape
            </h2>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    index < loadedLines
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex-shrink-0"></div>
                  <p className="text-lg text-white font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/login')}
              className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-smooth font-semibold text-lg text-white"
            >
              Start Your Journey →
            </button>
          </div>

          {/* Right Side - Animated Title with Dots */}
          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Animated dots container */}
            <div className="relative w-64 h-64">
              {/* Center circle background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20"></div>

              {/* Orbiting dots */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="dot-orbit absolute"
                  style={{
                    animation: `orbit 8s linear infinite`,
                    animationDelay: `${(i * 1.33)}s`,
                  }}
                >
                  <div className="dot"></div>
                </div>
              ))}

              {/* Center Title */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2 animate-pulse-slow">
                  <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Talescape
                  </h1>
                  <div className="flex justify-center gap-1 mt-4">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="px-6 py-16 border-t border-dark-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What makes Talescape special?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-glass group cursor-pointer hover:scale-105 transition-smooth">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-semibold mb-2 text-center">Battle Poetry</h3>
              <p className="text-dark-muted text-sm text-center">Compete with poets and showcase your craft</p>
            </div>

            <div className="card-glass group cursor-pointer hover:scale-105 transition-smooth">
              <Trophy className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-semibold mb-2 text-center">Leaderboard</h3>
              <p className="text-dark-muted text-sm text-center">Climb the ranks and earn recognition</p>
            </div>

            <div className="card-glass group cursor-pointer hover:scale-105 transition-smooth">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-semibold mb-2 text-center">Community</h3>
              <p className="text-dark-muted text-sm text-center">Connect with writers worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="glass border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-dark-muted">
          <p>© 2026 Talescape. Where stories come to life.</p>
        </div>
      </footer>
    </div>
  )
}
