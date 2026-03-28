import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { ArrowLeft, Sparkles, Send } from 'lucide-react'

export default function Editor({ user }) {
  const navigate = useNavigate()
  const { id } = useParams()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [type, setType] = useState('story')
  const [isPublishing, setIsPublishing] = useState(false)

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean'],
    ],
  }

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'font',
    'align',
    'blockquote',
    'code-block',
    'list',
    'link',
  ]

  const handlePublish = () => {
    if (!title.trim() || !content.trim()) {
      alert('Please add a title and content')
      return
    }

    setIsPublishing(true)
    setTimeout(() => {
      const newPost = {
        id: Date.now(),
        title,
        content,
        type,
        author: user.username,
        createdAt: new Date(),
        likes: 0,
        comments: 0,
      }

      // Store in mock storage
      const posts = JSON.parse(localStorage.getItem('talescape_posts') || '[]')
      posts.push(newPost)
      localStorage.setItem('talescape_posts', JSON.stringify(posts))

      setIsPublishing(false)
      navigate('/dashboard')
    }, 1000)
  }

  const handleSaveDraft = () => {
    const draft = {
      id: id || Date.now(),
      title,
      content,
      type,
      savedAt: new Date(),
    }

    const drafts = JSON.parse(localStorage.getItem('talescape_drafts') || '[]')
    const index = drafts.findIndex((d) => d.id === id)

    if (index >= 0) {
      drafts[index] = draft
    } else {
      drafts.push(draft)
    }

    localStorage.setItem('talescape_drafts', JSON.stringify(drafts))
    alert('Draft saved!')
  }

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col">
      {/* Top Bar */}
      <div className="glass border-b border-dark-border sticky top-0 z-40">
        <div className="px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-dark-muted hover:text-white transition-smooth"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="flex items-center gap-4">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-glass-lighter border border-dark-border rounded px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-400"
            >
              <option value="story">Story</option>
              <option value="poetry">Poetry</option>
              <option value="comic">Comic</option>
            </select>

            <button
              onClick={handleSaveDraft}
              className="px-4 py-2 rounded-lg glass hover:bg-glass-light transition-smooth text-sm font-medium"
            >
              Save Draft
            </button>

            <button
              onClick={handlePublish}
              disabled={isPublishing}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-smooth text-sm font-medium flex items-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {isPublishing ? 'Publishing...' : 'Publish'}
            </button>
          </div>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full px-8 py-6 flex flex-col space-y-4">
          {/* Title Input */}
          <div className="space-y-2">
            <label className="text-sm text-dark-muted">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title..."
              className="w-full bg-glass-lighter border border-dark-border rounded-lg px-4 py-3 text-white placeholder-dark-muted focus:outline-none focus:border-blue-400 transition-smooth text-2xl font-bold"
            />
          </div>

          {/* AI Suggestion Button */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-glass-light transition-smooth text-sm font-medium text-yellow-400 w-fit">
            <Sparkles className="w-4 h-4" />
            Get AI Suggestions
          </button>

          {/* Rich Text Editor */}
          <div className="flex-1 overflow-hidden">
            <ReactQuill
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              theme="snow"
              placeholder="Start writing your masterpiece..."
              className="h-full rounded-lg glass-editor"
            />
          </div>
        </div>
      </div>

      {/* Custom styles for Quill editor */}
      <style>{`
        .glass-editor .ql-container {
          background: rgba(22, 27, 51, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0 0 8px 8px;
          font-size: 16px;
          height: 100% !important;
        }

        .glass-editor .ql-editor {
          color: #e4e9ff;
          min-height: 400px;
        }

        .glass-editor .ql-editor.ql-blank::before {
          color: #9ca3af;
          font-style: italic;
        }

        .glass-editor .ql-toolbar {
          background: rgba(22, 27, 51, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px 8px 0 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-editor .ql-toolbar button:hover,
        .glass-editor .ql-toolbar button.ql-active,
        .glass-editor .ql-toolbar.ql-snow .ql-picker-label:hover,
        .glass-editor .ql-toolbar.ql-snow .ql-picker-item:hover,
        .glass-editor .ql-toolbar.ql-snow .ql-picker-item.ql-selected {
          color: #3b82f6;
        }

        .glass-editor .ql-stroke {
          stroke: #9ca3af;
        }

        .glass-editor .ql-toolbar.ql-snow .ql-stroke {
          stroke: #9ca3af;
        }

        .glass-editor .ql-fill,
        .glass-editor .ql-toolbar.ql-snow .ql-fill {
          fill: #9ca3af;
        }

        .glass-editor .ql-picker-label {
          color: #9ca3af;
        }

        .glass-editor {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .glass-editor .ql-container {
          flex: 1;
          overflow-y: auto;
        }
      `}</style>
    </div>
  )
}
