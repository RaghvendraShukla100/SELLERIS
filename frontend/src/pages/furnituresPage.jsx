import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addApiLink,
  addSubCategory,
  addProductType,
} from "../slices/categoryDetailsSlice";

function FurnituresPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setStateValue = () => {
    dispatch(addApiLink("http://localhost:3000/api/products/furnitures"));
    dispatch(addSubCategory("chair"));
    dispatch(addProductType("chair"));
    navigate("/productListings");
  };

  return (
    <div className="">
      <h1 className="text-red-600 text-6xl text-center uppercase">
        furnitures page
      </h1>
      <button
        className="border border-black mx-auto block my-5 rounded-sm px-2 py-1 "
        onClick={() => setStateValue()}
      >
        product Listing page
      </button>
    </div>
  );
}

export default FurnituresPage;
