import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Rating from "../components/rating";
import { FaRupeeSign } from "react-icons/fa";

function ProductDetailsPage() {
  const productData = useSelector((state) => state.productDetails.value) || [];
  const [mainImage, setMainImage] = useState("");
  const [thumbNailImages, setThumbnailImages] = useState([]);
  const [isElectronics, setISElectronics] = useState(false);
  useEffect(() => {
    productData.category == "Electronics" && setISElectronics(true);
  }, [productData]);
  useEffect(() => {
    setThumbnailImages(productData.images[0].links);
  }, []);
  const handleMouseOver = (img) => {
    setMainImage(img);
  };
  const handleImageClick = (e) => {
    setMainImage("");
    setThumbnailImages(e);
  };
  const calculateDiscount = (price, discount) => {
    const percentage = parseFloat(discount) / 100;
    const discountedPrice = price * percentage;
    return Math.round(discountedPrice);
  };
  return (
    <div>
      <div className="grid grid-cols-12 p-3 gap-x-1 h-fit my-5 ">
        <section className="w-full flex col-span-6 ">
          {/* thumbnail images */}
          <div className=" ml-1 w-16 overflow-hidden">
            {thumbNailImages?.map((elm) => (
              <img
                src={elm}
                value={elm}
                onMouseOver={() => handleMouseOver(elm)}
                className="w-12  h-16 border  my-2 rounded-xl"
              />
            ))}
          </div>
          {/* main image */}
          <div className=" ml-1 w-full">
            <img
              src={mainImage || thumbNailImages[0]}
              className="block mx-auto"
            />
          </div>
        </section>
        <section className="w-full p-5 col-span-3 border">
          <div
            className="text-blue-700 text-[13px] cursor-pointer 
        hover:underline font-semibold"
          >
            Visit the {productData.brand} Store
          </div>
          <div className="text-2xl capitalize">{productData.name}</div>

          {/* product rating section */}
          <div className="flex items-center text-[13px] text-orange-500">
            <Rating review={productData.reviews} />
          </div>
          <hr />
          <div className="font-semibold my-2 capitalize">
            <div className="flex space-x-2">
              <div className="text-red-700 text-[13px]">
                -{productData.discountsOrOffers}
              </div>
              <div className="text-[14px] line-through">
                M.R.P.: {productData.price}{" "}
              </div>
            </div>
            <div className="flex items-center text-3xl font-normal">
              <FaRupeeSign className="text-lg" />
              {calculateDiscount(
                productData.price,
                productData.discountsOrOffers
              )}
            </div>
            <span>Inclusive of all taxes</span>
          </div>
          <div className="font-semibold my-2 capitalize">
            discount available : {productData.discountsOrOffers}
          </div>

          {/* products colors available */}
          <div className=" flex space-x-2  p-2">
            {productData?.images?.map((elm) => (
              <div className="border w-14 ">
                <img
                  src={elm.links[0]}
                  onClick={() => handleImageClick(elm.links)}
                />
              </div>
            ))}
          </div>
          {/* select the products size */}
          {!isElectronics && (
            <div className="font-semibold border border-black capitalize px-2 w-fit">
              sizes :
              <select name="size" id="size">
                {productData?.sizes?.map((elm) => (
                  <option value={elm}>{elm}</option>
                ))}
              </select>
            </div>
          )}

          <hr className="my-2" />
          {/* product details will be here */}
          <div>
            <h2 className="capitalize font-semibold my-2">about this item :</h2>
            <ul>
              {productData.detailsAboutThisItem.map((elm) => (
                <li className="list-disc  mx-4">{elm}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="w-full col-span-3 ">
          <div className="border rounded-lg h-full">add to cart</div>
        </section>
      </div>
      <hr />
      <div className="mx-10 flex space-x-2">
        <div className="font-bold uppercase "> product description :</div>
        <div className="font-semibold"> {productData.description}</div>
      </div>
      <div>
        <h5 className="font-bold text-3xl uppercase  mt-5 mx-2">
          From the manufacturer
        </h5>
        {productData.specialPromotionalImages?.map((elm) => (
          <img src={elm} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
