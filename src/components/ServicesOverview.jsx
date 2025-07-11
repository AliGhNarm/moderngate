import React from "react";
import { assets, serviceCards } from "../assets/assets";
import TopHeading from "./TopHeading";

const ServicesOverview = () => {
  return (
    <div className="flex items-center justify-center py-10 px-4 md:px-0 bg-white">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-4">
          <TopHeading text={"خدمات"} text2={"ما"} />
          <p className="text-gray-500 text-lg mt-1">آنچه برای شما انجام می‌دهیم</p>
        </div>

        {/* Description */}
        <p className="text-center text-gray-700 max-w-3xl mb-8 px-4 md:px-0 text-l">
         
        شرکت مدیریت تأسیسات مدرن ، مجموعه‌ای از خدمات نگهداری و تعمیرات اداری و خانگی را در شهر شما ارائه می‌دهد که شامل  نگهداری، بازسازی و خدمات تعمیراتی می‌شود. با کار بی‌نقص تکنسین‌ها و متخصصان مجرب ما، شاهد کیفیت بی‌نظیر باشید
        

        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className="relative group border border-gray-200 rounded-md flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg cursor-pointer bg-white md:h-70 md:w-70 h-60 w-[95%] mx-auto overflow-hidden"
            >
              {/* Dots background on hover */}
              <div
                className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                style={{
                  backgroundImage: `url(${assets.dots})`,
                  backgroundBlendMode: "lighten",
                }}
              ></div>

              <img
                src={card.image}
                alt={card.service}
                className="z-10 w-20 h-20 object-contain mb-4"
              />
              <h3 className="z-10 text-lg font-semibold text-center text-gray-800">
                {card.service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
