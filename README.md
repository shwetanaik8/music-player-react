**🎧 React Music Player**

A simple and responsive **Music Player App** built using **ReactJS**. Play, pause, and switch songs easily with an intuitive interface.


🏗️ Project Structure**

music-player/
│
├── public/
│   ├── index.html           # Main HTML template
│   ├── manifest.json        # Metadata and PWA setup
│   ├── robots.txt           # Search engine rules
│   ├── music/               # Audio files (.mp3)
│   └── images/              # Album/singer images
│
├── src/
│   ├── App.js               # Root React component
│   ├── App.css              # Styling for app and player
│   ├── MusicPlayer.js       # Core music player functionality
│   ├── data/
│   │   └── songs.js         # Array of songs (title, artist, file paths)
│   ├── index.js             # Renders app to DOM
│   ├── index.css            # Global styles
│   ├── reportWebVitals.js   # Performance metrics setup
│   ├── setupTests.js        # Jest testing setup
│   └── App.test.js          # Default test file
│
├── package.json
└── README.md


🧩 **Key Files Explained**

* **App.js** → Main component that renders the music player UI
* **MusicPlayer.js** → Handles play/pause, next/previous, and displays song details
* **data/songs.js** → Stores the song list and paths to audio and images
* **index.js** → Entry point connecting React app to HTML
* **App.css / index.css** → Styling for layout and fonts
* **App.test.js / setupTests.js** → Default testing setup
* **reportWebVitals.js** → Tracks app performance



**🗂️ Folders in `public/`**

* **images/** → Album cover images (`song1.jpg`, `song2.jpg`, etc.)
* **music/** → Audio files (`song1.mp3`, `song2.mp3`, etc.)


In `songs.js`:

js
audioSrc: "/music/song1.mp3",
imgSrc: "/images/song1.jpg"


**⚙️ How to Run the Project**

1. **Install Node.js** (v24.11.1)
   
node -v
npm -v

2. **Open the project in VS Code**
3. **Open Terminal in VS Code**: **View → Terminal** or press **Ctrl + `**
4. **Navigate to the project folder** (if needed):

cd path/to/music-player

5. **Install dependencies**:

npm install

6. **Start the development server**:

bash
npm start

7. **Open your browser** at [http://localhost:3000](http://localhost:3000)

* The page reloads automatically on code changes
* Lint errors, if any, appear in the terminal or console
* To stop the server, press **Ctrl + C**


**🧠 How It Works**

* Uses React Hooks (useState, useEffect, useRef) to manage song state and playback
* currentSongIndex keeps track of the current song
* Functions:

  * togglePlayPause() → Play or pause the song
  * nextSong() / prevSong() → Switch songs
* <audio> element uses `ref` to sync React state with the DOM


 **💡 Useful VS Code Extensions**

| Extension                              | Purpose                                   |
| -------------------------------------- | ----------------------------------------- |
| ES7+ React/Redux/React-Native snippets | Quickly create React components           |
| Prettier - Code Formatter              | Automatically formats code                |
| npm IntelliSense                       | Auto-suggests npm imports                 |
| Material Icon Theme                    | Adds colorful icons for easier navigation |
| JavaScript (ES6) code snippets         | Provides JS shortcuts for faster coding   |


**📦 Create React App Scripts**

**`npm start`**

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it. The page reloads on changes; lint errors appear in the console.

**`npm test`**

Launches the test runner in interactive watch mode.

**`npm run build`**

Builds the app for production in the `build` folder. Optimizes React for best performance; minifies files and includes hashes.

**`npm run eject`**

**One-way operation. Cannot undo.** Copies configuration files and dependencies into your project for full control. All other commands still work.


**🌈 Key Learnings**

* Creating and structuring a React app using Create React App
* Using React Hooks for dynamic state management
* Handling audio playback with <audio> element
* Organizing assets and code clearly for maintainability


**👩‍💻 Developed Using**

* ReactJS
* Node.js v24.11.1
* Visual Studio Code


