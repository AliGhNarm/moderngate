import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhone, FaBars, FaSearch } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="md:h-[24vh] h-auto w-full">
      {/* Top section */}
      <div className="md:h-[17vh] h-[21vh] bg-white flex flex-col md:flex-row md:items-center justify-between md:px-5 px-3 py-2">
        {/* Logo center on mobile */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Link to={"/"}>
            <img className="h-20" src={assets.logo} alt="logo" />
          </Link>
        </div>

        {/* Contact info (only visible on md and up) */}
        <div className="hidden md:flex items-center md:gap-10">
          <div className="flex md:gap-4 items-center">
            <div className="text-end">
              <div>WhatsApp</div>
              <div>+(971) 58 103 5828</div>
            </div>
            <a
              href="https://wa.me/971581035828"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-black cursor-pointer h-16 w-16 flex items-center justify-center"
            >
              <IoLogoWhatsapp className="text-4xl text-white" />
            </a>
          </div>
          <div className="flex md:gap-4 items-center">
            <div className="text-end">
              <div>Phone</div>
              <div>+(971) 58 103 5828</div>
            </div>
            <a
              href="tel:+971581035828"
              className="bg-primary hover:bg-black cursor-pointer h-16 w-16 flex items-center justify-center"
            >
              <FaPhone className="text-4xl text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="md:h-[7vh] bg-primary text-white py-2 text-lg px-3 md:px-3 flex items-center justify-between relative">
        {/* Left (mobile): Search bar */}
        <div className="md:hidden flex items-center gap-2">
          <input
            type="search"
            placeholder="Search..."
            className="outline-none bg-white px-3 py-1 text-black text-sm rounded"
          />
          <button className="bg-[#54595F] h-8 w-8 flex items-center justify-center rounded">
            <FaSearch />
          </button>
        </div>

        {/* Center - NavLinks (desktop only) */}
        <div className="hidden md:flex justify-center w-full items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 ${isActive ? "font-medium text-slate-800" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `px-4 ${isActive ? "font-medium text-slate-800" : ""}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/our-services"
            className={({ isActive }) =>
              `px-4 ${isActive ? "font-medium text-slate-800" : ""}`
            }
          >
            Our Services
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `px-4 ${isActive ? "font-medium text-slate-800" : ""}`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Right (mobile): Hamburger menu */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Right (desktop): Search bar */}
        <div className="absolute right-7 hidden md:flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="outline-none bg-white px-4 py-1 text-black text-sm"
          />
          <button className="bg-[#54595F] h-8 w-8 flex items-center justify-center">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-primary text-white text-center animate-slide-down z-50">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-3 border-b border-white ${
                isActive ? "font-bold bg-black/20" : ""
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `py-3 border-b border-white ${
                isActive ? "font-bold bg-black/20" : ""
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/our-services"
            className={({ isActive }) =>
              `py-3 border-b border-white ${
                isActive ? "font-bold bg-black/20" : ""
              }`
            }
            onClick={() => setMenuOpen(false)}
          >
            Our Services
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `py-3 ${isActive ? "font-bold bg-black/20" : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
