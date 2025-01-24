import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-[#232f3f] text-gray-100  py-10">
        <h1 className="text-center font-semibold text-2xl lowercase my-5">
          www.selleris.in
        </h1>
        <div className="w-9/12   mx-auto  grid grid-cols-4">
          <div className="">
            <h2 className="font-semibold uppercase my-5">get to know us</h2>
            <div className="  capitalize">
              <ul>
                <li className="hover:underline cursor-pointer">
                  about selleris
                </li>
                <li className="hover:underline cursor-pointer">careeres</li>
                <li className="hover:underline cursor-pointer">
                  press releases
                </li>
                <li className="hover:underline cursor-pointer">
                  selleris science
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-semibold uppercase my-5">contact with us</h2>
            <div className="  capitalize">
              <ul>
                <li className="hover:underline cursor-pointer">facebook</li>
                <li className="hover:underline cursor-pointer">twiter</li>
                <li className="hover:underline cursor-pointer">instagram</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-semibold uppercase my-5">make money with us</h2>
            <div className="  capitalize">
              <ul>
                <li className="hover:underline cursor-pointer">
                  sell on selleris
                </li>
                <li className="hover:underline cursor-pointer">
                  protect and build your brand
                </li>
                <li className="hover:underline cursor-pointer">
                  supply to selleris
                </li>
                <li className="hover:underline cursor-pointer">
                  become an affiliate
                </li>
                <li className="hover:underline cursor-pointer">
                  advertise your products
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-semibold uppercase my-5">let us help you</h2>
            <div className="  capitalize">
              <ul>
                <li className="hover:underline cursor-pointer">
                  your accounts
                </li>
                <li className="hover:underline cursor-pointer">
                  returns center
                </li>
                <li className="hover:underline cursor-pointer">
                  100% purchase protection
                </li>
                <li className="hover:underline cursor-pointer">help</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
