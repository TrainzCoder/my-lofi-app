import React, { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css";

import music from "../../../assets/for_when_it_is_warmer.mp3";
// import music from "../../../assets/cozy-acoustic.mp3";

import { PlayIcon } from "@heroicons/react/solid";
import { PauseIcon } from "@heroicons/react/solid";
import { VolumeUpIcon } from "@heroicons/react/solid";
import { VolumeOffIcon } from "@heroicons/react/solid";

const AudioPlayer = () => {
  const audio = useRef(new Audio(music));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeValue, setVolumeValue] = useState(1);
  const fileName = music.split("/").slice(-1);

  if (typeof audio.current.loop == "boolean") {
    audio.current.loop = true;
  } else {
    audio.current.onended = () => {
      audio.current.currentTime = 0;
      audio.current.play();
    };
  }

  const PlayPause = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const ele = document.querySelector(".bar .fill");
    if (ele) {
      ele.style.width = `${volumeValue * 100}%`;
    }
  });

  const volumeSet = (e) => {
    audio.current.volume = e.target.value;

    setVolumeValue(e.target.value);
  };

  return (
    <section className="absolute z-[2] bottom-0 w-full px-16 py-8 bg-[rgba(15,15,15,0.59)] backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-gray-50 overflow-ellipsis">
          Now playing - {fileName[0].split(".").slice(0, 1)}
        </h4>

        <button
          id="playbtn"
          className="absolute transform -translate-x-1/2 bg-transparent left-1/2 text-gray-50"
          onClick={PlayPause}
        >
          {isPlaying ? (
            <PauseIcon className="w-10 h-10" />
          ) : (
            <PlayIcon className="w-10 h-10" />
          )}
        </button>

        <div className="flex items-center gap-3 text-gray-50">
          <VolumeOffIcon className="w-5 h-5" />

          <div className="slider-container">
            <span className="bar">
              <span className="fill"></span>
            </span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              className="slider"
              onChange={volumeSet}
            />
          </div>
          <VolumeUpIcon className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default AudioPlayer;
