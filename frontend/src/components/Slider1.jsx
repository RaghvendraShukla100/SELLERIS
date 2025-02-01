import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

function Slider1({ imagesArray = [], customSettings = {} }) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: "ondemand",
  };

  // Merge defaultSettings with customSettings
  const settings = { ...defaultSettings, ...customSettings };

  return (
    <div className="slider-container z-0">
      <Slider {...settings}>
        {Array.isArray(imagesArray) && imagesArray.length > 0 ? (
          imagesArray.map((elm, index) => (
            <div key={index} className="w-fit mx-auto z-0">
              <img src={elm} alt={`Image ${index}`} className="z-0" />
            </div>
          ))
        ) : (
          <div>No images to display</div>
        )}
      </Slider>
    </div>
  );
}

export default Slider1;
