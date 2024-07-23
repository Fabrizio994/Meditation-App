import { useState, useEffect, useRef } from "react";

import Audio1 from "../audio/audio_1.mp3";
import Audio2 from "../audio/audio_2.mp3";
import Audio3 from "../audio/audio_3.mp3";

const TimerTool = () => {
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState("");
  const [volume, setVolume] = useState(0.5);
  const timerRef = useRef(null);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (isRunning && time > 0) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
      return () => clearInterval(timerRef.current);
    } else if (time === 0) {
      setIsRunning(false);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isRunning, time]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleSetTimer = () => {
    const minutes = parseInt(inputValue, 10);
    if (isNaN(minutes) || minutes <= 0) return;
    setTime(minutes * 60);
    setInputValue("");
    setIsRunning(false);
  };

  const handleStart = () => {
    if (time > 0) {
      setIsRunning(true);
      if (selectedAudio) {
        audioRef.current.src = selectedAudio;
        audioRef.current.play();
      }
    }
  };

  const handlePause = () => {
    setIsRunning(false);
    audioRef.current.pause();
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="text-center">
      <h2>
        {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
      </h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Minuti"
        required
      />
      <button onClick={handleSetTimer} disabled={isRunning}>
        Imposta
      </button>
      <button onClick={handleStart} disabled={isRunning}>
        Avvia
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pausa
      </button>
      <button onClick={handleReset}>Reset</button>
      {}
      <div style={{ marginTop: "10px" }}>
        <label>
          Volume:
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </label>
      </div>
      {}
      <div>
        <select
          value={selectedAudio}
          onChange={(e) => setSelectedAudio(e.target.value)}
        >
          <option value="">Seleziona un audio</option>
          <option value={Audio1}>Audio 1</option>
          <option value={Audio2}>Audio 2</option>
          <option value={Audio3}>Audio 3</option>
        </select>
      </div>
    </div>
  );
};

export default TimerTool;
