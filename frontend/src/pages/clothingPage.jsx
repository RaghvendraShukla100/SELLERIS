import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addClothingPageData } from "../slices/clothingPageSlice";
import { useNavigate } from "react-router-dom";
import { addParameter } from "../slices/productListingSlice";
import {
  addApiLink,
  addSubCategory,
  addProductType,
} from "../slices/categoryDetailsSlice";

function ClothingPage() {
  const [products, setProducts] = useState([]);
  const cloths = useSelector((state) => state.clothingProducts.value);
  const catData = useSelector((state) => state.productListing.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClothingApiData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/products/clothing"
        );
        dispatch(addClothingPageData(response.data));
      } catch (error) {
        console.error("Error from CLOTHINGPAGE axios: ", error);
      }
    };
    if (!cloths) fetchClothingApiData();
  }, [cloths, dispatch]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/products/BrandPoster"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error from axios: ", error);
      }
    };
    if (products.length === 0) fetchProducts();
  }, [products]);

  const handleProductCategoryClick = (category) => {
    dispatch(addParameter(category.catName));
    dispatch(addApiLink("http://localhost:3000/api/products/clothing"));
    dispatch(addSubCategory("men"));
    dispatch(addProductType("shirt"));
    navigate("/productListings");
  };

  return (
    <div>
      <section>
        {products.shopByCategoryImage && (
          <img src={products.shopByCategoryImage} alt="Shop by category" />
        )}
        <div className="grid grid-cols-6 w-8/12 mx-auto  ">
          {products.categorySpecificPoster?.map((elm) => (
            <img
              key={elm.index}
              src={elm.image}
              alt={elm.catName}
              className="w-[180px] cursor-pointer"
              onClick={() => handleProductCategoryClick(elm)}
            />
          ))}
        </div>
      </section>

      {/* Brand Specific Deals */}
      <h1 className="bg-red-950 py-10 text-center text-5xl uppercase font-extrabold mt-20 mb-5 font-serif text-white mx-auto">
        Brand Specific Deals
      </h1>
      <div className="w-10/12 mx-auto gap-2 flex flex-wrap justify-center">
        {products.brandOfferListMens?.map((elm) => (
          <img
            key={elm.index}
            src={elm.brandimage}
            alt={elm.brandName}
            className="w-[190px] "
          />
        ))}
      </div>
    </div>
  );
}

export default ClothingPage;
