import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, BookOpen, Award } from 'lucide-react'
import { mockBadges, mockLeaderboard } from '../services/mockData'
import { generateAvatar } from '../services/avatarService'

export default function RightPanel({ user }) {
  const [currentDate, setCurrentDate] = useState(new Date())

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long' })
  const year = currentDate.getFullYear()
  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)

  const days = Array(firstDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  )

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const topCreators = mockLeaderboard.slice(0, 5)

  return (
    <div className="w-80 glass border-l border-dark-border flex flex-col overflow-hidden hidden lg:flex">
      {/* Calendar */}
      <div className="border-b border-dark-border p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-white text-sm">Calendar</h3>
          <div className="flex gap-2">
            <button
              onClick={prevMonth}
              className="p-1 hover:bg-glass-light rounded transition-smooth"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextMonth}
              className="p-1 hover:bg-glass-light rounded transition-smooth"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="text-center text-dark-muted text-xs mb-3">
          {monthName} {year}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-xs text-dark-muted font-semibold">
              {day.charAt(0)}
            </div>
          ))}
          {days.map((day, idx) => (
            <div
              key={idx}
              className={`text-center text-xs py-2 rounded transition-smooth ${
                day === null
                  ? ''
                  : day === new Date().getDate() &&
                    currentDate.getMonth() === new Date().getMonth() &&
                    currentDate.getFullYear() === new Date().getFullYear()
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-white'
                  : 'hover:bg-glass-light cursor-pointer text-white'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      {/* Badges/Achievements */}
      <div className="border-b border-dark-border p-6 space-y-4">
        <h3 className="font-semibold text-white text-sm flex items-center gap-2">
          <Award className="w-4 h-4 text-yellow-400" />
          Achievements
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {mockBadges.map((badge) => (
            <div
              key={badge.id}
              className="glass rounded-lg p-3 flex flex-col items-center justify-center cursor-pointer hover:bg-glass-light transition-smooth group"
              title={badge.description}
            >
              <span className="text-2xl mb-1">{badge.icon}</span>
              <p className="text-xs text-center font-semibold text-white group-hover:text-blue-400 transition-smooth">
                {badge.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="flex-1 overflow-y-auto p-6 space-y-3">
        <h3 className="font-semibold text-white text-sm flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Top Creators
        </h3>

        <div className="space-y-2">
          {topCreators.map((creator) => {
            const avatarData = generateAvatar(creator.name)
            return (
              <div
                key={creator.rank}
                className="glass rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-glass-light transition-smooth"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="text-sm font-bold text-blue-400 flex-shrink-0">#{creator.rank}</span>
                  <div 
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0 border border-blue-400/30"
                    style={{
                      background: avatarData.color,
                      boxShadow: '0 0 8px rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    {creator.name.substring(0, 1).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white truncate">{creator.name}</p>
                    <p className="text-xs text-dark-muted">{creator.points} pts</p>
                  </div>
                </div>
                {creator.badge && <span className="text-sm flex-shrink-0">{creator.badge}</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
