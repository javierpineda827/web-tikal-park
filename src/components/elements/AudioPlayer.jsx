import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import "../../assets/css/AudioPlayer.module.css";

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Control de volumen (1 = 100%)

  // Función para alternar reproducción y pausa
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Actualiza el progreso del reproductor de audio
  const handleProgress = () => {
    const audio = audioRef.current;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  // Manejador para el evento de fin de audio
  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  // Actualizar duración del audio
  useEffect(() => {
    const audio = audioRef.current;
    const handleLoadedData = () => {
      setDuration(audio.duration);
    };
    audio.addEventListener("loadeddata", handleLoadedData);
    return () => audio.removeEventListener("loadeddata", handleLoadedData);
  }, []);

  // Manejar cambio de volumen
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // Formatear el tiempo en minutos y segundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <>
      <div className="audio-player">
        <audio
          ref={audioRef}
          src={audioSrc}
          onTimeUpdate={handleProgress}
          onEnded={handleEnded}
        ></audio>

        <button onClick={togglePlayPause} className="play-pause-btn">
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pause"
            >
              <rect x="14" y="4" width="4" height="16" rx="1" />
              <rect x="6" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play text-primary-500"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          )}
        </button>

        <div className="progress-container">
          <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => {
              const newTime = (e.target.value / 100) * duration;
              audioRef.current.currentTime = newTime;
              setProgress(e.target.value);
            }}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div className="volume-container">
        <label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-volume-2"
          >
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
            <path d="M16 9a5 5 0 0 1 0 6" />
            <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
          </svg>
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>

      <style>{`
        .audio-player {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          gap: 1rem;
        }

        .play-pause-btn {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          margin-inline: 1rem;
        }

        input[type="range"] {
          width: 100%;
          cursor: pointer;
        }

        .volume-container {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 0.5rem;
            width: 60%;
            margin-left:1rem;
        }

        .volume-container label {
            font-size: 0.9rem;
        }

      `}</style>
    </>
  );
};

export default AudioPlayer;

AudioPlayer.propTypes = {
  audioSrc: PropTypes.string.isRequired,
};
