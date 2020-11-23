import React, { memo } from "react";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Code } from "../assets/code.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { ReactComponent as Game } from "../assets/game.svg";
import "../App.css";

const Icons = () => {
  return (
    <div className="iconsContainer">
      <LinkedIn onClick={() => console.log("yeet")} />
      <Code onClick={() => console.log("yeet")} />
      <Game onClick={() => console.log("yeet")} />
      <Profile onClick={() => console.log("yeet")} />
    </div>
  );
};

export default memo(Icons);
