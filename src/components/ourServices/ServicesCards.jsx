import React from "react";
import TopHeading from "../TopHeading";
import { serviceData } from "../../assets/assets";

const ServicesCards = () => {
  return (
    <div className="md:w-[90vw] w-full mx-auto py-12 md:px-20 px-8">
      <TopHeading
        text={"خدمات"}
        text2={" شرکت مدرن"}
      />
      <p className="font-semibold text-center text-gray-500 py-2">
        پلتفرم یکپارچه خدمات تاسیساتی و مسکونی در شهر شما
      </p>
      <p className="text-center text-gray-600 py-3 mb-8 px-4 md:px-20">
        شرگت تاسیساتی مدرن با ارائه طیف گسترده از خدمات نظافتی، تعمیراتی و بازسازی برای اماکن تجاری و مسکونی در شهر شما طبق بالاترین سطح استاندارد انجام میدهد.با رعایت بالاترین استانداردها تضمین میکنیم تا نیاز های شما را بر طرف کنیم  
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
