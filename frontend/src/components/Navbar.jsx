import React, { useState } from "react";
import { IoLocationSharp, IoCart, IoMenuSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const thirdNavSection = {
  clothings: ["mens", "womens", "kids", "girls", "boys"],
  electronics: ["mobile", "laptop", "tv"],
  furnitures: ["chair", "table", "sofa", "cupboard"],
  beautySkincares: ["face wash", "soap", "lotion"],
  homedecores: [
    "curtains",
    "bed linen",
    "paintings",
    "clocks",
    "decorative articles",
  ],
};

function Navbar() {
  const navigate = useNavigate();
  const [visibleNav, setVisibleNav] = useState(false);
  const [thirdNavData, setThirdNavData] = useState([]);
  const [thirdNavHeading, setThirdNavHeading] = useState("");

  const handleCategoryClick = (e) => {
    const value = e.target.getAttribute("value");
    console.log(value);
    setThirdNavHeading(value);
    setVisibleNav(true);
    setThirdNavData(thirdNavSection[value] || []);

    value === "clothings" && navigate("/clothingPage");
    value === "electronics" && navigate("/electronicsPage");
    value === "furnitures" && navigate("/furnituresPage");
    value === "beauti&skincare" && navigate("/beautySkincarePage");
    value === "homedecore" && navigate("/decoreHomePage");
  };

  const handleThirdNavClick = (item) => {
    console.log("third nav is clicked", item);
    item === "mens" && navigate("/mens");
    item === "womens" && navigate("/womens");
    item === "kids" && navigate("/kidspage");
    item === "boys" && navigate("/boyspage");
    item === "girls" && navigate("/girlspage");
  };

  return (
    <nav>
      {/* first nav section */}
      <section className="bg-[#131921] grid grid-cols-12 md:px-10 md:py-2 h-16 text-white overflow-hidden">
        {/* app logo */}
        <div
          className="md:text-2xl px-1 cursor-pointer md:font-semibold  col-span-2"
          onClick={() => navigate("/")}
        >
          SELLERIS.in
        </div>
        {/* global location */}
        <div className="md:px-2 px-1   col-span-2  ">
          <div className="capitalize md:text-[13px] font-thin text-xs text-gray-300 -my-1">
            Delivering to Boisar 401501
          </div>
          <div className="flex items-center -ml-4">
            <IoLocationSharp className="text-[20px]" />
            <h2 className="font-semibold">Update Location</h2>
          </div>
        </div>
        {/* search bar */}
        <div className="col-span-4">
          <div className="rounded-sm flex">
            <form action="submit" className="flex w-full">
              <input
                type="text"
                name="nav_search"
                id="nav_search"
                className="w-full h-9 md:px-2 flex-grow"
                placeholder="Search Selleris.in"
              />
              <button className="h-9 px-2 bg-orange-700 uppercase flex-shrink-0">
                search
              </button>
            </form>
          </div>
        </div>

        {/* login */}
        <div className="px-4   col-span-2">
          <div className="capitalize text-[13px] -my-1">hello, sign in</div>
          <div className="flex items-center">
            <div className="capitalize font-semibold -my-1">
              accounts & listing
            </div>
            <FaCaretDown className="ml-1 mt-2" />
          </div>
        </div>
        {/* orders */}
        <div className="px-4  ">
          <div className="capitalize -my-1 text-[13px]">returns</div>
          <div className="capitalize font-semibold -my-1">& orders</div>
        </div>
        {/* cart */}
        <div className="px-4   flex text-3xl items-center">
          <IoCart />
        </div>
      </section>
      {/* second nav section */}
      <section className="bg-[#232f3f] text-gray-200">
        <div className="flex items-center w-full">
          <div className="mx-5 capitalize">
            <ul className="flex space-x-4">
              {Object.keys(thirdNavSection).map((category) => (
                <NavLink
                  key={category}
                  to={category}
                  className={({ isActive }) =>
                    isActive ? "border " : "border border-transparent"
                  }
                >
                  <li
                    value={category}
                    className="cursor-pointer uppercase font-semibold px-3"
                    onClick={handleCategoryClick}
                  >
                    {category}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>

          <div className="h-9 w-96 ml-auto overflow-clip">
            <img
              src="https://m.media-amazon.com/images/G/31/Events/img25/janART25/SWM_SHOP-NOW._CB552728778_.jpg"
              className="w-full h-full"
              alt="Promotional banner"
            />
          </div>
        </div>
      </section>
      {/* third nav section */}
      {visibleNav && (
        <section className=" flex items-center md:px-10 bg-gray-600 h-7">
          {/* <div className="font-semibold capitalize">{thirdNavHeading}</div> */}
          <ul
            className="flex  space-x-1 mx-2 capitalize  
            font-semibold py-1  text-gray-100
            "
          >
            {thirdNavData.map((item, index) => (
              <li
                key={index}
                className="px-3 cursor-pointer"
                onClick={() => handleThirdNavClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}
    </nav>
  );
}

export default Navbar;
