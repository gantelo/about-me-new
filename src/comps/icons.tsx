import React, { memo } from "react";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Code } from "../assets/code.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { ReactComponent as Game } from "../assets/game.svg";
import Icon from "./icon";
import "../App.css";

const Icons = () => {
  return (
    <div className="iconsContainer">
      <Icon
        Element={LinkedIn}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/gabriel-antelo-526710143/",
            "_blank"
          )
        }
        text="LinkedIn"
      />
      <Icon
        Element={Code}
        onClick={() => window.open("https://github.com/gantelo", "_blank")}
        text="GitHub"
      />
      <Icon
        Element={Game}
        onClick={() =>
          window.open("https://gantelo.github.io/about-me/", "_blank")
        }
        text="Showcase"
      />
      <Icon
        Element={Profile}
        onClick={() =>
          window.open(
            "https://docdro.id/zbeQCU3",
            "_blank"
          )
        }
        text="CV"
      />
    </div>
  );
};

export default memo(Icons);
