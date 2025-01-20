import React, { useState, useEffect } from "react";
import "./Slider.css"; // Import the CSS file for styling
import { Divide } from "lucide-react";

const images = [
  "https://m.media-amazon.com/images/G/31/MA2025/JanArt/Steal_deals/HERO/1_Most-Loved_Brands__PC._CB552631118_.png",
  "https://m.media-amazon.com/images/G/31/MA2025/JanArt/Steal_deals/HERO/jackets_and_Sweatshirts_PC._CB552631118_.png",
  "https://m.media-amazon.com/images/G/31/MA2025/JanArt/Steal_deals/HERO/4_Premium_Sunglasses_PC._CB552631118_.png",
  "https://m.media-amazon.com/images/G/31/MA2025/JanArt/Steal_deals/HERO/New_Launches_copy_2_PC._CB552631118_.png",
  "https://m.media-amazon.com/images/G/31/MA2025/JanArt/Steal_deals/HERO/jackets_and_Sweatshirts_PC._CB552631118_.png",
  "https://m.media-amazon.com/images/G/31/MA2025/JanArt/Steal_deals/HERO/Buy_More_Save_More_PC._CB552631118_.png",
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-9/12 mx-auto overflow-hidden rounded-lg">
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slide w-full h-96 object-cover"
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={() =>
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          )
        }
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        ❯
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
