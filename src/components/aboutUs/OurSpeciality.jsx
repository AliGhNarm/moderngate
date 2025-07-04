import React from "react";
import TopHeading from "../TopHeading";
import { IoHome } from "react-icons/io5";
import { RiBuilding2Fill } from "react-icons/ri";

const OurSpeciality = () => {
  const specialityCards = [
    {
      icon: <IoHome className="text-4xl text-white" />,
      title: "Commercial",
      des: "Office | School | Mall",
      textAfterHover:
        "Be it special cleaning, renovation & refurbishment, electrical installation & repair, or more – Al Waleed Facilities Management has got you covered. We deploy eco-friendly methods, modern equipment, and certified crew to roll out quality services.",
    },
    {
      icon: <RiBuilding2Fill className="text-4xl text-white" />,
      title: "Residential",
      des: "Apartments | Community | Villas",
      textAfterHover:
        "Be it special cleaning, renovation & refurbishment, electrical installation & repair, or more – Al Waleed Facilities Management has got you covered. We deploy eco-friendly methods, modern equipment, and certified crew to roll out quality services.",
    },
  ];

  return (
    <div className="min-h-[80vh] bg-black/80 py-12 px-4">
      <div className="text-center">
        <TopHeading text={"Our "} text2={"Speciality"} />
        <p className="text-gray-300 text-lg my-2">Fix all problems</p>
      </div>

      {/* Cards */}
      <div className="mt-10 flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center">
        {specialityCards.map((card, index) => (
          <div
            key={index}
            className="relative group bg-black/60 text-white w-[90%] md:w-[600px] min-h-[320px] p-6 rounded-xl shadow-lg overflow-hidden flex items-center justify-center"
          >
            {/* Default Content - Hide on hover */}
            <div className="flex flex-col items-center text-center z-10 transition-opacity duration-300 group-hover:opacity-0">
              {card.icon}
              <h3 className="text-3xl md:text-5xl font-semibold mt-4">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">{card.des}</p>
            </div>

            {/* Hover Overlay with Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#1958A3] to-[#1958A3]/80 text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out flex items-center justify-center text-center">
              <p className="text-sm md:text-base">{card.textAfterHover}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSpeciality;
