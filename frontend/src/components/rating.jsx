import React, { useEffect, useState } from "react";
import { IoIosStarHalf, IoIosStar, IoIosStarOutline } from "react-icons/io";

function Rating({ review }) {
  const [rating, setRating] = useState(0); // Initialize rating state to 0
  const [stars, setStars] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    const data = review.map((elm) => elm.rating); // Use map to extract ratings
    const avgRating = data.reduce((acc, curr) => acc + curr, 0) / data.length; // Calculate the average rating
    setRating(avgRating); // Set the average rating in state

    const fullStars = Math.floor(avgRating); // Number of full stars
    const halfStars = avgRating % 1 >= 0.5 ? 1 : 0; // Number of half stars
    const emptyStars = 5 - fullStars - halfStars; // Number of empty stars

    // Create an array of star icons based on the calculated numbers
    const starsArray = [
      ...Array(fullStars).fill(<IoIosStar />),
      ...Array(halfStars).fill(<IoIosStarHalf />),
      ...Array(emptyStars).fill(<IoIosStarOutline />),
    ];
    setStars(starsArray);
    setReviewCount(data.length);
  }, [review]);

  return (
    <div className="flex items-center">
      <h2> {rating.toFixed(1)}</h2>
      <div className="flex mx-1 items-center ">{stars}</div>
      <div className="flex items-center">| {reviewCount}</div>
    </div>
  );
}

export default Rating;
