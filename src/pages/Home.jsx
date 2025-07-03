import React from "react";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import CompanyOverview from "../components/CompanyOverview";
import AppointmentForm from "../components/AppointmentForm";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <ServicesOverview />
      <CompanyOverview />
      <AppointmentForm />
    </div>
  );
};

export default Home;
