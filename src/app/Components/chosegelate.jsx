import React from "react";

const textSections = [
  {
    title: "World's largest print-on-demand network",
    description:
      "140+ print partners in 32 countries. Gelato is a truly global service.",
  },
  {
    title: "Sell globally, produce locally",
    description:
      "Your products are produced close to your customers, wherever they are.",
  },
  {
    title: "100% free editing tools",
    description: (
      <>
        Create your custom products using our suite of{" "}
        <a href="#" className="text-gray-700 underline">
          free tools
        </a>
        .
      </>
    ),
  },
  {
    title: "60+ logistics partners",
    description:
      "Our global network of logistics partners ensures your products are delivered fast.",
  },
  {
    title: "High-quality products",
    description:
      "We partner with the world's leading brands to ensure the best quality products.",
  },
  {
    title: "Endless creativity with Shutterstock Images",
    description:
      "Access millions of images and graphics to create unique products you can sell in your store.",
  },
  {
    title: "1-click integration to the leading ecommerce platforms",
    description: (
      <>
        Connect your store to Gelato using{" "}
        <a href="#" className="text-gray-700 underline">
          {" "}
          our integrations
        </a>{" "}
        with{" "}
        <a href="#" className="text-gray-700 underline">
          Shopify
        </a>
        ,{" "}
        <a href="#" className="text-gray-700 underline">
          Etsy
        </a>
        , and more.
      </>
    ),
  },
];

const ChooseGelato = () => {
  return (
    <div>
      <section className=" container mx-auto px-4 py-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center md:pt-6 md:pb-10 ">
          Why choose Gelato
        </h2>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/"
              alt="Why choose Gelato Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-6 lg:text-left">
            {textSections.map((section, index) => (
              <div key={index}>
                <p className="text-2xl font-semibold -mt-1">
                  <span className="mr-2 font-thin">▻</span> {section.title}
                </p>
                <p className="text-gray-600 text-base leading-relaxed mt-1">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseGelato;
