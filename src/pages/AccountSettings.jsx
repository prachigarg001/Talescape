import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, User, FileText, Calendar, ArrowRight, Save } from 'lucide-react'

export default function AccountSettings({ user, onUpdateUserProfile }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    realName: user?.realName || '',
    anonymousName: user?.anonymousName || user?.username || '',
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

    // Simulate API call
    setTimeout(() => {
      const updatedUser = {
        ...user,
        ...formData,
        avatarStyle: avatarStyle,
      }
      onUpdateUserProfile(updatedUser)
      setSaveSuccess(true)
      setIsSaving(false)

      // Redirect to dashboard after 1.5 seconds
      setTimeout(() => {
        navigate('/dashboard')
      }, 1500)
    }, 500)
  }

  const handleSkip = () => {
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Talescape
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Complete Your Profile</h1>
          <p className="text-dark-muted">Add some details to personalize your experience (optional)</p>
        </div>

        {/* Main Card */}
        <div className="glass rounded-2xl p-8">
          <form onSubmit={handleSave} className="space-y-6">
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
                Public Anonymous Name (Optional)
              </label>
              <input
                type="text"
                name="anonymousName"
                placeholder="How you'd like to be known publicly"
                value={formData.anonymousName}
                onChange={handleChange}
                className="w-full bg-glass-lighter border border-dark-border rounded-lg px-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth"
              />
              <p className="text-xs text-dark-muted">Currently using: <span className="text-blue-400 font-semibold">@{user?.username}</span></p>
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

            {/* Age and Birthdate - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Age */}
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

              {/* Birthdate */}
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
                <p className="text-sm text-green-300 font-semibold">Profile updated successfully! Redirecting...</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSaving}
                className="flex-1 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 transition-smooth font-semibold text-white flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                {isSaving ? 'Saving...' : 'Save Profile'}
              </button>
              <button
                type="button"
                onClick={handleSkip}
                className="flex-1 py-3 rounded-lg glass border border-dark-border hover:bg-glass-light transition-smooth font-semibold text-white flex items-center justify-center gap-2"
              >
                Skip for Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <p className="text-sm text-blue-200">
              💡 <span className="font-semibold">Tip:</span> You can edit your profile anytime from settings. Your username <span className="text-blue-400 font-semibold">@{user?.username}</span> is your unique identifier.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
