import React from "react";

const Header = () => {
  return (
    <div className="relative w-full h-[25vh] md:h-[27vh] rounded-br-[20%] rounded-bl-[20%] md:mb-3 overflow-hidden">
      {/* Background image via Tailwind */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1673870861508-49919661d442?w=600&auto=format&fit=crop&q=60')",
        }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Heading Content */}
      <div className="relative z-20 flex justify-center items-center h-full">
        <h1 className="text-white text-5xl font-semibold">
          About <span className="text-primary hover:text-black">Us</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
