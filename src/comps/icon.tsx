import React, { useState } from "react";
import Pop from "./pop";

interface IconProps {
  Element: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  onClick: () => void;
  text: string;
}

const Icon = ({ Element, onClick, text }: IconProps) => {
  const [pop, setPop] = useState(false);

  return (
    <div className="iconContainer">
      <Element
        onClick={onClick}
        onMouseEnter={() => setPop(true)}
        onMouseLeave={() => setPop(false)}
      />
      {pop && <Pop text={text} />}
    </div>
  );
};

export default Icon;
