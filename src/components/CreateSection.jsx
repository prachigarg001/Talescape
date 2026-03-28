import React from 'react'
import { BookMarked, Zap, PenTool } from 'lucide-react'
import { mockUserProjects, mockStories, mockTrendingContent } from '../services/mockData'

export default function CreateSection({ onCreateClick, user }) {
  const createOptions = [
    {
      id: 'comic',
      title: 'Create Comic',
      icon: PenTool,
      gradient: 'from-pink-600 to-rose-500',
      description: 'Design visual stories',
      color: 'text-pink-400',
    },
    {
      id: 'story',
      title: 'Write Story',
      icon: BookMarked,
      gradient: 'from-purple-600 to-indigo-500',
      description: 'Tell your narrative',
      color: 'text-purple-400',
    },
    {
      id: 'poetry',
      title: 'Compose Poetry',
      icon: Zap,
      gradient: 'from-blue-600 to-cyan-500',
      description: 'Express emotions',
      color: 'text-blue-400',
    },
  ]

  return (
    <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
      {/* Create Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">Create Your Masterpiece</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {createOptions.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.id}
                onClick={() => onCreateClick(option.id)}
                className="card-glass h-64 flex flex-col items-center justify-center p-6 group cursor-pointer border-2 border-transparent hover:border-blue-400/50 transition-all"
              >
                <div className={`bg-gradient-to-br ${option.gradient} w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{option.title}</h4>
                <p className="text-sm text-dark-muted text-center">{option.description}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Your Projects */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Your Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockUserProjects.map((project) => (
            <div key={project.id} className="card-glass group cursor-pointer overflow-hidden">
              {/* Cover */}
              <div className={`h-32 bg-gradient-to-br ${project.cover} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-pattern group-hover:scale-110 transition-smooth" />
              </div>
              {/* Info */}
              <div className="p-4 space-y-3">
                <h4 className="font-bold text-white">{project.name}</h4>
                <div className="flex items-center justify-between text-sm text-dark-muted">
                  <span>{project.pages} pages</span>
                  <span>❤️ {project.likes}</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded bg-blue-500/20 text-blue-400 text-xs hover:bg-blue-500/30 transition-smooth">
                    Edit
                  </button>
                  <button className="flex-1 px-3 py-2 rounded bg-purple-500/20 text-purple-400 text-xs hover:bg-purple-500/30 transition-smooth">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Trending Now</h3>
        <div className="space-y-3">
          {mockTrendingContent.map((item, idx) => (
            <div key={item.id} className="glass rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-glass-light transition-smooth">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-2xl font-bold text-blue-400">#{idx + 1}</span>
                <div className="flex-1">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-dark-muted">by {item.author}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-green-400">{item.trend}</p>
                <p className="text-xs text-dark-muted">{item.views} views</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
