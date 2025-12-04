import React, { useState, useRef, useEffect } from "react";
import songs from "./data/songs";

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  return (
    <div className="music-player">
      <h2>Now Playing</h2>
      <img src={currentSong.imgSrc} alt={currentSong.title} width="200" />
      <h3>{currentSong.title}</h3>
      <h4>{currentSong.artist}</h4>

      <audio ref={audioRef} src={currentSong.audioSrc}></audio>

      {/* BUTTONS WITH SPACING */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",    // space between buttons
          marginTop: "20px",
        }}
      >
        <button onClick={prevSong}>Previous</button>

        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button onClick={nextSong}>Next</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
