import React, { memo } from "react";

interface PopProps {
  text: string;
}

const Pop = ({ text }: PopProps) => <div className="pop">{text}</div>;

export default memo(Pop);
