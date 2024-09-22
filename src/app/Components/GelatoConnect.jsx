import React from "react";

const GelatoConnect = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="w-5/6 grid grid-cols-1 md:grid-cols-2 items-center m-auto">
        <div>
          <img
            src="/gelatoconnect.gif"
            className="w-full h-auto"
            alt="gelatoconnect"
          />
        </div>
        {/* Right Side - Text content */}
        <div className="max-w-lg space-y-4 md:ml-16">
          <p className="text-gray-800 text-xl">For print producers</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-black">
            GelatoConnect
          </h2>
          <p className="text-gray-800 text-2xl">
            Elevate efficiency, cut costs, and seamlessly automate with our
            all-in-one software solution for the print industry.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-full">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default GelatoConnect;
