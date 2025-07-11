import React from "react";
import {
  FaCalendarCheck,
  FaPhoneAlt,
  FaTasks,
  FaCheckCircle,
} from "react-icons/fa";
import TopHeading from "./TopHeading";
import { assets } from "../assets/assets";

// Steps data
export const steps = [
  {
    icon: <FaCalendarCheck className="text-primary text-3xl" />,
    title: "۱. تماس شما",
    desc:
      "شما با ما تماس می‌گیرید و مشکل خود را شرح می‌دهید",
  },
  {
    icon: <FaPhoneAlt className="text-primary text-3xl" />,
    title: "۲. اعزام نیرو",
    desc:
      "ما در سریع‌ترین زمان ممکن نیروهای متخصص خود را به محل شما اعزام می‌کنیم.",
  },
  {
    icon: <FaTasks className="text-primary text-3xl" />,
    title: "۳. رفع مشکل",
    desc:
      "تکنسین‌های ما مشکل را به صورت کامل و حرفه‌ای برطرف می‌کنند.",
  },
  {
    icon: <FaCheckCircle className="text-primary text-3xl" />,
    title: "۴. اتمام کار",
    desc:
      "پس از اطمینان از رضایت شما، کار به پایان رسیده و محل را ترک می‌کنیم.",
  },
];

const HowItWorks = () => (
  <div className="bg-gray-50 py-12 px-4 lg:px-24">
    <div className="text-center">
      <TopHeading text={"روش"} text2={" کار ما"} />
      <span className="text-gray-400 text-center">خدمات ما چگونه انجام میشود</span>
      <p className="py-1 animate-fadeIn">
      شرکت مدیریت تأسیسات مدرن گیت فرآیند ارائه خدمات را به ساده‌ترین شکل ممکن طراحی کرده تا حداکثر سهولت و کارایی را برای مشتریان عزیز فراهم نماید

</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <img
        src={assets.worker}
        alt="Worker"
        className="w-full max-w-[550px] md:block hidden mx-auto rounded-lg"
      />
      <div className="space-y-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex items-start gap-6 p-4 hover:bg-gray-100 rounded-lg transition"
          >
            <div className="flex-shrink-0">{step.icon}</div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                {step.title}
              </h4>
              <p className="text-gray-600 mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HowItWorks;
