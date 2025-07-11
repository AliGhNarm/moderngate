import React from "react";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import CompanyOverview from "../components/CompanyOverview";
import AppointmentForm from "../components/AppointmentForm";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div className="">
      <ServicesOverview />
      <CompanyOverview />
      <HowItWorks />
    </div>
  );
};

export default Home;
