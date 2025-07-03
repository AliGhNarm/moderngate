import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
