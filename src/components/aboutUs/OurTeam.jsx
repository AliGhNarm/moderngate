import React from "react";
import { assets } from "../../assets/assets";

const OurTeam = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-[80vh] bg-white/90 px-4 md:px-12 py-10 gap-10">
      {/* Left Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={assets.team}
          alt="Our Team"
          className="max-w-full border-4 border-black h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/3">
        <h3 className="text-3xl font-bold mb-4">
          Our <span className="text-primary">Team</span>
        </h3>
        <p className="text-gray-700 mb-4 py-3 text-justify">
          Our group includes highly qualified staff to ensure that we
          consistently deliver a high level of quality in our services. Our
          personnel and supply chain periodically undergo rigorous screening
          processes to ensure we continuously improve and elevate the benchmark
          of service standards in the industry.
        </p>
        <p className="text-gray-700 text-justify">
          We invest in our team and promote a healthy community so that all our
          team members can perform to their fullest potential and feel vital to
          the company’s growth by sharing common ideas, goals, and values.
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
