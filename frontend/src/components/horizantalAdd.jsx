import React, { useEffect, useState } from "react";
import Rating from "../components/rating";
import { FaRupeeSign } from "react-icons/fa";

function HorizantalAdd({ data }) {
  const [index, setIndex] = useState(0);
  // function to calculate the discount of products
  const calculateDiscount = (price, discount) => {
    const percentage = parseFloat(discount) / 100;
    const discountedPrice = price - price * percentage;
    return Math.round(discountedPrice);
  };
  //   function to change the image if array of image is provided
  useEffect(() => {
    let value = 0;
    const updateIndex = () => {
      setInterval(() => {
        value = (value + 1) % data.images[0].links.length;
        setIndex(value);
      }, 10000);
    };
    updateIndex();
  }, []);

  return (
    // first container
    <div className="border-y  my-5 h-fit">
      {/* second container */}
      <div className="grid grid-cols-12 h-full items-center">
        <div className="flex justify-center items-center">{data?.brand}</div>
        <div className="col-span-5 flex justify-center items-center font-semibold ">
          {data.name.slice(0, 150)}
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <div className="flex items-center text-[13px] text-orange-500">
            <Rating review={data.reviews} />
          </div>
        </div>
        <div className="col-span-3 text-red-700 text-2xl  flex justify-center items-center">
          <div className=" text-[13px] text-2xl ">
            -{data.discountsOrOffers}
          </div>
          <div className="flex items-center ">
            <FaRupeeSign />
            {calculateDiscount(data.price, data.discountsOrOffers)}
          </div>
          <div className="text-[14px] text-black line-through">
            M.R.P.: {data.price}{" "}
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden p-1 w-11">
          <img
            src={data?.images[0].links[index]}
            className="w-[50px] object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default HorizantalAdd;
