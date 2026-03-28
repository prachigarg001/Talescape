# Talescape 📖✨

A modern, full-featured creative writing platform where poets, storytellers, and comic creators connect, create, and compete.

## Features

### 🎨 Modern UI/UX
- **Dark Theme** with glassmorphism and neumorphism effects
- **Fully Responsive** design (mobile, tablet, desktop)
- **Smooth Animations** and transitions
- **Professional Typography** and color scheme

### 🔐 Authentication
- Email/Password signup and login
- Google OAuth integration
- GitHub OAuth integration
- Anonymous user generation (e.g., "ShadowWriter123")
- Profile color customization

### 📝 Dashboard
- **Collapsible Sidebar** with navigation menu
- **Search functionality** for stories, poems, and comics
- **Welcome message** with time-based greetings
- **Create section** with three card types: Story, Poetry, Comic
- **Projects display** with edit and view options
- **Trending content** section with rankings

### ✍️ Rich Text Editor
- **React Quill** integration with full toolbar
- Font selection and text formatting (bold, italic, underline)
- Color and background styling
- Code blocks and blockquotes
- List support (ordered/bullet)
- Link insertion
- **Save Draft** functionality
- **Publish** with content type selection

### 💬 Social Interactions
- **Like button** with dynamic count
- **Comment section** with add/view functionality
- **Share button**
- **View tracking**

### 📊 Leaderboard & Achievements
- **Top creators ranking** with badges
- **Achievement badges** (First Step, Wordsmith, Trending, etc.)
- **Mini calendar** widget
- **Trending content** display

### 📚 Content Organization
- **My Books** - Story collection
- **Comics** - Comic collection  
- **Poetry** - Poetry collection
- **Community** - Following activity and latest posts
- **Leaderboard** - Creator rankings

### 💾 Data Persistence
- **LocalStorage** for user sessions
- **Draft saving** for unpublished content
- **Mock data** with realistic content samples
- No backend required (frontend only)

## Tech Stack

- **Framework**: React 18.2
- **Routing**: React Router DOM v6
- **Rich Text Editor**: React Quill
- **Styling**: Tailwind CSS 3.3
- **Icons**: Lucide React
- **Build Tool**: Vite 8
- **Styling**: PostCSS with Autoprefixer

## Project Structure

```
src/
├── pages/
│   ├── Landing.jsx          # Landing page with features
│   ├── Login.jsx            # Auth page (login/signup)
│   ├── Dashboard.jsx        # Main dashboard
│   └── Editor.jsx           # Rich text editor
├── components/
│   ├── Sidebar.jsx          # Navigation sidebar
│   ├── Feed.jsx             # Content feed
│   ├── RightPanel.jsx       # Calendar & leaderboard
│   ├── CreateSection.jsx    # Create content cards
│   ├── LikeButton.jsx       # Like interaction
│   └── CommentSection.jsx   # Comments
├── services/
│   └── mockData.js          # Mock data and utilities
├── App.jsx                  # Root component with routing
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/talescape.git
cd talescape
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:5173/`

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Usage

### Landing Page
- Visit the home page to see platform features
- Click "Get Started" to begin

### Authentication
1. Click "Get Started" or navigate to login
2. Choose:
   - Email/Password signup
   - Google OAuth
   - GitHub OAuth
3. Set username and profile color (optional)

### Dashboard Navigation
- **Home**: View community activity and create new content
- **My Books**: View your stories
- **Comics**: View your comics
- **Poetry**: View your poems
- **Community**: Follow creators and see their activity
- **Leaderboard**: View top creators
- **Settings**: Account settings

### Creating Content
1. Click "Create Comic", "Write Story", or "Compose Poetry"
2. Use the rich text editor to compose
3. Save as draft or publish immediately
4. Share with the community

### Interacting with Content
- **Like**: Click the heart icon to like posts
- **Comment**: Add comments to any post
- **Share**: Share posts with others
- **View**: Track view counts

## Features Demo

### Authentication Flow
- Signup as anonymous user or with email
- Google/GitHub OAuth ready
- User session persisted in localStorage

### Content Creation
- Title input with auto-focus
- Full-featured Quill editor
- Draft saving
- One-click publishing
- Content type selection (Story/Poetry/Comic)

### Social Features
- Real-time like counter
- Nested comments with timestamps
- Activity feed with following updates
- Community interactions

### UI Theme
- Dark mode with gradient backgrounds
- Glassmorphism effects (frosted glass)
- Neumorphic depth and shadows
- Smooth hover animations
- Mobile-responsive design

## Mock Data

The app includes mock data with:
- Pre-loaded stories, poems, and comics
- User profiles and accounts
- Comments and interactions
- Leaderboard rankings
- Achievement badges
- Trending content

All data is stored in `src/services/mockData.js` and can be easily modified or connected to a real API.

## Future Enhancements

- [ ] Backend API integration
- [ ] Real user authentication
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Real-time notifications
- [ ] Advanced search and filtering
- [ ] User profiles and following
- [ ] Battle Poetry tournaments
- [ ] AI-powered suggestions
- [ ] Content moderation
- [ ] Analytics dashboard

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized with Vite for fast build times
- React 18 with concurrent rendering
- Lazy loading support
- Optimized CSS with Tailwind
- Minimal bundle size

## Accessibility

- Semantic HTML
- Keyboard navigation support
- ARIA labels where needed
- Color contrast compliant
- Focus indicators on interactive elements

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is open source and available under the MIT License.

## Author

**Talescape Development Team**

## Support

For support, email support@talescape.app or open an issue on GitHub.

## Disclaimer

This is a frontend-only demo application. All data is stored locally in the browser using localStorage and will be lost when clearing browser data. For a production application, integrate with a real backend.

---

**Happy Creating! ✨📖**
