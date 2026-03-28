import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, Menu, X, Home, BookMarked, Zap, Users, Trophy, Settings, LogOut, Search, Bell } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import RightPanel from '../components/RightPanel'
import CreateSection from '../components/CreateSection'
import { mockUserProjects, mockTrendingContent } from '../services/mockData'

export default function Dashboard({ user, onLogout }) {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeNav, setActiveNav] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')

  const handleCreateClick = (type) => {
    navigate('/editor')
  }

  const greeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return `Good Morning, ${user.username}! ☀️`
    if (hour < 18) return `Good Afternoon, ${user.username}! 🌤️`
    return `Good Night, ${user.username}! 🌙`
  }

  return (
    <div className="min-h-screen bg-dark-bg flex">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        user={user}
        onLogout={() => {
          onLogout()
          navigate('/login')
        }}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="glass border-b border-dark-border sticky top-0 z-30">
          <div className="px-8 py-4 space-y-4">
            {/* Header Row */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-glass-light rounded transition-smooth"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              <h2 className="text-2xl font-bold text-white flex-1 mx-4">{greeting()}</h2>

              <div className="flex items-center gap-4">
                <Bell className="w-6 h-6 text-yellow-400 cursor-pointer hover:scale-110 transition-smooth" />
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3 w-5 h-5 text-dark-muted" />
              <input
                type="text"
                placeholder="Search stories, poems, comics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-glass-lighter border border-dark-border rounded-lg pl-12 pr-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth"
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto flex">
          {/* Middle Section */}
          <div className="flex-1">
            {activeNav === 'home' && <CreateSection onCreateClick={handleCreateClick} user={user} />}
            {activeNav !== 'home' && (
              <Feed activeNav={activeNav} user={user} />
            )}
          </div>

          {/* Right Panel */}
          <RightPanel user={user} />
        </div>
      </div>
    </div>
  )
}
