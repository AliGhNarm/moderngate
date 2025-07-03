// import React from "react";

// const Hero = () => {
//   return (
//     <section className="md:h-[78vh] h-[37vh] md:w-full w-full  ">
//       <div className="banner md:h-[82%] h-[82%] w-full bg-blue-400"></div>
//       <div className="banner md:h-[18%] h-[7vh] md:flex items-center flex justify-around py-2.5  w-full bg-primary">
//         <div className="text-gray-400 text-2xl font-medium">
//           <a href="tel:+971 4 354 8115">Call Us: +971 4 354 8115</a>
//         </div>
//         <button className="px-6 py-1.5 bg-black text-white rounded-lg hover:bg-black/80 cursor-pointer">
//           <a href="tel:+971 4 354 8115">Call Now</a>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[78vh]">
      {/* Main Banner */}
      <div className="absolute top-0 left-0 w-full h-[85%] bg-blue-400">
        {/* You should replace this with your actual banner image */}
        {/* <img src="/banner.jpg" alt="Banner" className="w-full h-full object-cover" /> */}
      </div>

      {/* Contact Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[20%] bg-primary flex  items-center justify-between px-4 md:px-8 py-2">
        <div className="text-white md:text-gray-200 md:text-2xl font-medium mb-2 md:mb-0 text-center md:text-left">
          <a
            href="tel:+97143548115"
            className="hover:text-white transition-colors"
          >
            Call Us: +971 4 354 8115
          </a>
        </div>

        <button className="px-3 py-1.5 md:px-6 md:py-1.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors  md:w-auto text-center">
          <a href="tel:+97143548115" className="block w-full">
            Call Now
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
