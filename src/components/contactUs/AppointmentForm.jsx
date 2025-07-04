import React from "react";
import TopHeading from "../TopHeading";
import Form from "./Form";

const AppointmentForm = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="w-[97vw] max-w-6xl mx-auto px-4">
        {/* Heading */}
        <TopHeading text={"Book Online"} text2={"For Appointment"} />

        {/* Description */}
        <p className="text-center text-gray-700 mb-6">
          Modern Gate Facilities Management Services – Office & Home maintenance
          services in Dubai have now been made extremely simple. To book your
          required service online, just fill in the details below and our
          representatives will be right there at your doorstep.
        </p>

        {/* Placeholder for Form */}
        <div className="mt-8">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
