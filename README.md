# Workout Timer

A modern, feature-rich workout timer application designed to help you track and manage your exercise routines effectively. Built with React and TypeScript, this application provides a comprehensive timer system with customizable workout and rest periods, YouTube music integration, and audio notifications.

## Features

- **Multiple Set Management**: Create and manage multiple workout sets with different configurations
- **Customizable Timers**: 
  - Set workout duration
  - Configure rest periods
  - Adjust initial countdown
  - Define number of rounds per set
- **Audio Features**:
  - YouTube music integration for workout background music
  - Audio notifications for phase changes and countdowns
  - Independent volume controls for notifications and music
- **Workout Details**:
  - Add detailed notes for each workout set
  - Track progress with current set/round indicators
  - Visual progress bar with percentage completion
- **Mobile-Optimized**:
  - Responsive design that works on all devices
  - Touch-friendly controls
  - Screen wake lock to prevent phone from sleeping during workouts
  - Audio keep-alive for uninterrupted notifications

## GitHub Pages Deployment

This app is a static website that can be hosted on GitHub Pages for free.

### Quick Deploy

1. Push this repository to GitHub
2. Go to your repo's **Settings > Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click Save

Your site will be live at `https://[your-username].github.io/[repo-name]/`

### Rebuilding the Static Site

If you make changes to the app, rebuild the static files:

```bash
npx vite build --config vite.static.config.ts
cp static-build/index.html .
cp -r static-build/assets .
```

This rebuilds and copies the static files to the root.

## Local Development

### Prerequisites

- Node.js 18 or higher

### Installation

```bash
npm install
```

### Run Development Server

For local development, run:

```bash
npx vite --config vite.static.config.ts
```

Open your browser to the URL shown in the terminal.

## Usage Guide

1. **Setup Mode**:
   - Add workout sets using the + button
   - Configure duration, rest periods, and rounds
   - Add workout details/instructions
   - Click "Start" when ready

2. **Workout Mode**:
   - View the circular timer showing current phase
   - Use Play/Pause to control the workout
   - Add YouTube music using the music player
   - Adjust volumes as needed
   - Back button returns to setup mode

3. **Audio Controls**:
   - Separate volume controls for notifications and music
   - Mute button for all audio
   - YouTube music player with URL input

## Technologies Used

- React 18 with TypeScript
- Tailwind CSS for styling
- ShadcN UI components
- Wouter for hash-based routing
- Web Audio API for sound effects
- Screen Wake Lock API for mobile
- YouTube Player API for music integration

## License

This project is MIT licensed.
