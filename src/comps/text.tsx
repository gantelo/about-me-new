import React, { memo } from "react";
import { ReactComponent as Line } from "../assets/line.svg";
import "../App.css";

interface TextProps {
  text: string[];
  color?: number[];
}

const Text = ({ text, color }: TextProps) => {
  return (
    <div>
      {text.map((item) => (
        <div className="text">{item}</div>
      ))}
      <div className="lineContainer">
        <Line />
      </div>
    </div>
  );
};

export default memo(Text);
