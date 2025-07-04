import React from "react";
import TopHeading from "../TopHeading";
import {
  FaHourglassEnd,
  FaRegThumbsUp,
  FaRegStar,
  FaRegEye,
} from "react-icons/fa";
import { MdHearing } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const WeDiffer = () => {
  const data = [
    {
      icon: (
        <FaRegThumbsUp className="text-3xl text-gray-600 hover:text-white" />
      ),
      title: "Quality",
      des:
        "Customer's trust and satisfaction are the core of our business. We primarily exist to create a high sense of confidence in our customers by delivering quality services.",
    },
    {
      icon: <FaRegStar className="text-3xl text-gray-600 hover:text-white" />,
      title: "Professionalism",
      des:
        "We remain driven in providing our customers with the highest standard of customer and professional services.",
    },
    {
      icon: <MdHearing className="text-3xl text-gray-600 hover:text-white" />,
      title: "We Listen",
      des:
        "Our customers have our ears. We are always available to listen to the needs and concerns of our customers. And, without fail, work to provide the best possible solutions.",
    },
    {
      icon: (
        <FaHourglassEnd className="text-3xl text-gray-600 hover:text-white" />
      ),
      title: "Value",
      des:
        "Our customers get more than our commitment and dedication as home and building maintenance company – you can enjoy top-grade service that is high-quality designed to improve your life.",
    },
    {
      icon: <FaRegEye className="text-3xl text-gray-600 hover:text-white" />,
      title: "Vision",
      des:
        "Our vision is to become the most reputable and responsive Facility and Home Maintenance service provider across Dubai, UAE.",
    },
    {
      icon: (
        <IoCheckmarkDoneSharp className="text-3xl text-gray-600 hover:text-white" />
      ),
      title: "Committed",
      des:
        "We stay committed to working in line with industry standards and also adopting innovations that will help us to deliver excellent services at all times.",
    },
  ];

  return (
    <div className="min-h-[90vh] bg-white py-12 md:px-16 px-8">
      <TopHeading text={"What Make"} text2={"Us Different"} />

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {data.map((card, index) => (
          <div
            key={index}
            className="   transition duration-300 p-5 flex gap-4 items-start"
          >
            {/* Icon Wrapper */}
            <div className="min-w-[70px] min-h-[70px] flex items-center justify-center hover:bg-primary rounded-full shadow-2xl shadow-gray-500 ">
              {card.icon}
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl text-primary  font-bold mb-1">
                {card.title}
              </h3>
              <p className="text-gray-700 text-sm text-justify">{card.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeDiffer;
