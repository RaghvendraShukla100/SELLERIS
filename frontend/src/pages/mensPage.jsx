import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const mensBanner = [
  "https://m.media-amazon.com/images/G/31/MA2025/UBS/JAN/INGRESS/T-shirts_jeans_and_more__1500x460._CB551772543_.png",
  "https://m.media-amazon.com/images/G/31/img24/MA/dec/extra/Lacoste_bxgy_1500x460._CB553615086_.png",
  "https://m.media-amazon.com/images/G/31/img21/MA2024/AF_BAU/top_pcl_1500x460._CB542287683_.png",
  "https://m.media-amazon.com/images/G/31/img24/MA/sept/winterstore/PC-Men-Ingress._CB542302304_.gif",
];

function MensPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slider will change every 3 seconds
    nextArrow: <button className="slick-next">→</button>,
    prevArrow: <button className="slick-prev">←</button>,
  };

  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {mensBanner.map((elm, index) => (
          <div key={index}>
            <img src={elm} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
      <div>apple</div>
    </div>
  );
}

export default MensPage;
