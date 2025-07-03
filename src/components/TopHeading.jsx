import React from "react";
import { assets } from "../assets/assets";

const TopHeading = ({ text, text2 }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <img
        src={assets.tool}
        alt="tool icon"
        className="w-16 h-16 object-contain"
      />
      <h2 className="text-4xl">
        {text} <span className="text-primary font-semibold">{text2}</span>
      </h2>
    </div>
  );
};

export default TopHeading;
