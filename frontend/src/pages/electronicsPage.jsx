import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addApiLink,
  addSubCategory,
  addProductType,
} from "../slices/categoryDetailsSlice";

function ElectronicsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addApiLink("http://localhost:3000/api/products/electronics"));
    dispatch(addSubCategory("mobile"));
    dispatch(addProductType("mobile"));
  }, []);
  const setStateValue = () => {
    navigate("/productListings");
  };

  return (
    <div className="">
      <h1 className="text-red-600 text-6xl text-center uppercase">
        electronics page
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

export default ElectronicsPage;
