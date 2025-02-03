import React, { useState } from "react";
import axios from "axios";

const ReviewRating = ({ userId, productId, sellerId, orderId }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [media, setMedia] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Handle rating change
  const handleRatingChange = (value) => {
    setRating(value);
  };

  // Handle media upload
  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setMedia((prev) => [...prev, ...fileUrls]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    console.log({
      userId,
      productId,
      sellerId,
      orderId,
      rating,
      review,
      title,
      media,
    });
    try {
      const response = await axios.post("/api/reviews", {
        userId,
        productId,
        sellerId,
        orderId,
        rating,
        review,
        title,
        media,
      });

      alert("Review submitted successfully!");
      console.log(response.data);
    } catch (error) {
      setError("Failed to submit review. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Leave a Review</h2>

      {/* Rating */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Rating</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => handleRatingChange(value)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold ${
                rating >= value
                  ? "bg-yellow-400 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Review Title */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Review Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Summarize your review"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Review Text */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Review</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
          rows="5"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Media Upload */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">
          Add Photos/Videos
        </label>
        <input
          type="file"
          multiple
          onChange={handleMediaUpload}
          className="w-full p-2 border rounded"
        />
        <div className="mt-2 flex space-x-2">
          {media.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Media ${index + 1}`}
              className="w-20 h-20 object-cover rounded"
            />
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </button>

      {/* Error Message */}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
};

export default ReviewRating;
