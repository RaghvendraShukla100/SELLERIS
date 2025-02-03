import React from "react";

function Footer() {
  return (
    <footer className="bg-[#232f3f] text-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Website Name */}
        <h1 className="text-center font-semibold text-2xl lowercase mb-8">
          www.selleris.in
        </h1>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h2 className="font-semibold uppercase mb-4 text-lg">
              Get to Know Us
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  About Selleris
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Press Releases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Selleris Science
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div>
            <h2 className="font-semibold uppercase mb-4 text-lg">
              Connect with Us
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h2 className="font-semibold uppercase mb-4 text-lg">
              Make Money with Us
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Sell on Selleris
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Protect and Build Your Brand
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Supply to Selleris
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Become an Affiliate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Advertise Your Products
                </a>
              </li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h2 className="font-semibold uppercase mb-4 text-lg">
              Let Us Help You
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Your Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Returns Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  100% Purchase Protection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-gray-300 transition duration-300"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright and Legal Links */}
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Selleris. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a
              href="#"
              className="hover:underline hover:text-gray-300 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:underline hover:text-gray-300 transition duration-300"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="hover:underline hover:text-gray-300 transition duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
