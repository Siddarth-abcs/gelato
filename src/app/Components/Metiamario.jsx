import React from "react";

const Metiamario = () => {
  return (
    <div className="bg-white py-6 md:py-12">
      <div className="w-5/6 m-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2">
          <p className="text-lg md:text-xl font-medium text-gray-800">
            For print on demand sellers
          </p>
          <h1 className="text-3xl md:text-6xl py-3 md:pb-6 font-bold text-black leading-tight">
            Accelerate business growth with innovative design tools and apps
          </h1>
          <p className="pb-4 text-gray-800 text-xl md:text-2xl">
            See how our cutting-edge solutions can help you reach new customers
            and maximize your profits.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-full">
            Get started
          </button>
        </div>
        {/* Right side  */}
        <div className="md:w-1/2 py-6 md:py-auto">
          <img
            src="/metiomaria.gif"
            className="w-full h-auto"
            alt="gelatoconnect"
          />
        </div>
      </div>
    </div>
  );
};

export default Metiamario;
