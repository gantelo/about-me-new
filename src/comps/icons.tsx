import React, { memo } from "react";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Code } from "../assets/code.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { ReactComponent as Game } from "../assets/game.svg";
import "../App.css";

const Icons = () => {
  return (
    <div className="iconsContainer">
      <LinkedIn
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/gabriel-antelo-526710143/",
            "_blank"
          )
        }
      />
      <Code
        onClick={() => window.open("https://github.com/gantelo", "_blank")}
      />
      <Game onClick={() => console.log("yeet")} />
      <Profile
        onClick={() =>
          window.open("https://gantelo.github.io/resume/", "_blank")
        }
      />
    </div>
  );
};

export default memo(Icons);
