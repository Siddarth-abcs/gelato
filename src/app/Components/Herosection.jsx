import React from "react";

const Herosection = () => {
  return (
    // <!-- Hero Section -->
    <div className="md:w-5/6 m-auto py-6 lg:py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* <!-- Image Section (now ordered first on mobile) --> */}
        <div className="relative px-6 lg:px-0 order-1 lg:order-2">
          {/* Desktop image */}
          <img
            src="/herodesktop.webp" // Replace with your actual image path
            alt="Product showcase"
            className="hidden lg:block w-full h-auto object-cover rounded-lg"
          />
          {/* Mobile image */}
          <img
            src="/heromobile.webp" // Replace with your actual image path
            alt="Product showcase"
            className="lg:hidden w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* <!-- Text Section --> */}
        <div className="px-6 lg:px-0 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900">
            Print on demand for your ecommerce business
          </h1>
          <p className="text-xl font-bold mb-2">
            Sign up for free and only pay for what you sell
          </p>
          <p className="text-gray-600 mb-6">
            Turn your passion into profit with the world’s largest{" "}
            <a href="#" className="text-blue-500 underline">
              print on demand
            </a>{" "}
            <br></br>
            network.
          </p>

          {/* <!-- Call to Action Buttons --> */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition">
              Get started for free
            </button>
            <button className="border border-black text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition">
              See our products
            </button>
          </div>

          {/* <!-- Shopify Reviews --> */}
          <div className="flex items-center space-x-3">
            <img
              src="/shopify_monotone_black.svg" // Adjust the Shopify logo path
              alt="Shopify"
              className="h-8"
            />
            <div>
              <div className="flex items-center text-green-500">
                <span className="text-lg">★★★★★</span>
                <span className="ml-2 text-gray-900 text-lg">4.8 / 5</span>
              </div>
              <p className="text-gray-500 text-sm">based on 910 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
