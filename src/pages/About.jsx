import React from "react";
import Header from "../components/aboutUs/Header";
import WelcomeSection from "../components/aboutUs/WelcomeSection";
import { assets } from "../assets/assets";
import Tabs from "../components/aboutUs/Tabs";
import OurTeam from "../components/aboutUs/OurTeam";
import OurSpeciality from "../components/aboutUs/OurSpeciality";
import WeDiffer from "../components/aboutUs/WeDiffer";

const About = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${assets.bg})`,
      }}
    >
      <Header />
      <WelcomeSection />
      <Tabs />
      <OurTeam />
      <OurSpeciality />
      <WeDiffer />
    </div>
  );
};

export default About;
