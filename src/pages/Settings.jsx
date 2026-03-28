import React, { useState } from 'react'
import { BookOpen, User, FileText, Calendar, Save, ArrowLeft } from 'lucide-react'

export default function Settings({ user, onUpdateUserProfile, onNavigate }) {
  const [formData, setFormData] = useState({
    realName: user?.realName || '',
    anonymousName: user?.anonymousName || '',
    age: user?.age || '',
    birthDate: user?.birthDate || '',
    bio: user?.bio || '',
  })

  const [avatarStyle, setAvatarStyle] = useState(user?.avatarStyle || 'discord')

  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setIsSaving(true)

    setTimeout(() => {
      const updatedUser = {
        ...user,
        ...formData,
        avatarStyle: avatarStyle,
      }
      onUpdateUserProfile(updatedUser)
      setSaveSuccess(true)
      setIsSaving(false)

      setTimeout(() => {
        setSaveSuccess(false)
      }, 3000)
    }, 500)
  }

  return (
    <div className="px-8 py-6 space-y-6">
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-smooth font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      <h2 className="text-3xl font-bold text-white">Account Settings</h2>

      <div className="max-w-2xl glass rounded-2xl p-8">
        <form onSubmit={handleSave} className="space-y-6">
          <div className="pb-6 border-b border-dark-border">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl border-2 border-blue-400/50"
                style={{
                  background: user.avatarColor || '#3b82f6',
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'
                }}
              >
                {user.username.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="text-sm text-dark-muted">Username</p>
                <p className="text-xl font-bold text-white">@{user.username}</p>
                <p className="text-xs text-dark-muted">Member since {user.joinDate}</p>
              </div>
            </div>
          </div>

          {/* Real Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white flex items-center gap-2">
              <User className="w-4 h-4 text-blue-400" />
              Real Name (Optional)
            </label>
            <input
              type="text"
              name="realName"
              placeholder="Enter your real name"
              value={formData.realName}
              onChange={handleChange}
              className="w-full bg-glass-lighter border border-dark-border rounded-lg px-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth"
            />
          </div>

          {/* Anonymous Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white flex items-center gap-2">
              <User className="w-4 h-4 text-purple-400" />
              Public Display Name (Optional)
            </label>
            <input
              type="text"
              name="anonymousName"
              placeholder="How you'd like to be known publicly"
              value={formData.anonymousName}
              onChange={handleChange}
              className="w-full bg-glass-lighter border border-dark-border rounded-lg px-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth"
            />
            <p className="text-xs text-dark-muted">Your unique username is always <span className="text-blue-400 font-semibold">@{user.username}</span></p>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-green-400" />
              Bio (Optional)
            </label>
            <textarea
              name="bio"
              placeholder="Share a bit about yourself, your writing style, or interests..."
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              maxLength="200"
              className="w-full bg-glass-lighter border border-dark-border rounded-lg px-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth resize-none"
            />
            <div className="flex justify-between text-xs text-dark-muted">
              <span>Max 200 characters</span>
              <span>{formData.bio.length}/200</span>
            </div>
          </div>

          {/* Age and Birthdate */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                Age (Optional)
              </label>
              <input
                type="number"
                name="age"
                placeholder="Your age"
                value={formData.age}
                onChange={handleChange}
                min="13"
                max="120"
                className="w-full bg-glass-lighter border border-dark-border rounded-lg px-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-400" />
                Date of Birth (Optional)
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full bg-glass-lighter border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-smooth"
              />
            </div>
          </div>

          {/* Avatar Style Selection */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-white">Avatar Style</label>
            <div className="grid grid-cols-4 gap-2">
              {['discord', 'minecraft', 'gradient', 'neon'].map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => setAvatarStyle(style)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold transition-smooth capitalize border-2 ${
                    avatarStyle === style
                      ? 'border-blue-400 bg-blue-400/10 text-blue-300'
                      : 'border-dark-border bg-glass-lighter text-dark-muted hover:border-blue-400/50'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
            <p className="text-xs text-dark-muted mt-2">Customize how your avatar looks across the platform</p>
          </div>

          {/* Success Message */}
          {saveSuccess && (
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3">
              <p className="text-sm text-green-300 font-semibold">✓ Profile updated successfully!</p>
            </div>
          )}

          {/* Save Button */}
          <div>
            <button
              type="submit"
              disabled={isSaving}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 transition-smooth font-semibold text-white flex items-center justify-center gap-2"
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
