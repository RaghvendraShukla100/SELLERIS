import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

function App() {
  const arr = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2025/UBS/Jan/9-5._CB551720094_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/MA2025/UBS/GW/HERO/2-1._CB551724485_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2025/UBS/Jan/1-5._CB551715463_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/vinambia/70x10499/D128157385_Update_DesktopHeroTemplate_3000x1200_ref._CB551732423_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/2025/Branddays/Brand_days_-_TSC_-_GW-04._CB551778303_.jpg",
  ];

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
    <div className="slider-container">
      <Slider {...settings}>
        {arr.map((elm, index) => (
          <div key={index}>
            <img src={elm} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
