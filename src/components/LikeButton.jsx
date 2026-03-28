import React, { useState } from 'react'
import { Heart } from 'lucide-react'

export default function LikeButton({ initialLikes = 0, postId }) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(initialLikes)

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 transition-smooth ${
        liked ? 'text-red-500' : 'text-dark-muted hover:text-red-400'
      }`}
    >
      <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
      <span className="text-xs">{likeCount}</span>
    </button>
  )
}
