import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Player = () => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control"></div>
    </div>
  );
};

export default Player;
