import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Footer Main Content */}
        <div className="lg:flex lg:justify-between lg:space-x-8">
          {/* Company Info Section */}
          <div className="lg:w-1/4 space-y-4">
            {/* Logo */}
            <img
              src="/path-to-logo.png"
              alt="Gelato Logo"
              className="w-24 mb-4"
            />
            <p className="text-sm">
              Gelato has created the world's largest network for local
              production and distribution of customized products. Together we
              bring creativity to life - and into business.
            </p>
            <button className="bg-white text-black py-2 px-6 rounded-full mt-4">
              Get started
            </button>
            {/* App Store and Google Play Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#">
                <img
                  src="/path-to-appstore.png"
                  alt="App Store"
                  className="w-24"
                />
              </a>
              <a href="#">
                <img
                  src="/path-to-googleplay.png"
                  alt="Google Play"
                  className="w-24"
                />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-10 lg:mt-0 lg:flex lg:space-x-8 lg:flex-grow">
            {/* Print on Demand Links */}
            <div className="text-sm space-y-4">
              <h4 className="text-lg font-semibold">Print on demand</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    What is print on demand?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Product catalog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Shipping and delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Pro sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Returns policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>

            {/* Integrations Links */}
            <div className="text-sm space-y-4">
              <h4 className="text-lg font-semibold">Integrations</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Shopify
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Etsy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    WooCommerce
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Wix
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Start Selling Links */}
            <div className="text-sm space-y-4">
              <h4 className="text-lg font-semibold">Start Selling</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Embroidery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Print on demand t-shirts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Custom products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Print on demand Europe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Print on demand Canada
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="text-sm space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    About Gelato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Leadership team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Affiliates program
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Legal Links */}
          <div className="text-sm space-x-4">
            <a href="#" className="hover:text-gray-400">
              Legal
            </a>
            <a href="#" className="hover:text-gray-400">
              Privacy policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Cookie policy
            </a>
            <a href="#" className="hover:text-gray-400">
              API terms
            </a>
            <a href="#" className="hover:text-gray-400">
              Sitemap
            </a>
          </div>

          {/* Language & Social Media Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-sm border border-white py-1 px-2">
              English (India)
            </button>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
