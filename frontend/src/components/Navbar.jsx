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
  const navigate = useNavigate(); // Corrected usage
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
    item === "mens" && navigate("/menspage");
    item === "womens" && navigate("/womenspage");
    item === "kids" && navigate("/kidspage");
    item === "boys" && navigate("/boyspage");
    item === "girls" && navigate("/girlspage");
  };

  return (
    <nav>
      {/* first nav section */}
      <section className="bg-[#131921] flex justify-between items-center md:px-10 md:py-2 h-16 text-white overflow-hidden">
        {/* app logo */}
        <div
          className="md:text-2xl px-1 cursor-pointer md:font-semibold"
          onClick={() => navigate("/")}
        >
          SELLERIS.in
        </div>
        {/* global location */}
        <div className="md:px-2 px-1">
          <div className="capitalize md:text-[13px] font-thin text-xs text-gray-300 -my-1">
            Delivering to Boisar 401501
          </div>
          <div className="flex items-center -ml-4">
            <IoLocationSharp className="text-[20px]" />
            <h2 className="font-semibold">Update Location</h2>
          </div>
        </div>
        {/* search bar */}
        <div>
          <div className="rounded-sm flex flex-nowrap">
            <form action="submit">
              <input
                type="text"
                name="nav_search"
                id="nav_search"
                className="md:w-80 md:h-8 md:px-2"
                placeholder="Search Selleris.in"
              />
              <button className="md:px-2 bg-orange-700 py-1 uppercase">
                search
              </button>
            </form>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="mx-4">language</div>
          {/* login */}
          <div className="mx-4">
            <div className="capitalize text-[13px] -my-1">hello, sign in</div>
            <div className="flex items-center">
              <div className="capitalize font-semibold -my-1">
                accounts & listing
              </div>
              <FaCaretDown className="ml-1 mt-2" />
            </div>
          </div>
          {/* orders */}
          <div className="mx-4">
            <div className="capitalize -my-1 text-[13px]">returns</div>
            <div className="capitalize font-semibold -my-1">& orders</div>
          </div>
          {/* cart */}
          <div className="mx-4 flex text-3xl items-center">
            <IoCart />
          </div>
        </div>
      </section>
      {/* second nav section */}
      <section className="bg-[#232f3f] text-gray-200">
        <div className="flex items-center w-full">
          {/* hamburger icon */}
          <div className="flex items-center h-9 p-2">
            <IoMenuSharp className="cursor-pointer text-2xl" />
          </div>
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
        <section className="border flex items-center md:px-10 h-7">
          <div className="font-semibold capitalize">{thirdNavHeading}</div>
          <ul className="flex space-x-1 mx-2 capitalize py-1">
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
