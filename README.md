# Atives Mini Platform

A React-based mini platform for the creative community, built as part of the SDE Intern assessment for Atives.

## 🎨 Project Overview

This is a functional mini-platform that recreates key features of Atives - a platform designed for creative professionals to showcase their work, connect with others, and discover opportunities.

## ✨ Features Implemented

### Required Functional Screens ✅

1. **Home Feed** (`/`)
   - Displays creative posts in an engaging card layout
   - Filter posts by categories (UI Design, Photography, Illustration, etc.)
   - Loading states and micro-interactions
   - Statistics showcase (50K+ creatives, ₹50L+ profit generated)

2. **Jobs Board** (`/jobs`)
   - Browse creative job opportunities
   - Advanced filtering by job type, location, remote/on-site
   - Search functionality
   - Sort by date, salary, or company
   - Interactive job cards with apply functionality

3. **Explore Feed** (`/explore`)
   - Discover talented creatives and valuable resources
   - Search for creatives by name, skills, or profession
   - Browse educational resources and tools
   - Tab-based interface for members and resources

4. **Profile Page** (`/profile`)
   - Complete profile with cover image and avatar
   - Portfolio showcase with project details
   - Stats display (followers, following, likes, projects)
   - Tabbed content (Posts, Projects, Saved)
   - Social media links integration

5. **Onboarding Flow** (`/onboarding`)
   - 2-step onboarding process for new creators
   - Skill and interest selection
   - Smooth transitions between steps
   - Form validation and progress indicators

### Technical Features ✅

- **React Router** for client-side routing
- **TypeScript** for type safety and better development experience
- **Styled Components** for component-based styling
- **Framer Motion** for smooth animations and micro-interactions
- **Responsive Design** - fully mobile-responsive layout
- **Mock Data** - comprehensive dummy data for all features
- **Clean Architecture** - well-organized component and folder structure

### Bonus Features ✅

- **Animations & Micro-interactions** using Framer Motion
- **TypeScript** implementation throughout the project
- **Mobile-responsive** design with breakpoint handling
- **Loading states** and smooth transitions
- **Interactive elements** with hover effects and animations

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Styled Components with custom theme system
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Create React App
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/atives-mini-platform.git
cd atives-mini-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components (Header, Layout)
│   └── PostCard/       # Post card component
├── pages/              # Page components
│   ├── HomeFeed.tsx    # Home feed page
│   ├── JobsBoard.tsx   # Jobs board page
│   ├── ExploreFeed.tsx # Explore page
│   ├── Profile.tsx     # Profile page
│   └── Onboarding.tsx  # Onboarding flow
├── data/               # Mock data
│   ├── posts.ts        # Posts data
│   ├── jobs.ts         # Jobs data
│   └── members.ts      # Members and resources data
├── styles/             # Styling and theme
│   ├── theme.ts        # Theme configuration
│   └── styled.d.ts     # TypeScript declarations
└── App.tsx             # Main app component
```

## 🔧 Development Approach

### AI Tools Used
- **GitHub Copilot**: Code completion and refactoring assistance
- **ChatGPT**: Architecture planning and problem-solving guidance
- **Design Inspiration**: Behance and Dribbble for UI/UX references

### Development Process
1. **Planning**: Analyzed requirements and created component architecture
2. **Design System**: Built reusable components and theme system
3. **Implementation**: Developed pages iteratively with TypeScript
4. **Animation**: Added smooth transitions and micro-interactions
5. **Testing**: Manual testing across different screen sizes
6. **Documentation**: Comprehensive README and code comments

## 🎨 Design Decisions

- **Color Scheme**: Purple gradient (#6C5CE7 to #A29BFE) for brand consistency
- **Typography**: System fonts for better performance and readability
- **Layout**: Card-based design for content organization
- **Navigation**: Sticky header with clear visual hierarchy
- **Animations**: Subtle but meaningful transitions (0.2-0.3s duration)

## 📝 Assessment Notes

This project demonstrates:
- **Frontend Architecture**: Clean, scalable React application structure
- **Design Thinking**: User-centered design with attention to UX details
- **Technical Skills**: TypeScript, modern React patterns, CSS-in-JS
- **Creativity**: Custom animations and thoughtful micro-interactions
- **Attention to Detail**: Responsive design, loading states, error handling

Built with ❤️ for the Atives SDE Intern Assessment

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.vercel.app) *(Deploy link to be added)*

## 🎯 Features

### ✅ Core Functionality
- **Home Feed** - Discover creative posts from the community with interactive engagement
- **Jobs Board** - Browse creative opportunities with advanced filtering and search
- **Explore Feed** - Discover talented creatives and valuable resources
- **Profile Page** - Comprehensive user profiles with portfolio showcase
- **Onboarding Flow** - Smooth 2-step user registration experience

### 🎨 Design & UX
- **Responsive Design** - Fully responsive across all device sizes
- **Modern UI** - Clean, intuitive interface inspired by leading creative platforms
- **Micro-interactions** - Smooth animations and hover effects using Framer Motion
- **Design System** - Consistent colors, typography, and component library
- **Accessibility** - Keyboard navigation and screen reader friendly

### 🔧 Technical Features
- **React 18** with TypeScript for type safety
- **React Router** for seamless navigation
- **Styled Components** with theme system
- **Framer Motion** for animations
- **Mock Data** for realistic content simulation
- **Component Architecture** - Reusable and maintainable code structure

## 🛠 Tech Stack

### Frontend
- **React 18.2.0** - Core framework
- **TypeScript** - Type safety and better developer experience
- **React Router DOM** - Client-side routing
- **Styled Components** - CSS-in-JS styling solution
- **Framer Motion** - Animation library

### Design System
- **Custom Theme** - Colors, typography, spacing, shadows
- **Responsive Breakpoints** - Mobile-first approach
- **Component Library** - Reusable UI components

### Development Tools
- **Create React App** - Development setup
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/atives-mini-platform.git
   cd atives-mini-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Header, Layout components
│   └── PostCard/        # Post card component
├── pages/               # Main page components
│   ├── HomeFeed.tsx     # Home feed page
│   ├── JobsBoard.tsx    # Jobs listing page
│   ├── ExploreFeed.tsx  # Discover page
│   ├── Profile.tsx      # User profile page
│   └── Onboarding.tsx   # Onboarding flow
├── data/                # Mock data files
│   ├── posts.ts         # Creative posts data
│   ├── jobs.ts          # Job listings data
│   └── members.ts       # User profiles data
├── styles/              # Styling and theme
│   ├── theme.ts         # Theme configuration
│   └── styled.d.ts      # TypeScript declarations
└── App.tsx              # Main app component
```

## 🤖 AI Tools & Automation Used

### Development Assistance
- **GitHub Copilot** - Code completion and suggestions
- **ChatGPT** - Logic implementation, debugging, and problem-solving
- **TypeScript** - Automated type checking and IntelliSense

### Design & Content
- **Unsplash API** - High-quality placeholder images
- **Mock Data Generation** - Realistic user profiles and content
- **Color Palette** - AI-assisted color scheme selection

### Code Quality
- **ESLint** - Automated code linting
- **Prettier** - Code formatting
- **TypeScript Compiler** - Static analysis and error detection

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1199px
- **Wide**: 1200px+

## 🚀 Deployment

### Build for Production

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
#   a t i v e s  
 