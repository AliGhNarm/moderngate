import React from "react";
import TopHeading from "../TopHeading";

const WelcomeSection = () => {
  return (
    <section className="w-full py-6 md:px-34 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left mb-10">
          <TopHeading
            text={"Welcome To"}
            text2={"Modern Gate Facilities Management Services"}
          />
          <h3 className="text-xl text-gray-400 text-center">
            Your Helping Hand to Share Your Load!
          </h3>
          <p className="py-3">
            {" "}
            Modern Gate Facilities Management Services is a part of Al Waleed
            Group. We are a Leading service provider in the FM Industry in UAE.
          </p>
          <p className="">
            We have a comprehensive approach to facility management with broad
            experience in managing Villas, Residential, Hotel, Mall, Retail,
            Offices and Commercial properties. We strive for sustainable
            improvement over the long-term. Our team proactively identifies
            areas to improve and implements new processes and upgrades in ways
            that balance upfront costs with efficiency gains.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-10">
            {/* Header Section */}

            {/* Paragraphs */}
            <div className="space-y-5 text-gray-700">
              <p>
                Modern Gate Facilities Management Services is a part of Al
                Waleed Group. We are a leading service provider in the FM
                Industry in UAE.
              </p>
              <p>
                We have a comprehensive approach to facility management with
                broad experience in managing Villas, Residential, Hotel, Mall,
                Retail, Offices and Commercial properties. We strive for
                sustainable improvement over the long-term.
              </p>
              <p>
                Modern Gate Group is a highly regarded, multi-faceted business
                group based in UAE. Our diversified business portfolio primarily
                includes businesses such as Real estate development,
                Construction, Hospitality & Leisure and Retail.
              </p>
              <p>
                In 1994, Al Waleed Group, Real Estate and property developer,
                established itself as the major business group in the UAE
                operated by prominent UAE Business Family.
              </p>
            </div>

            {/* CEO Signature */}
            <div className="mt-8 border-t pt-6">
              <p className="text-gray-800 font-medium text-lg">
                Mohd. A. Razaq A Aziz Al Mutawa
              </p>
              <p className="text-gray-600">CEO</p>
              <p className="text-gray-600">Modern Gate Group of Companies</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="https://alwaleedfm.com/wp-content/uploads/2022/07/image1.png"
                alt="CEO of Al Waleed Group"
                className="w-full rounded-lg border-4 border-gray-100 shadow-xl object-cover"
                loading="lazy"
              />
              <div className="absolute -inset-4 bg-orange-500/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
