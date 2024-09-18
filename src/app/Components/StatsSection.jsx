import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-16 hidden md:block">
      <div className="max-w-7xl m-auto w-5/6 grid grid-cols-1 md:grid-cols-3 items-center gap-y-6 md:gap-x-10 text-center">
        <div>
          <span className="text-4xl font-medium">90%</span>
          <p className="text-2xl mt-2 mx-6">
            of all orders are produced locally
          </p>
        </div>
        <div>
          <span className="text-4xl font-medium">90%</span>
          <p className="text-2xl mt-2 mx-6">
            of orders arrive within 5 days of ordering
          </p>
        </div>
        <div>
          <span className="text-4xl font-medium">140+</span>
          <p className="text-2xl mt-2 mx-6">
            print providers across 32 countries
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
