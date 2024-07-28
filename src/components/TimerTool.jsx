import { useState, useEffect, useRef } from "react";

import Audio1 from "../assets/audio/audio_1.mp3";
import Audio2 from "../assets/audio/audio_2.mp3";
import Audio3 from "../assets/audio/audio_3.mp3";

const TimerTool = () => {
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState("");
  const [volume, setVolume] = useState(0.5);

  const timerRef = useRef(null);
  const audioRef = useRef(new Audio());
  const inputRef = useRef(null);

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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleInputChange = (e) => {
    const minutes = parseInt(e.target.value, 10);
    setInputValue(e.target.value);
    if (!isNaN(minutes) && minutes > 0) {
      setTime(minutes * 60);
      setIsRunning(false);
    }
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
    setInputValue("");
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">
        {Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
      </h2>
      <div className="row mb-3 justify-content-center">
        <div className="col-md-4 text-center">
          <input
            type="number"
            className="form-control"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Minuti"
            required
            ref={inputRef}
          />
        </div>
      </div>
      <div className="row mb-3 justify-content-center">
        <div className="col-md-4">
          <button
            className="btn btn-success me-1"
            onClick={handleStart}
            disabled={isRunning}
          >
            Avvia
          </button>
          <button
            className="btn btn-warning me-1"
            onClick={handlePause}
            disabled={!isRunning}
          >
            Pausa
          </button>
          <button className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label>
            Volume:
            <input
              type="range"
              className="form-range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </label>
        </div>
      </div>
      <div className="row mb-3 justify-content-center">
        <div className="col-md-4  ">
          <select
            className="form-select"
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
    </div>
  );
};

export default TimerTool;
