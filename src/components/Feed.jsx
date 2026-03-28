import React from 'react'
import { Sparkles, Eye, Share2 } from 'lucide-react'
import LikeButton from './LikeButton'
import CommentSection from './CommentSection'
import { mockStories, mockFollowingActivity, mockLeaderboard } from '../services/mockData'

export default function Feed({ activeNav, user }) {
  if (activeNav === 'books') {
    return (
      <div className="px-8 py-6 space-y-6">
        <h3 className="text-2xl font-bold text-white">Books</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockStories.filter((s) => s.type === 'story').map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    )
  }

  if (activeNav === 'comics') {
    return (
      <div className="px-8 py-6 space-y-6">
        <h3 className="text-2xl font-bold text-white">Comics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockStories.filter((s) => s.type === 'comic').map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    )
  }

  if (activeNav === 'poetry') {
    return (
      <div className="px-8 py-6 space-y-6">
        <h3 className="text-2xl font-bold text-white">Poetry Collection</h3>
        <div className="space-y-4">
          {mockStories.filter((s) => s.type === 'poetry').map((story) => (
            <PoetryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    )
  }

  if (activeNav === 'community') {
    return (
      <div className="px-8 py-6 space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Community Activity</h3>
          <div className="space-y-3">
            {mockFollowingActivity.map((activity, idx) => (
              <div key={idx} className="glass rounded-lg p-4 flex items-center justify-between hover:bg-glass-light transition-smooth cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    {activity.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{activity.name}</p>
                    <p className="text-xs text-dark-muted">{activity.status}</p>
                  </div>
                </div>
                <p className="text-xs text-dark-muted">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Latest Stories</h3>
          <div className="space-y-4">
            {mockStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (activeNav === 'leaderboard') {
    return (
      <div className="px-8 py-6 space-y-4">
        <h3 className="text-2xl font-bold text-white">Leaderboard</h3>
        {mockLeaderboard.map((poet) => (
          <div key={poet.rank} className="glass rounded-lg p-4 flex items-center justify-between hover:bg-glass-light transition-smooth cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-blue-400">#{poet.rank}</span>
              <div className={`w-12 h-12 rounded-full ${poet.pfpColor} flex items-center justify-center text-white font-bold`}>
                {poet.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{poet.name}</p>
                <p className="text-xs text-dark-muted">{poet.points} points</p>
              </div>
            </div>
            {poet.badge && <span className="text-2xl">{poet.badge}</span>}
          </div>
        ))}
      </div>
    )
  }

  return null
}

function StoryCard({ story }) {
  return (
    <div className="card-glass space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
            {story.author.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-white">{story.author}</p>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">{story.type}</span>
            </div>
            <p className="text-xs text-dark-muted">{story.createdAt.toLocaleDateString()}</p>
          </div>
        </div>
        <Sparkles className="w-5 h-5 text-yellow-400" />
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div
          className={`col-span-4 rounded-lg bg-gradient-to-br ${story.coverGradient} h-32 flex items-end justify-center p-4 relative overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-20 bg-pattern" />
        </div>
        <div className="col-span-8 space-y-3">
          <div>
            <h4 className="text-lg font-bold text-white">{story.title}</h4>
            <p className="text-sm text-dark-muted mt-2">{story.excerpt}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 pt-4 border-t border-dark-border">
        <LikeButton initialLikes={story.likes} postId={story.id} />
        <CommentSection postId={story.id} />
        <button className="flex items-center gap-2 text-dark-muted hover:text-green-400 transition-smooth">
          <Share2 className="w-4 h-4" />
          <span className="text-xs">Share</span>
        </button>
        <button className="flex items-center gap-2 text-dark-muted hover:text-cyan-400 transition-smooth">
          <Eye className="w-4 h-4" />
          <span className="text-xs">{story.views}</span>
        </button>
      </div>
    </div>
  )
}

function PoetryCard({ story }) {
  return (
    <div className="card-glass space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
            {story.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-white">{story.author}</p>
            <p className="text-xs text-dark-muted">{story.createdAt.toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-white mb-2">{story.title}</h4>
        <p className="text-sm text-dark-muted leading-relaxed">{story.excerpt}</p>
      </div>

      <div className="flex items-center gap-6 pt-4 border-t border-dark-border">
        <LikeButton initialLikes={story.likes} postId={story.id} />
        <CommentSection postId={story.id} />
        <button className="flex items-center gap-2 text-dark-muted hover:text-green-400 transition-smooth">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

