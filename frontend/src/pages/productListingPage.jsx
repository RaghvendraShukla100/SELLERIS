import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../slices/productDetailsSlice";
import dommyData from "./dommyProductListData";
import { IoMdStar } from "react-icons/io";
import Rating from "../components/rating";
import axios from "axios";

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [catfilter, setCatFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [discountFilter, setDiscountFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [productTypeFilter, setProductTypeFilter] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const catData = useSelector((state) => state.productListing.value);
  const apiLink = useSelector((state) => state.catDetails.apiLink);

  useEffect(() => {
    const fetchClothingApiData = async () => {
      try {
        const response = await axios.get(apiLink);
        setProducts(response.data);
      } catch (error) {
        console.error("Error from CLOTHINGPAGE axios: ", error);
        setError("Failed to load products.");
      }
    };
    if (products.length === 0) fetchClothingApiData();
  }, [apiLink, products.length]);

  useEffect(() => {
    handleCategoryFilter();
    handleBrandFilter();
    handleProductTypeFilter();
    handlePriceFilter();
    handleDiscountFilter();
    handleColorFilter();
  }, []);

  // defining filter methods
  const handleCategoryFilter = () => {
    const cat = [
      ...new Set(products?.map((elm) => elm.subCategory?.toLowerCase())),
    ];
    setCatFilter(cat);
    console.log(cat);
  };

  const handleBrandFilter = (brand) => {
    const b = [...new Set(products?.map((elm) => elm.brand?.toLowerCase()))];
    setBrandFilter(b);
    // console.log(b);
  };

  const handleProductTypeFilter = () => {
    if (products?.category == "Clothing") {
      const proType = products?.map((elm) => elm.productType.toLowerCase());
      console.log("product type : ", proType);
    }
  };
  const handlePriceFilter = (minPrice, maxPrice) => {
    const filteredProducts = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setPriceFilter(filteredProducts);
  };
  const handleDiscountFilter = (minDiscount) => {
    const filteredProducts = products.filter(
      (product) => product.discount >= minDiscount
    );
    setDiscountFilter(filteredProducts);
  };
  const handleColorFilter = (color) => {
    const filteredProducts = products.filter(
      (product) => product.color.toLowerCase() === color.toLowerCase()
    );
    setColorFilter(filteredProducts);
  };

  // handle add to cart button

  const handleAddToCartClick = () => {};

  const getCurrentPrice = (price, discount) => {
    const percentageValue = parseFloat(discount) / 100;
    const discountAmount = price * percentageValue;
    return Math.round(price - discountAmount);
  };
  const handleCardClick = (item) => {
    dispatch(addProduct(item));
    navigate("/productDetails");
  };

  const getImageUrl = (images) => {
    if (Array.isArray(images)) {
      if (typeof images[0] === "string") {
        return images[0];
      } else if (images[0].links && images[0].links[0]) {
        return images[0].links[0];
      }
    }
    return null;
  };

  const renderProducts = () => {
    return products?.map((elm) => {
      const finalPrice = getCurrentPrice(elm.price, elm.discountsOrOffers);
      const originalPrice = Math.round(elm.price);
      const imageUrl = getImageUrl(elm.images);

      return (
        <div
          key={elm.id}
          className="h-fit p-3 w-[240px]  bg-white hover:shadow-xl transition-all duration-500 text-gray-800   rounded-sm "
          onClick={() => handleCardClick(elm)}
        >
          {imageUrl ? (
            <div className="image-container mt-5 h-[200px]  mx-auto overflow-hidden flex justify-center items-center">
              <img src={imageUrl} alt="product image" className="image " />
            </div>
          ) : (
            <div className="mt-5 h-[200px] flex items-center justify-center bg-gray-200">
              No Image Available
            </div>
          )}
          {/* rating seection starts here*/}
          <div className="flex gap-x-2 my-3  text-[12px] font-bold items-center">
            <Rating review={elm.reviews} />
          </div>
          {/* rating section ends here */}
          <div className="my-1 font-bold capitalize">{elm.brand}</div>
          <div className="my-1 capitalize text-[13px]">
            {elm.name.slice(0, 20)}
          </div>
          <div className="font-semibold my-1">
            <span>{finalPrice}</span>
            <span className="text-[11px] capitalize mx-1 text-gray-600 line-through">
              {originalPrice}
            </span>
            <span className="text-red-400 text-[11px] capitalize mx-1">
              ({elm.discountsOrOffers})
            </span>
          </div>
          <button
            className="border border-black w-full py-1 my-5 "
            onClick={() => handleAddToCartClick(elm)}
          >
            add to cart
          </button>
        </div>
      );
    });
  };

  return (
    <div className="">
      {error && <p>{error}</p>}
      <div className="py-2">
        <h1 className="px-5 py-1 capitalize font-normal">
          home / clothing / {`${catData} `}
        </h1>
        <h1 className="px-5 py-1 capitalize font-normal">
          {`${catData} `} - 15941 items
        </h1>
      </div>
      <div className="grid grid-cols-12">
        <aside className="col-span-2 mt-[2px] h-fit">
          <div className="flex justify-between min-h-20">
            <h1 className="uppercase font-bold py-5 px-4 text-gray-800">
              Filters
            </h1>
            <h1 className="uppercase text-red-500 font-semibold px-2 py-5">
              clear all
            </h1>
          </div>
          {/* filter category starts */}
          <div className="border  py-5 px-4">
            <h1 className="uppercase font-semibold text-gray-800">
              categories
            </h1>
            <div>
              {catfilter?.map((elm) => (
                <div key={elm}>
                  <input type="checkbox" id={elm} name={elm} value={elm} />
                  <label htmlFor={elm} className="capitalize">
                    {elm}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* filter category starts */}
          {/* filter brand starts */}

          <div className="border border-y-0 py-5 px-4">
            <h1 className="uppercase font-semibold text-gray-800">brand</h1>
            <div>
              {dommyData?.brands?.map((elm) => (
                <div key={elm}>
                  <input type="checkbox" id={elm} name={elm} value={elm} />
                  <label htmlFor={elm} className="capitalize px-1">
                    {elm}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* filter brand ends */}

          <div className="border py-5 px-4">
            <h1 className="uppercase font-semibold text-gray-800">price</h1>
            <div>
              <input type="range" name="price" id="price" />
            </div>
          </div>
          <div className="border border-y-0 py-5 px-4">
            <h1 className="uppercase font-semibold text-gray-800">color</h1>
            <div>
              {dommyData?.color?.map((elm) => (
                <div key={elm}>
                  <input type="checkbox" id={elm} name={elm} value={elm} />
                  <label htmlFor={elm} className="capitalize">
                    {elm}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="border py-5 px-4">
            <h1 className="uppercase font-semibold text-gray-800">discount</h1>
            <div>
              {dommyData?.discount?.map((elm) => (
                <div key={elm}>
                  <input type="radio" id={elm} name="discount" value={elm} />
                  <label htmlFor={elm} className="capitalize">
                    {elm}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <section className="col-span-10 ">
          <div className="min-h-20 uppercase flex justify-between p-5">
            <div>super filter options will be available here</div>
            <div className="border p-2 hover:shadow-md">
              sort by :
              <select className="font-semibold capitalize hover:w-full focus:outline-none">
                <option value="recomendation px-2">recomendation</option>
                <option value="new">what's new</option>
                <option value="popularity" className="py-5">
                  popularity
                </option>
                <option value="discount">better discount</option>
                <option value="high to low">price : high to low</option>
                <option value="low to high">price : low to high</option>
                <option value="customer rating">customer rating</option>
              </select>
            </div>
          </div>
          <div className="border border-x-0 h-full  pr-5">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:gap-20 md:gap-5 p-10">
              {renderProducts()}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductListingPage;
