import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider1 from "../components/Slider1";

function WomensPage() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductsDataFromServer = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/products/WomenHomePage"
        );
        setProductsData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductsDataFromServer();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* slider */}
      <div className="bg-blue-950 lg:py-10">
        <div className="h-96 w-10/12  overflow-hidden mx-auto -pt-20">
          <Slider1 imagesArray={productsData?.womensHomeSliderImages} />
        </div>
      </div>

      {/* western wears must haves */}
      <div className="bg-blue-950">
        <h1 className="text-center capitalize py-10 text-3xl text-white font-extrabold">
          western wears must haves
        </h1>
        <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 w-10/12 mx-auto gap-1 pb-10 ">
          {productsData?.mustHaveWesternWears.map((elm, index) => (
            <div className="overflow-hidden">
              <img
                key={index}
                src={elm.link}
                className="h-40 w-full object-cover border cursor-pointer"
              />
              <div>
                <h1 className="uppercase font-semibold text-center text-white">
                  {elm.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* indian brands */}
      <div className="pb-20">
        <div>
          <h1
            className="lg:text-6xl md:text-4xl text-center py-10
            uppercase select-none"
          >
            indian brands faves
          </h1>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-1 gap-y-3 w-10/12 mx-auto">
          {productsData?.indianBrandsFaves.map((elm, index) => (
            <img
              key={index}
              src={elm.link}
              alt={elm.name}
              className="hover:shadow-md border"
            />
          ))}
        </div>
      </div>
      {/* lingerie you'll */}
      <div className="bg-[#FFE9DC] pb-20">
        <div>
          <h1
            className="lg:text-6xl md:text-4xl text-center py-10
            uppercase select-none"
          >
            lingerie you will love
          </h1>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-2 w-8/12 md:w-10/12 mx-auto">
          {productsData?.lingeriesYouWillLove.map((elm, index) => (
            <div className="overflow-clip">
              <img key={index} src={elm.link} className="cursor-pointer " />
            </div>
          ))}
        </div>
      </div>
      {/* most loved brands */}
      <div>
        <div>
          <h1
            className="lg:text-6xl md:text-4xl text-center py-10
            uppercase select-none"
          >
            most loved brands
          </h1>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-1 gap-y-3 w-10/12 mx-auto pb-20">
          {productsData.mostLovedBrands.map((elm, index) => (
            <img
              key={index}
              src={elm.link}
              alt={elm.name}
              className="hover:shadow-md cursor-pointer"
            />
          ))}
        </div>
      </div>
      {/* most fav brands */}
      <div className="bg-[#FFE9DC]">
        <div>
          <h1
            className="lg:text-6xl md:text-4xl text-center py-10
            uppercase select-none"
          >
            most favourite brands
          </h1>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 w-10/12 mx-auto pb-20">
          {productsData?.mostFavBrands.map((elm, index) => (
            <div className="  hover:shadow-lg h-[96px] bg-white overflow-hidden">
              <img
                key={index}
                src={elm.link}
                alt={elm.name}
                className=" cursor-pointer "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WomensPage;
