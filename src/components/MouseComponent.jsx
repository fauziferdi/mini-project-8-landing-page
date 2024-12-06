import React from "react";
import Mouse from "../assets/image/mouse.svg";

const MouseComponent = () => {
  return (
    <div className="flex items-center justify-center py-5">
      <img src={Mouse} alt="mouse" />
    </div>
  );
};

export default MouseComponent;
