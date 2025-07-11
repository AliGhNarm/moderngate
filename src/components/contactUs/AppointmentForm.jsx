import React from "react";
import TopHeading from "../TopHeading";
import Form from "./Form";

const AppointmentForm = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="w-[97vw] max-w-6xl mx-auto px-4">
        {/* Heading */}
        <TopHeading text={"رزور انلاین"} text2={"خدمات"} />

        {/* Description */}
        <p className="text-center text-gray-700 mb-6 py-2.5">شرکت مدیریت تأسیسات مدرن  - خدمات تعمیرات و نگهداری اداری و خانگی در شهر شما را اکنون به ساده‌ ترین شکل ممکن ارائه می‌دهد. برای رزرو آنلاین خدمات مورد نیاز خود، کافیست اطلاعات زیر را تکمیل کنید تا همکاران ما در اسرع وقت در محل شما حاضر شوند


        </p>

        {/* Placeholder for Form */}
        <div className="mt-8">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
