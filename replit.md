# Workout Timer

## Overview

A modern workout timer application built with React and TypeScript that helps users track and manage exercise routines. The app features customizable interval timers with multiple sets, configurable workout/rest durations, round tracking, and YouTube music integration for background audio during workouts. Designed to be mobile-friendly with responsive layouts and touch-friendly controls.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: React Query for server state, React hooks for local state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite with separate configs for development and static GitHub Pages deployment

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Vite middleware integration for HMR during development

### Key Design Patterns
- **Component Structure**: Modular UI components in `client/src/components/ui/` following shadcn/ui patterns
- **Custom Hooks**: Business logic encapsulated in hooks like `use-workout-timer.ts` and `use-toast.ts`
- **Audio Management**: Singleton `AudioManager` class in `client/src/lib/audio.ts` handles Web Audio API and YouTube player integration

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `db/schema.ts` - currently contains a basic users table
- **Connection**: Neon serverless PostgreSQL driver with WebSocket support

### Static Deployment
- Supports GitHub Pages deployment via `vite.static.config.ts`
- Static files output to `/docs` folder for GitHub Pages hosting
- Uses relative base paths for static asset loading

## External Dependencies

### Database
- **PostgreSQL**: Primary database via Neon serverless
- **Drizzle ORM**: Type-safe database operations with Zod schema validation

### Third-Party APIs
- **YouTube IFrame API**: Embedded video player for workout background music via `react-youtube` package

### UI Libraries
- **Radix UI**: Headless component primitives for accessibility
- **shadcn/ui**: Pre-built component system using Radix + Tailwind
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component functionality

### Audio
- **Web Audio API**: Browser-native audio for notification sounds
- **YouTube Player API**: External music playback integration