// Discord/Minecraft-style Avatar Generator
export const generateAvatar = (username, seed = 0) => {
  // Simple deterministic color based on username
  let hash = 0
  for (let i = 0; i < username.length; i++) {
    const char = username.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }

  const colors = [
    { bg: 'from-blue-600 to-blue-400', border: 'border-blue-500' },
    { bg: 'from-purple-600 to-purple-400', border: 'border-purple-500' },
    { bg: 'from-pink-600 to-pink-400', border: 'border-pink-500' },
    { bg: 'from-red-600 to-red-400', border: 'border-red-500' },
    { bg: 'from-green-600 to-green-400', border: 'border-green-500' },
    { bg: 'from-indigo-600 to-indigo-400', border: 'border-indigo-500' },
    { bg: 'from-cyan-600 to-cyan-400', border: 'border-cyan-500' },
    { bg: 'from-yellow-600 to-yellow-400', border: 'border-yellow-500' },
    { bg: 'from-emerald-600 to-emerald-400', border: 'border-emerald-500' },
    { bg: 'from-rose-600 to-rose-400', border: 'border-rose-500' },
  ]

  const color = colors[Math.abs(hash) % colors.length]
  return color
}

export const avatarStyles = [
  { id: 'discord', label: 'Discord', icon: '👤' },
  { id: 'minecraft', label: 'Minecraft', icon: '⬜' },
  { id: 'gradient', label: 'Gradient', icon: '🌈' },
  { id: 'neon', label: 'Neon', icon: '✨' },
]

export const AvatarPresets = {
  discord: [
    'bg-blue-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-red-500',
    'bg-green-500',
    'bg-indigo-500',
    'bg-cyan-500',
    'bg-yellow-500',
  ],
  minecraft: [
    'from-amber-600 to-amber-400',
    'from-red-600 to-red-400',
    'from-green-600 to-green-400',
    'from-blue-600 to-blue-400',
    'from-purple-600 to-purple-400',
    'from-pink-600 to-pink-400',
    'from-orange-600 to-orange-400',
    'from-emerald-600 to-emerald-400',
  ],
}
