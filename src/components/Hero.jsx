import React from "react";

const Hero = () => {
  return (
    <section className="md:h-[78vh] h-[37vh] md:w-full w-full  ">
      <div className="banner md:h-[82%] h-[82%] w-full bg-blue-400"></div>
      <div className="banner md:h-[18%] md:flex items-center flex justify-around py-2.5  w-full bg-primary">
        <div className="text-gray-400 text-2xl font-medium">
          <a href="tel:+971 4 354 8115">Call Us: +971 4 354 8115</a>
        </div>
        <button className="px-6 py-1.5 bg-black text-white rounded-lg hover:bg-black/80 cursor-pointer">
          <a href="tel:+971 4 354 8115">Call Now</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
