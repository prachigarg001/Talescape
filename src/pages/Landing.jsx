import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Zap, Users, Trophy } from 'lucide-react'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg flex flex-col">
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

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white leading-tight">
              Welcome to <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Talescape</span>
            </h1>
            <p className="text-xl text-dark-muted">
              A poetic journey where writers and readers unite to share beautiful stories, comics, and poetry
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="card-glass group cursor-pointer">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-semibold mb-2">Battle Poetry</h3>
              <p className="text-dark-muted text-sm">Compete with poets and showcase your craft</p>
            </div>

            <div className="card-glass group cursor-pointer">
              <Trophy className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-semibold mb-2">Leaderboard</h3>
              <p className="text-dark-muted text-sm">Climb the ranks and earn recognition</p>
            </div>

            <div className="card-glass group cursor-pointer">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-smooth" />
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-dark-muted text-sm">Connect with writers worldwide</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/login')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-smooth font-semibold text-lg"
          >
            Start Your Journey
          </button>
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
