import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider1 from "../components/Slider1";

function ElectronicsHomePage() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/electronicsHomePage")
      .then((response) => setProductData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const firstSliderImages = () => {
    return productData?.slider.map((elm) => elm.link);
  };
  const secondSliderImages = () => {
    return productData?.advertiseSlider.map((elm) => elm.link);
  };

  return (
    <div>
      {/* electronics lable */}
      <div>
        <img src={productData?.lable} alt="Product Label" />
      </div>
      {/* slider  */}
      <div className="bg-[#F4F3EF] pb-20">
        <div className="w-10/12 mx-auto ">
          <Slider1 imagesArray={firstSliderImages()} />
        </div>
      </div>
      {/* shop by category */}
      <div className="bg-neutral-300  pb-20">
        <h1 className="text-5xl text-white font-bold uppercase text-center py-10 ">
          shop by category
        </h1>
        <div className="grid grid-cols-6 gap-2 mx-auto w-10/12">
          {productData?.shopByCategory.map((elm, index) => (
            <img
              key={index}
              src={elm.link}
              alt={elm.name}
              className="  object-cover border cursor-pointer"
            />
          ))}
        </div>
      </div>
      {/* second slider  */}
      <div className="bg-[#F4F3EF] py-10">
        <div className="w-10/12 mx-auto ">
          <Slider1 imagesArray={secondSliderImages()} />
        </div>
      </div>

      {/* shop by brand */}
      <div>
        <h1 className="text-5xl  font-bold uppercase text-center py-10 ">
          shop by brand
        </h1>
        <div className="grid grid-cols-5 gap-2 w-10/12 mx-auto pb-20">
          {productData?.shopByBrands.map((elm, index) => (
            <img
              key={index}
              src={elm.link}
              alt={elm.name}
              className="hover:shadow-md cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElectronicsHomePage;
