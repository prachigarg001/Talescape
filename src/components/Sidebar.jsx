import React from 'react'
import { Plus, Zap, BookMarked, Trophy, Settings, LogOut, Home, X } from 'lucide-react'
import { BookOpen } from 'lucide-react'

export default function Sidebar({ sidebarOpen, setSidebarOpen, activeNav, setActiveNav, user, onLogout }) {
  const navItems = [
    { id: 'home', name: 'Dashboard', icon: Home },
    { id: 'books', name: 'Books', icon: BookMarked },
    { id: 'comics', name: 'Comics', icon: Plus },
    { id: 'poetry', name: 'Poetry', icon: Zap },
    { id: 'community', name: 'Community', icon: Home },
    { id: 'leaderboard', name: 'Leaderboard', icon: Trophy },
    { id: 'settings', name: 'Settings', icon: Settings },
  ]

  return (
    <div
      className={`fixed lg:static top-0 left-0 h-screen w-72 glass border-r border-dark-border flex flex-col overflow-hidden transition-transform z-40 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      {/* Header */}
      <div className="px-8 py-6 border-b border-dark-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Talescape
          </span>
        </div>
        <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-2 hover:bg-glass-light rounded">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-3 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveNav(item.id)
                setSidebarOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                activeNav === item.id ? 'glass bg-glass-light border-l-4 border-blue-400' : 'hover:glass'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          )
        })}
      </nav>

      {/* Account Section */}
      <div className="border-t border-dark-border px-4 py-4 space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-lg glass">
          <div className={`w-10 h-10 rounded-full ${user.pfpColor} flex items-center justify-center text-white font-bold`}>
            {user.username.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">@{user.username}</p>
            <p className="text-xs text-dark-muted truncate">{user.email}</p>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-smooth"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
