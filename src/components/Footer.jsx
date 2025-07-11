import React from "react";
import { FaPhone, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative md:h-[90vh] w-full">
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
            درباره ما
          </h2>
          <p className="text-base leading-relaxed text-gray-200">
          شرکت مدیریت تأسیسات مدرن ، مجموعه‌ای از خدمات نگهداری و تعمیرات اداری و خانگی را در شهر شما ارائه می‌دهد که شامل نگهداری، بازسازی و خدمات تعمیراتی می‌شود. با کار بی‌نقص تکنسین‌ها و متخصصان مجرب ما، شاهد کیفیت بی‌نظیر باشید
            
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-[#1958A3] font-semibold text-2xl mb-4">
            Our Services
          </h2>
          <ul className="text-base text-gray-200 space-y-2">
            <li>خدمات تعمیر و سرویس کولر و اسپیلت</li>
            <li>خدمات لوله‌کشی</li>
            <li>خدمات برقی</li>
            <li>خدمات نقاشی</li>
            <li>خدمات نجاری</li>
            <li>بازسازی و نوسازی</li>
            <li>خدمات نظافتی</li>
            <li>خدمات تعمیرات عمومی</li>
            <li>خدمات نظافت استخر</li>
            <li>خدمات باغبانی</li>
            <li>سیستم‌های دوربین مداربسته و امنیتی</li>
          </ul>
        </div>

        {/* Office Hours */}
        <div>
          <h2 className="text-[#1958A3] font-semibold text-2xl mb-4">
            Office Hours
          </h2>
          <ul className="text-base text-gray-200 space-y-2">
            <li>شنبه: 09:00 – 19:00</li>
            <li>یکشنبه: 09:00 – 19:00</li>
            <li>دوشنبه: 09:00 – 19:00</li>
            <li>سه شنبه: 09:00 – 19:00</li>
            <li>چهاشنبه: 09:00 – 19:00</li>
            <li>پنج شنبه: 09:00 – 19:00</li>
            <li>جمعه: 09:00 – 19:00</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-[#1958A3] font-semibold text-2xl mb-4">
            تماس با ما
          </h2>
          <div className="space-y-4 text-base text-gray-200">
            <div className="flex items-start gap-3">
              <MdLocationOn className="text-[#1958A3] text-2xl mt-1" />
              <span>
                ادرس شرکت اینجا قراره باشه تا بدونن مردم کجا بیان
              </span>
            </div>
            <div className="flex items-center gap-3">
              <IoLogoWhatsapp className="text-[#1958A3] text-2xl" />
              <a
                href="https://wa.me/971581035828"
                target="_blank"
                rel="noopener noreferrer"
              >
                 +98 0993 574 6973
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#1958A3] text-2xl" />
              <a href="tel:+97143548115"> +98 0993 574 6973</a>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-[#1958A3] text-2xl" />
              <a href="mailto:info@alwaleedfm.com">
                Email: aligholizadehnarm@gmail.com
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

      {/* Footer Bottom */}<p>      <div className="text-center text-sm py-4 border-t border-gray-700 relative z-10 text-gray-300">
        ©2025.{" "}
        <span className="font-semibold text-white">
          
        <a href="https://alighnarm.ir" target="_blank">Ali GholizadehNarm.</a>        </span>
        
      </div></p>

    </footer>
  );
};

export default Footer;
