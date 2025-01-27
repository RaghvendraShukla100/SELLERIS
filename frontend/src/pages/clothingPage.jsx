import React, { useEffect, useState } from "react";
import axios from "axios";

function ClothingPage() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/products/clothingPage"
        ); // Specify the URL
        setProductData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataFromServer();
  }, []);

  return (
    <div>
      {productData ? (
        // Render your product data here
        <div>
          <h1>{productData.title}</h1>
          <p>{productData.description}</p>
          {/* Add more content as needed */}
        </div>
      ) : (
        <p className="text-center h-screen my-20 font-semibold text-2xl">
          Loading...
        </p>
      )}
    </div>
  );
}

export default ClothingPage;
