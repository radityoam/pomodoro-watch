# Pomodoro Watch

A minimal, watch-style Pomodoro timer for Windows. It floats on your desktop as a small always-on-top widget, with a sweeping progress gauge, focus/break cycles, and a quiet beep when each phase starts and ends. Dark theme only.

## Download

1. Go to the [**Releases**](../../releases) page.
2. Download the latest **`Pomodoro Watch Setup x.x.x.exe`**.
3. Run it to install, then launch from the desktop or Start Menu shortcut.

> **Windows warning on first run:** This app isn't code-signed (signing certificates cost money), so Windows SmartScreen will show an *"unknown publisher"* warning the first time. Click **More info → Run anyway**. This is expected for small independent apps.

## Features

- Floating, frameless, always-on-top watch widget — drag it anywhere
- Set focus length (10–120 min), short break, long break, and cycles before a long break
- Progress gauge that sweeps as time elapses
- Soft beep at the start and end of each phase
- macOS-style minimize / close buttons
- Settings are remembered between launches

## Settings

Your durations are saved automatically to `settings.json` in your Windows user-data folder (`%APPDATA%\pomodoro-watch`), so they persist across restarts and updates.

## Build from source

Requires [Node.js](https://nodejs.org) **v26.3.0 or newer**.

```bash
npm install                # install Electron + builder (one time)
npm start                  # run the app live (for testing)
npm run dist               # build the installer into ./dist
```

The finished installer appears in the `dist` folder.

## Tech

Built with [Electron](https://www.electronjs.org/). The entire UI is a single HTML file; `main.js` creates the floating window.
