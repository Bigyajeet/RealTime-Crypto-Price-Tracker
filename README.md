


# Real-Time Crypto Price Tracker

To get started, take a look at src/app/page.tsx.

## 🎯 Objective

This project is a responsive React application built with Redux Toolkit that simulates a real-time cryptocurrency price tracker, similar to CoinMarketCap. It fetches and updates cryptocurrency data, simulating WebSocket updates using `setInterval` and manages all application state using Redux.

## 🛠️ Tech Stack

* **React:** A JavaScript library for building user interfaces.
* **Redux Toolkit:** A set of utilities that simplifies Redux development, including `createSlice` for defining reducers and actions, and `configureStore` for setting up the Redux store.
* **Sample Crypto Data:** Mocked JSON data to simulate API responses.
* **Styling:** CSS Modules for component-level styling to ensure modularity and avoid naming conflicts. (You can also mention if you used any CSS-in-JS library or a CSS framework like Tailwind CSS or Bootstrap if applicable).
* **7D Chart:** Static SVG or image to represent the 7-day price trend.

## ⚙️ Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```
    *(Replace `<repository_url>` with the actual URL of your GitHub/GitLab repository and `<repository_name>` with the name of the cloned directory.)*

2.  **Install dependencies:**
    ```bash
    npm install  # or yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm start  # or yarn start
    ```
    This will run the application in development mode. Open your browser to view it at `http://localhost:3000` (or the port specified in your terminal).

## 🏛️ Architecture

The application follows a standard React/Redux architecture:

* **`components`:** Contains reusable UI components responsible for rendering data and handling user interactions.
    * `CryptoTable.js`: Renders the main table displaying cryptocurrency data.
    * `CryptoTableRow.js`: Renders each individual row in the crypto table.
    * `PriceChange.js`: A utility component to display percentage changes with appropriate color-coding.
    * `SevenDayChart.js`: Renders the static 7-day price chart (SVG or image).
    * *(Other UI-specific components)*
* **`features`:** Contains Redux-related logic, organized by feature.
    * `crypto`:
        * `cryptoSlice.js`: Defines the Redux slice for managing cryptocurrency data, including the initial state, reducers to handle updates, and actions.
        * `cryptoSelectors.js`: Defines selector functions to efficiently access and derive data from the `crypto` state, optimizing component re-renders.
* **`app`:** Contains core application setup.
    * `store.js`: Configures the Redux store using `configureStore` from Redux Toolkit and imports the reducers from the different slices.
* **`utils`:** Contains utility functions, such as the mocked WebSocket simulation.
    * `mockWebSocket.js`: Implements a mocked class or `setInterval` logic to simulate real-time data updates.
    * `sampleData.js`: Contains the initial sample cryptocurrency data.
* **`App.js`:** The root component that sets up the application and connects to the Redux store.
* **`index.js`:** The entry point of the application, rendering the `App` component wrapped with the Redux `Provider`.

The data flow is as follows:

1.  The `App` component (or another relevant component) dispatches an action (e.g., `fetchInitialData`) on component mount.
2.  Our mocked WebSocket simulation (or `setInterval`) periodically generates random updates to the crypto data.
3.  These simulated updates trigger Redux actions (e.g., `updateCryptoData`).
4.  The reducers in `cryptoSlice.js` handle these actions and update the Redux store with the new data.
5.  React components, connected to the Redux store using `useSelector` and optimized with selectors from `cryptoSelectors.js`, re-render automatically whenever the relevant data in the store changes.

## 📹 Demo Video/GIF

[![Watch the Demo](link_to_your_demo_image.png)](link_to_your_demo_video_or_gif)

*(Replace `link_to_your_demo_image.png` with a placeholder image and `link_to_your_demo_video_or_gif` with the actual link to your 2-5 minute demo video or embedded GIF showcasing the UI layout, live updates, state flow, and your thought process.)*

## 🌟 Bonus Features (Implemented)

*(List any of the bonus features you implemented here, for example:)*

* **TypeScript:** The entire application is written in TypeScript, providing static typing for enhanced code maintainability and developer experience.
* **Unit Tests:** Unit tests have been implemented for reducers and selectors in the `cryptoSlice.js` file using Jest and React Testing Library.

