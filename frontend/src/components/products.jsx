import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addParameter, removeParameter } from "../slices/productListingSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const catData = useSelector((state) => state.productListing.value);

  const fetchProducts = async () => {
    await axios
      .get("http://localhost:3000/api/products/BrandPoster")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log("Error from axios : ", error));
  };

  const handleProductCategoryClick = (e) => {
    const productCategory = e.catName;
    dispatch(removeParameter());
    dispatch(addParameter(productCategory));
    navigate("/productListingPage");
  };

  products.length == 0 && fetchProducts();
  // console.log(products.brandOfferListMens);
  console.log(catData);
  return (
    <>
      <section>
        <img src={products.shopByCategoryImage} alt="" />
        <div className="flex flex-wrap  justify-center w-10/12  mx-auto  ">
          {products.categorySpecificPoster?.map((elm) => (
            <img
              key={elm.index}
              src={elm.image}
              alt={elm.catName}
              className="w-[180px] cursor-pointer "
              onClick={() => handleProductCategoryClick(elm)}
            />
          ))}
        </div>
      </section>

      {/* brand specific deals */}
      <h1
        className="bg-red-950 py-10 text-center text-5xl uppercase 
      font-extrabold mt-20 mb-5 font-serif text-white    mx-auto"
      >
        brand specific deals
      </h1>
      <div
        className="  w-10/12 mx-auto 
      gap-2  flex flex-wrap  justify-center"
      >
        {products.brandOfferListMens?.map((elm) => (
          <img
            key={elm.index}
            src={elm.brandimage}
            alt="elm.brandName"
            className="w-[190px]"
          />
        ))}
      </div>
    </>
  );
}

export default Products;
