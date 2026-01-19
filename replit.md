# Workout Timer

## Overview

A modern workout timer application built with React and TypeScript that helps users track and manage exercise routines. The app features customizable interval timers with multiple sets, configurable workout/rest durations, round tracking, and YouTube music integration for background audio during workouts. Designed to be mobile-friendly with responsive layouts, touch-friendly controls, screen wake lock, and audio keep-alive for mobile browsers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter with hash-based routing for GitHub Pages compatibility
- **State Management**: React Query for server state, React hooks for local state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite with static build config for GitHub Pages deployment

### Key Design Patterns
- **Component Structure**: Modular UI components in `client/src/components/ui/` following shadcn/ui patterns
- **Custom Hooks**: Business logic encapsulated in hooks like `use-workout-timer.ts` and `use-toast.ts`
- **Audio Management**: Singleton `AudioManager` class in `client/src/lib/audio.ts` handles Web Audio API and YouTube player integration
- **Wake Lock**: `WakeLockManager` in `client/src/lib/wakeLock.ts` prevents screen from sleeping during workouts

### Static Deployment
- Configured for GitHub Pages deployment
- Static files output to root directory (`index.html`, `assets/`)
- Uses relative base paths and hash-based routing for subpath compatibility
- `.nojekyll` file disables Jekyll processing

## Project Structure

```
/
├── index.html          # Built static HTML (for GitHub Pages)
├── assets/             # Built CSS and JS bundles
├── generated-icon.png  # App icon
├── .nojekyll           # Disables Jekyll on GitHub Pages
├── client/             # React source code
│   └── src/
│       ├── components/ # UI components
│       ├── hooks/      # Custom React hooks
│       ├── lib/        # Utilities (audio, wakeLock)
│       └── pages/      # Page components
├── vite.config.ts      # Dev server config
└── vite.static.config.ts # Static build config
```

## External Dependencies

### Third-Party APIs
- **YouTube IFrame API**: Embedded video player for workout background music via `react-youtube` package

### UI Libraries
- **Radix UI**: Headless component primitives for accessibility
- **shadcn/ui**: Pre-built component system using Radix + Tailwind
- **Lucide React**: Icon library

### Audio & Mobile
- **Web Audio API**: Browser-native audio for notification sounds
- **YouTube Player API**: External music playback integration
- **Screen Wake Lock API**: Prevents screen from sleeping on mobile
