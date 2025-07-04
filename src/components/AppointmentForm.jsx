import React from "react";
import { assets } from "../assets/assets"; // Ensure logo is available
import TopHeading from "./TopHeading";

const AppointmentForm = () => {
  return (
    <section className="w-full py-10 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <div className="text-center mb-6">
          <TopHeading text={"Book Online"} text2={"For Appointment"} />
          <p className="text-gray-600 mt-2 text-sm md:text-base max-w-3xl mx-auto">
            With Modern Gate Facilities Management Services, office & home
            maintenance services in Dubai have now been made extremely simple.
            In order to book your required service online, you simply need to
            fill in the details below and our representatives will be right
            there at your doorstep.
          </p>
        </div>

        {/* Form and Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Form */}
          <form className="w-full md:w-1/2 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 px-4 py-2 rounded outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-2 rounded outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 px-4 py-2 rounded outline-none"
            />
            <select className="w-full border border-gray-300 px-4 py-2 rounded outline-none">
              <option value="">Type of Service</option>
              <option value="ac">AC Services</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="handyman">Handyman</option>
            </select>
            <textarea
              placeholder="How can we Help You"
              rows="4"
              className="w-full border border-gray-300 px-4 py-2 rounded outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary  text-white py-2 rounded hover:bg-primary/90 transition"
            >
              Fix An Appointment
            </button>
          </form>

          {/* Logo & Arabic Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <img
              src={assets.logo}
              alt="Al Waleed Logo"
              className="w-50 h-80 md:w-60 object-contain mb-4"
            />
            <h3 className="text-2xl font-medium text-center text-gray-800">
              خدمات إدارة المرافق مودرن جيت
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
