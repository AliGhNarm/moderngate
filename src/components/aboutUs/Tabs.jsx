import React, { useState } from "react";
import { tabs } from "../../assets/assets";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-black/70 text-white py-8 px-4 md:h-[35vh] flex flex-col justify-center items-center">
      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-6">
        {tabs.map((tb) => (
          <button
            key={tb.id}
            onClick={() => setActiveTab(tb)}
            className={`px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ${
              activeTab.id === tb.id
                ? "bg-primary text-white font-semibold"
                : "bg-white/30"
            }`}
          >
            {tb.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-3xl text-center text-sm md:text-base">
        <h3 className="text-xl font-bold mb-2">{activeTab.title}</h3>
        <p className="text-gray-200">{activeTab.description}</p>
      </div>
    </div>
  );
};

export default Tabs;
