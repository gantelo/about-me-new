import React, { memo } from "react";
import { ReactComponent as Line } from "../assets/line.svg";
import "../App.css";

interface TextProps {
  text: string[];
}

const Text = ({ text }: TextProps) => {
  return (
    <div>
      {text.map((item) => {
        let highlighted;
        if (item.includes("Gabriel Antelo")) {
          const slice = item.indexOf("Gabriel");
          highlighted = item.slice(slice);
          item = item.slice(0, slice);
        }
        return (
          <div className="text">
            {item}
            {Boolean(highlighted) && (
              <span className="highlight">{highlighted}</span>
            )}
          </div>
        );
      })}
      <div className="lineContainer">
        <Line />
      </div>
    </div>
  );
};

export default memo(Text);
