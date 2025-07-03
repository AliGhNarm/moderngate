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
    title: "1. Book Online",
    desc:
      "Go to alwaleedfm.com and book your required service at the convenience of setting your own schedules.",
  },
  {
    icon: <FaPhoneAlt className="text-primary text-3xl" />,
    title: "2. Confirmation",
    desc:
      "A phone call or an email will be sent to you by one of our representatives to confirm your appointment.",
  },
  {
    icon: <FaTasks className="text-primary text-3xl" />,
    title: "3. Work Status",
    desc:
      "As soon as the confirmation has been made, the status of your appointment will be updated and notified via Message.",
  },
  {
    icon: <FaCheckCircle className="text-primary text-3xl" />,
    title: "4. Completion",
    desc:
      "When you get your service done, your status will be changed to 'Completion' & appointment will be closed after handing over a detailed report.",
  },
];

const HowItWorks = () => (
  <div className="bg-gray-50 py-12 px-4 lg:px-24">
    <div className="text-center">
      <TopHeading text={"How"} text2={" It Works"} />
      <span className="text-gray-400 text-center">What We have Done</span>
      <p className="">
        Modern Gate Facilities Management Services is extremely simple to ensure
        facilitation and convenience for our clients.
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
