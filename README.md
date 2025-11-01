# Personal Portfolio Website

Modern, responsive portfolio website built with React and Vite, featuring a single-page scroll design, markdown-based blog system, and smooth animations.

## 🚀 Live Site

Visit: [hbatta.github.io](https://hbatta.github.io)

## ✨ Features

### Design & UX
- **Single-Page Scroll Layout** - Smooth scrolling through Home, Experience, and Education sections
- **Floating Navigation** - Minimalist scroll dots for section navigation
- **Dark Mode Theme** - Eye-friendly dark color scheme throughout
- **Smooth Animations** - Fade-in effects, floating elements, and scroll progress bar
- **Mobile Responsive** - Fully optimized for all screen sizes
- **Accessibility** - Respects `prefers-reduced-motion` for users with motion sensitivity

### Content
- **Profile Section** - Centered hero with photo, tagline, and social links
- **Experience Cards** - Animated cards showcasing work history with hover effects
- **Education Timeline** - Academic background with clean card layout
- **Blog System** - Markdown-based blog with frontmatter support
- **Resume Download** - Direct PDF download link

### Technical
- **Vite Build System** - Lightning-fast HMR and optimized builds
- **React 18** - Modern React with hooks and functional components
- **React Router v5** - Hash-based routing for GitHub Pages compatibility
- **Markdown Processing** - gray-matter + react-markdown + remark-gfm
- **Bootstrap 5** - Responsive grid and utility classes

## 🛠️ Technology Stack

### Core
- **React 18.3.1** - UI library
- **Vite 7.1.12** - Build tool and dev server
- **React Router DOM 5.3.4** - Client-side routing (HashRouter)

### Styling
- **Bootstrap 5.3.3** - CSS framework
- **Custom CSS** - Dark theme, animations, and layout

### Blog & Content
- **react-markdown 10.1.0** - Markdown renderer
- **gray-matter 4.0.3** - Frontmatter parser
- **remark-gfm 4.0.1** - GitHub Flavored Markdown support
- **buffer 6.0.3** - Polyfill for browser compatibility

### Deployment
- **gh-pages 3.1.0** - GitHub Pages deployment utility

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/hbatta/hbatta.github.io.git
cd hbatta.github.io

# Install dependencies
npm install
```

## 🏃 Development

```bash
# Start development server (http://localhost:3000)
npm start

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ScrollPortfolio.jsx    # Main single-page scroll layout
│   ├── ScrollIndicator.jsx    # Floating dot navigation
│   ├── ScrollProgress.jsx     # Top progress bar
│   ├── BlogList.jsx           # Blog listing page
│   └── BlogPost.jsx           # Individual blog post
├── posts/                     # Markdown blog posts
│   ├── welcome-to-my-blog.md
│   ├── migrating-to-vite.md
│   └── coffee-and-code.md
├── utils/
│   └── blogPosts.js           # Blog post loader
├── images/                    # Static images
├── App.js                     # Root component & routing
├── App.css                    # Global styles & animations
└── index.js                   # Entry point
```

## 🎨 Key Features Explained

### Single-Page Scroll Design
The portfolio uses a modern single-page layout where users scroll through sections rather than navigating between pages. Smooth scroll behavior and section highlighting provide excellent UX.

### Floating Navigation
Instead of a traditional navbar, the site uses:
- **Scroll Dots** - Fixed on the right side, highlight active section
- **Blog Button** - Floating button in bottom-right corner
- **Progress Bar** - Thin blue line at top showing scroll position

### Blog System
Markdown files in `src/posts/` with YAML frontmatter:
```markdown
---
title: "Post Title"
date: "2025-01-01"
description: "Brief description"
slug: "url-slug"
---

# Content here...
```

Posts are automatically loaded, sorted by date, and rendered with full markdown support including GFM (tables, strikethrough, task lists, etc.).

### Animations
- **Fade-in on load** - Sections and cards appear smoothly
- **Floating profile image** - Subtle up/down animation
- **Hover effects** - Cards lift and glow on hover
- **Scroll progress** - Visual feedback of page position

## 🚢 Deployment

The site is deployed to GitHub Pages using the `gh-pages` package:

```bash
npm run deploy
```

This command:
1. Builds the production bundle (`npm run build`)
2. Pushes the `build/` folder to the `gh-pages` branch
3. GitHub Pages automatically serves from that branch

## 🔧 Configuration

### HashRouter
Uses HashRouter instead of BrowserRouter for GitHub Pages compatibility. URLs use hash fragments (`/#/blog`) which work with static hosting.

### Vite Config
Key settings in `vite.config.js`:
- Base path: `/` (configurable for subdirectory deployment)
- Build output: `build/`
- JSX support for `.js` files
- Buffer polyfill for gray-matter

## 📝 Adding Blog Posts

1. Create a new `.md` file in `src/posts/`
2. Add frontmatter with title, date, description, and slug
3. Write content in markdown
4. Import in `src/utils/blogPosts.js`
5. Add to `postFiles` object

Posts automatically appear in the blog list, sorted by date.

## 🎯 Performance

- **Fast builds** - Vite provides ~10x faster builds than CRA
- **Optimized bundle** - Code splitting and tree shaking
- **Lazy loading** - Route-based code splitting with React.Suspense
- **Small package size** - Only ~290 dependencies (vs 1,600+ with CRA)

## 📄 License

This is a personal portfolio website. Feel free to fork and adapt for your own use.

## 🙏 Acknowledgments

Built with modern web technologies and best practices for performance, accessibility, and user experience.
