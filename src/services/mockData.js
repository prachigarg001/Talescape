export const generateRandomUsername = () => {
  const adjectives = ['Shadow', 'Cosmic', 'Silent', 'Mystical', 'Digital', 'Neon', 'Phoenix', 'Echo', 'Storm', 'Crystal']
  const nouns = ['Writer', 'Poet', 'Creator', 'Scribe', 'Dreamer', 'Sage', 'Voice', 'Mind', 'Heart', 'Soul']
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  const num = Math.floor(Math.random() * 999)
  return `${adj}${noun}${num}`
}

export const mockStories = [
  {
    id: 1,
    title: 'Whispers of the Wind',
    author: 'Sarah Chen',
    type: 'poetry',
    excerpt: 'A journey through the seasons, where each breeze carries memories of seasons past...',
    likes: 1024,
    comments: 234,
    views: 5234,
    coverGradient: 'from-pink-600 to-rose-500',
    content: '<p>A journey through the seasons...</p>',
    createdAt: new Date('2024-03-20'),
  },
  {
    id: 2,
    title: 'Digital Dreams',
    author: 'Marcus Reid',
    type: 'story',
    excerpt: 'Exploring the intersection of technology and humanity in our modern age...',
    likes: 856,
    comments: 156,
    views: 3456,
    coverGradient: 'from-purple-600 to-indigo-500',
    content: '<p>Exploring the intersection of technology...</p>',
    createdAt: new Date('2024-03-18'),
  },
  {
    id: 3,
    title: 'Cosmic Comics',
    author: 'Emma Johnson',
    type: 'comic',
    excerpt: 'An adventure through the galaxies with stunning visuals and engaging narratives...',
    likes: 1256,
    comments: 342,
    views: 6234,
    coverGradient: 'from-blue-600 to-cyan-500',
    content: '<p>An adventure through the galaxies...</p>',
    createdAt: new Date('2024-03-15'),
  },
  {
    id: 4,
    title: 'Urban Verses',
    author: 'Alex Rivera',
    type: 'poetry',
    excerpt: 'Street poetry that captures the essence of city life and human connections...',
    likes: 734,
    comments: 125,
    views: 2834,
    coverGradient: 'from-orange-600 to-red-500',
    content: '<p>Street poetry that captures...</p>',
    createdAt: new Date('2024-03-12'),
  },
]

export const mockLeaderboard = [
  { rank: 1, name: 'Luna Storm', points: 8420, badge: '🏆', pfpColor: 'bg-purple-500' },
  { rank: 2, name: 'Phoenix Azure', points: 7834, badge: '🥈', pfpColor: 'bg-blue-500' },
  { rank: 3, name: 'Twilight Echo', points: 7156, badge: '🥉', pfpColor: 'bg-pink-500' },
  { rank: 4, name: 'Crystal Voice', points: 6234, badge: '', pfpColor: 'bg-green-500' },
  { rank: 5, name: 'Shadow Poet', points: 5678, badge: '', pfpColor: 'bg-indigo-500' },
  { rank: 6, name: 'Nova Writer', points: 5123, badge: '', pfpColor: 'bg-yellow-500' },
  { rank: 7, name: 'Silent Sage', points: 4567, badge: '', pfpColor: 'bg-red-500' },
  { rank: 8, name: 'Cosmic Mind', points: 4234, badge: '', pfpColor: 'bg-cyan-500' },
]

export const mockBadges = [
  { id: 1, name: 'First Step', icon: '🌟', description: 'Published first story' },
  { id: 2, name: 'Wordsmith', icon: '✍️', description: '100 words written' },
  { id: 3, name: 'Trending', icon: '📈', description: 'Got 500 likes' },
  { id: 4, name: 'Community', icon: '👥', description: 'Followed 10 creators' },
  { id: 5, name: 'Battle Master', icon: '⚔️', description: 'Won 5 poetry battles' },
]

export const mockComments = [
  {
    id: 1,
    author: 'Jordan Lee',
    pfpColor: 'bg-blue-500',
    text: 'This is absolutely beautiful! The imagery is so vivid.',
    timestamp: '2 hours ago',
    likes: 45,
  },
  {
    id: 2,
    author: 'Casey Moon',
    pfpColor: 'bg-pink-500',
    text: 'Love the way you expressed emotions through words. Powerful!',
    timestamp: '4 hours ago',
    likes: 32,
  },
  {
    id: 3,
    author: 'Alex Rivera',
    pfpColor: 'bg-green-500',
    text: 'Cannot wait to see more from you!',
    timestamp: '6 hours ago',
    likes: 28,
  },
]

export const mockUserProjects = [
  {
    id: 1,
    name: 'Midnight Tales',
    type: 'poetry',
    cover: 'from-indigo-600 to-blue-500',
    pages: 42,
    likes: 234,
    status: 'published',
  },
  {
    id: 2,
    name: 'Urban Verses',
    type: 'story',
    cover: 'from-pink-600 to-rose-500',
    pages: 28,
    likes: 156,
    status: 'draft',
  },
  {
    id: 3,
    name: 'Cosmic Poetry',
    type: 'comic',
    cover: 'from-purple-600 to-pink-500',
    pages: 35,
    likes: 389,
    status: 'published',
  },
]

export const mockTrendingContent = [
  {
    id: 1,
    title: 'The Last Sunset',
    author: 'Luna Writer',
    type: 'poetry',
    trend: '+234 this week',
    views: 12456,
  },
  {
    id: 2,
    title: 'Lost in Translation',
    author: 'Phoenix Voice',
    type: 'story',
    trend: '+189 this week',
    views: 9876,
  },
  {
    id: 3,
    title: 'Galaxy Quest',
    author: 'Nova Creator',
    type: 'comic',
    trend: '+345 this week',
    views: 15234,
  },
]

export const mockFollowingActivity = [
  { name: 'Alex Rivera', status: 'Started writing a new story', time: '2 min ago' },
  { name: 'Jordan Lee', status: 'Liked your poem "Moonlight"', time: '1 hour ago' },
  { name: 'Casey Moon', status: 'Published new work', time: '3 hours ago' },
  { name: 'Sam Taylor', status: 'Followed you', time: '5 hours ago' },
  { name: 'Riley Stone', status: 'Commented on your story', time: '1 day ago' },
]
