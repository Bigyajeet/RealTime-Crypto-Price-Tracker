# **App Name**: Crypto Pulse

## Core Features:

- Data Presentation: Display crypto assets in a tabular format, showing key details like price, percentage changes, market cap, and volume.
- Real-Time Simulation: Simulate real-time price fluctuations and volume changes using setInterval, dispatching Redux actions to update the global state.
- Trend Visualization: Visually represent price trends over the last 7 days using a simplified chart (e.g., sparkline).

## Style Guidelines:

- Primary color: Dark blue (#1A202C) for a modern, professional look.
- Secondary color: Light gray (#EDF2F7) for backgrounds and subtle accents.
- Accent: Teal (#4FD1C5) for interactive elements and highlights.
- Clean and responsive table layout with clear data separation.
- Simple, geometric icons for crypto logos and interactive elements.
- Smooth transitions for price updates and data changes.

## Original User Request:
Assignment: Real-Time Crypto Price Tracker

🎯 Objective:
Build a responsive React + Redux Toolkit app that tracks real-time crypto prices (like CoinMarketCap), simulating WebSocket updates and managing all state via Redux.

🛠️ Tech Requirements:

📊 UI Table:
- Display 5 assets (e.g., BTC, ETH, USDT) in a table:
  # | Logo | Name | Symbol | Price | 1h % | 24h % | 7d % | Market Cap | 24h Volume | Circulating Supply | Max Supply | 7D Chart
- Use sample crypto data.
- Color-code % changes: green (positive), red (negative).
- 7D chart can be static (SVG/image).
- Make table responsive.

🔄 Real-Time Updates:
- Simulate WebSocket using setInterval/mocked class.
- Every 1–2 seconds, randomly change:
  - Price
  - % Changes
  - 24h Volume
- Dispatch Redux actions (no local state).

🧠 Redux State Management:
- Use Redux Toolkit (createSlice, configureStore).
- Store all asset data in Redux.
- Use selectors to optimize re-renders.

✅ Deliverables:

📁 GitHub/GitLab Repo:
- Push code to repo.
- Include README.md with:
  - Setup instructions
  - Tech stack + architecture
  - Embedded demo GIF or video link

📹 Demo Video/GIF:
- 2–5 min walkthrough showing:
  - UI layout
  - Live updates
  - State flow
  - Thought process

🌟 Bonus (Optional):
- Integrate real WebSocket (e.g., Binance)
- Filters/sorting (top gainers, etc.)
- localStorage support
- Unit tests (reducers/selectors)
- TypeScript
Submission deadline: 25 April, 2025
  