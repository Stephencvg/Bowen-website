import React, { useRef } from "react";
import "./Videoplayer.css";
import video from "../../assets/images/BowenAdvertise.mp4";

export const Videoplayer = ({ play, setPlay }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlay(false)
    }
  }

  return (
    <div className={`videoPlayer ${play ? "" : "hide"}`} ref={player} onClick={closePlayer}>
      <video src={video} controls autoPlay></video>
    </div>
  );
};
