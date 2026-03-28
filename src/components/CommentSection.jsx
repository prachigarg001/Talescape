import React, { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { mockComments } from '../services/mockData'

export default function CommentSection({ postId }) {
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState(mockComments)
  const [newComment, setNewComment] = useState('')

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'You',
        pfpColor: 'bg-blue-500',
        text: newComment,
        timestamp: 'now',
        likes: 0,
      }
      setComments([comment, ...comments])
      setNewComment('')
    }
  }

  return (
    <div className="space-y-4">
      {/* Toggle Button */}
      <button
        onClick={() => setShowComments(!showComments)}
        className="flex items-center gap-2 text-dark-muted hover:text-blue-400 transition-smooth"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-xs">{comments.length}</span>
      </button>

      {/* Comments Section */}
      {showComments && (
        <div className="glass rounded-lg p-4 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-white">Comments</h4>
            <button
              onClick={() => setShowComments(false)}
              className="p-1 hover:bg-glass-light rounded transition-smooth"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Add Comment */}
          <div className="flex gap-2 pb-4 border-b border-dark-border">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 bg-glass-lighter border border-dark-border rounded px-3 py-2 text-xs text-white placeholder-dark-muted focus:outline-none focus:border-blue-400"
              onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
            />
            <button
              onClick={handleAddComment}
              className="p-2 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30 transition-smooth"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Comments List */}
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <div
                  className={`w-8 h-8 rounded-full ${comment.pfpColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {comment.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-white">{comment.author}</p>
                    <span className="text-xs text-dark-muted">{comment.timestamp}</span>
                  </div>
                  <p className="text-xs text-dark-muted mt-1">{comment.text}</p>
                  <button className="text-xs text-dark-muted hover:text-blue-400 transition-smooth mt-2">
                    ❤️ {comment.likes}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
