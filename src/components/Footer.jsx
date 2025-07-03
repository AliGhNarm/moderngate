import React from "react";
import { FaPhone, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#363636] text-white relative h-[90vh] w-full flex-shrink-0 overflow-y-auto">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/dots-map.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Us */}
        <div>
          <h2 className="text-[#1958A3] font-semibold text-2xl mb-4">
            About Us
          </h2>
          <p className="text-base leading-relaxed text-gray-200">
            Modern Gate Facilities Management Services is a part of Al Waleed
            Group. We are a leading service provider in the FM Industry in UAE.
            <br />
            <br />
            We have a comprehensive approach to facility management with broad
            experience in managing Villas, Residential, Hotel, Mall, Retail,
            Offices, and Commercial properties.
            <br />
            <br />
            We strive for sustainable improvement over the long-term. Our team
            proactively identifies areas to improve and implements new processes
            and upgrades that balance upfront costs with efficiency gains.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-[#1958A3] font-semibold text-2xl mb-4">
            Our Services
          </h2>
          <ul className="text-base text-gray-200 space-y-2">
            <li>Air Conditioning Services</li>
            <li>Plumbing Services</li>
            <li>Electrical Services</li>
            <li>Painting Services</li>
            <li>Carpentry Services</li>
            <li>Renovation & Refurbishment</li>
            <li>Cleaning Services</li>
            <li>Water Tank Cleaning</li>
            <li>Swimming Pool Cleaning</li>
            <li>Special Cleaning Services</li>
            <li>CCTV & Security Systems</li>
          </ul>
        </div>

        {/* Office Hours */}
        <div>
          <h2 className="text-[#1958A3] font-semibold text-2xl mb-4">
            Office Hours
          </h2>
          <ul className="text-base text-gray-200 space-y-2">
            <li>Friday: 09:00 – 19:00</li>
            <li>Saturday: 09:00 – 19:00</li>
            <li>Sunday: 09:00 – 19:00</li>
            <li>Monday: 09:00 – 19:00</li>
            <li>Tuesday: 09:00 – 19:00</li>
            <li>Wednesday: 09:00 – 19:00</li>
            <li>Thursday: 09:00 – 19:00</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-[#1958A3] font-semibold text-2xl mb-4">
            Contact Here
          </h2>
          <div className="space-y-4 text-base text-gray-200">
            <div className="flex items-start gap-3">
              <MdLocationOn className="text-[#1958A3] text-2xl mt-1" />
              <span>
                Address: Modern Gate Facilities Management Services, Office No
                209, Modern Gate Facilities Management Services, Zabeel Road, AL
                Karama, Dubai, UAE.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <IoLogoWhatsapp className="text-[#1958A3] text-2xl" />
              <a
                href="https://wa.me/971581035828"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +971 58 103 5828
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#1958A3] text-2xl" />
              <a href="tel:+97143548115">Phone: +971 4 354 8115</a>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-[#1958A3] text-2xl" />
              <a href="mailto:info@alwaleedfm.com">
                Email: info@alwaleedfm.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="bg-white text-[#1958A3] p-3 rounded-full hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-white text-[#1958A3] p-3 rounded-full hover:scale-110 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm py-4 border-t border-gray-700 relative z-10 text-gray-300">
        ©2022.{" "}
        <span className="font-semibold text-white">
          Modern Gate Facilities Management Services
        </span>
        .
      </div>
    </footer>
  );
};

export default Footer;
