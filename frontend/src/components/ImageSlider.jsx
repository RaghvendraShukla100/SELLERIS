import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of image data with image source and text
const imageData = [
  {
    src: "https://www.kimirica.shop/cdn/shop/files/Almond-Oil-Skin-care-Page-Inner-Banner--01.jpg?v=1715765156&width=1400",
    text: "This is Image 1",
  },
  {
    src: "https://www.kimirica.shop/cdn/shop/files/Skin-Care-Page-Inner-Banner-Lip-scrub-01.jpg?v=1712050535&width=1400",
    text: "This is Image 2",
  },
  {
    src: "https://www.kimirica.shop/cdn/shop/files/Skin-care-Page-Inner-Banner-Sunscreen-01.jpg?v=1710578538&width=1400",
    text: "This is Image 3",
  },
  {
    src: "https://www.kimirica.shop/cdn/shop/files/Skin-Care-Page-Banner-Face-Cream-01.jpg?v=1709543347&width=1400",
    text: "This is Image 4",
  },
];

// Slider component
const ImageSlider = () => {
  // Slider settings
  const settings = {
    dots: false, // Display dots for navigation
    infinite: true, // Infinite looping of slides
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval in ms
  };

  return (
    <div className=" mx-auto">
      <Slider {...settings}>
        {imageData.map((image, index) => (
          // Each slide
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start bg-black bg-opacity-20 text-white text-xl p-4">
              {image.text}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
