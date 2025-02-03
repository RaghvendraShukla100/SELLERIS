import React, { useEffect, useState } from "react";
import axios from "axios";

function BeautySkincarePage() {
  const [productData, setProductData] = useState({});
  const [primePicks, setPrimePicks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/products/beautySkincareHomePage"
        );
        const data = response.data;
        setProductData(data);
        setPrimePicks(data?.discoverPrimePicks["best sellers"]);
      } catch (error) {
        console.error("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromServer();
  }, []);

  const handlePrimePicks = (data) => {
    setPrimePicks(data);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* hero section */}
          <div className="relative">
            <video
              src="https://www.kimirica.shop/cdn/shop/videos/c/vp/90e248e0309041a89b3c5585fc303b6b/90e248e0309041a89b3c5585fc303b6b.HD-720p-1.6Mbps-23566582.mp4?v=0"
              autoPlay
              loop
              controls={false}
              className="w-full lg:h-[500px] object-cover"
            ></video>
            {/* text div */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
              <h1 className="text-5xl text-center px-36 font-serif font-extrabold">
                Embrace the beauty that lies within, let our skincare unlock
                your natural radiance.
              </h1>
            </div>
          </div>

          {/* iconic selection */}
          <div className="w-10/12 mx-auto">
            <div>
              <h1 className="text-center uppercase text-3xl py-10">
                ICONIC SELECTIONS
              </h1>
            </div>
            <div className="grid grid-cols-4 pb-10">
              {productData?.iconicSelection?.map((elm, index) => (
                <div key={index} className="mb-5">
                  <div className="px-10  ">
                    <img
                      src={elm.link}
                      alt={elm.name}
                      className="rounded-full cursor-pointer"
                    />
                  </div>
                  <h2 className="text-center capitalize font-normal mt-2">
                    {elm.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          {/* discover prime picks */}
          <div className="py-20 bg-neutral-100 ">
            <h2 className="text-center uppercase text-xl mb-3 font-medium">
              discover prime picks
            </h2>
            <div className="flex justify-center pb-10">
              {productData?.discoverPrimePicks &&
                Object.entries(productData.discoverPrimePicks).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="mx-2 uppercase text-3xl font-semibold cursor-pointer"
                      onClick={() => handlePrimePicks(value)}
                    >
                      {key}
                    </div>
                  )
                )}
            </div>
            <div className="gap-1 w-10/12 mx-auto my-5 grid grid-cols-4">
              {primePicks.map((elm, index) => (
                <div
                  key={index}
                  className=" hover:cursor-pointer "
                  onMouseOver={() => setHoveredIndex(index)}
                  onMouseOut={() => setHoveredIndex(null)}
                >
                  <img
                    src={
                      hoveredIndex === index
                        ? elm.secondaryImage
                        : elm.primaryImage
                    }
                    alt={elm.name}
                  />
                  <span
                    className="uppercase  block 
                 text-gray-700 font-medium text-center"
                  >
                    {elm.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* the art of gifting */}
          <div className=" pt-10 pb-20">
            <div className="">
              <h3 className="text-center uppercase text-xl py-1">experience</h3>
              <h2 className="text-center uppercase text-3xl py-1 font-semibold pb-10">
                the art of gifting
              </h2>
            </div>
            <div className=" w-11/12 grid gap-2  grid-cols-12 mx-auto ">
              <div className="col-span-8">
                <video
                  src={productData?.experienceTheArtOfGifting?.videolink}
                  autoPlay
                  loop
                  controls={false}
                  className="w-full h-full object-cover"
                ></video>
              </div>
              <div className="col-span-4">
                <div className="grid grid-rows-2 gap-1">
                  {productData?.experienceTheArtOfGifting?.images.map(
                    (elm, index) => (
                      <div key={index} className=" h-full overflow-hidden">
                        <img src={elm} className="w-full h-full object-cover" />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* SHOP BY CATEGORY*/}
          <div className="pb-20 pt-10 bg-neutral-100">
            <div className="py-10">
              <h1 className="text-center text-3xl">SHOP BY CATEGORY</h1>
            </div>
            <div className="w-10/12 mx-auto grid grid-cols-4 gap-2">
              {productData?.shopByCatigory?.map((elm, index) => (
                <div>
                  <img src={elm.link} className="cursor-pointer" />
                  <span
                    className="uppercase font-semibold block text-xl
                 text-gray-600 text-center"
                  >
                    {elm.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* advertising section */}
          <div className="w-11/12 mx-auto gap-x-3 grid py-20 grid-cols-2">
            {productData?.beautiAdvertisement?.map((elm, index) => (
              <React.Fragment key={index}>
                {/* video */}
                <div>
                  <video
                    src={elm.videolink}
                    autoPlay
                    loop
                    controls={false}
                  ></video>
                </div>
                {/* details */}
                <div className="">
                  <div className="mt-20  w-4/5 my-auto mx-auto">
                    <h2 className="uppercase text-xl  my-1">{elm.heading}</h2>
                    <h3 className="uppercase font-semibold text-2xl my-1">
                      {elm.name}
                    </h3>
                    <p className="my-4">{elm.text}</p>
                    <button
                      className="px-10 py-2 border border-black
                      hover:bg-black hover:text-white uppercase "
                    >
                      {elm.buttonName}
                    </button>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default BeautySkincarePage;
