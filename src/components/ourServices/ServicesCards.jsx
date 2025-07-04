import React from "react";
import TopHeading from "../TopHeading";
import { serviceData } from "../../assets/assets";

const ServicesCards = () => {
  return (
    <div className="md:w-[90vw] w-full mx-auto py-12 px-20">
      <TopHeading
        text={"Services We Offer At"}
        text2={"Modern Gate Facilities Management Services"}
      />
      <p className="font-semibold text-center text-gray-500 py-2">
        One Window Platform for Comprehensive Commercial & Residential Cleaning
        Services in Dubai.
      </p>
      <p className="text-center text-gray-600 py-3 mb-8 px-4 md:px-20">
        Modern Gate Facilities Management Services offers a range of Commercial
        & Residential Cleaning Services in Dubai including cleaning,
        maintenance, renovations and fixing services. All our service procedures
        are aligned with DEWA and Emirates Health Services (EHS) and Takhrees.
        We embark on the highest inspection and cleaning standards in the
        industry. Our quality work is guaranteed to pass insurance, health, and
        fire inspections.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {serviceData.map((data) => (
          <div
            key={data.id}
            className="bg-white rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg w-full transition duration-1000 group overflow-hidden"
          >
            <div className="">
              <img
                src={data.image}
                alt={data.title}
                className="h-full w-full object-cover transition-all duration-600 mb-4 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              {" "}
              <h3 className="text-lg font-bold mb-2 text-primary">
                {data.title}
              </h3>
              <p className="text-gray-600 text-sm py-3">{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
