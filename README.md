<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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


>>>>>>> a7e4b4121a5bd24692cebc4710a1d34690ea87df
