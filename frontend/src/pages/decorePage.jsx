import React, { useEffect, useState } from "react";
import axios from "axios";
function DecorePage() {
  const [decoreHomePageData, setDecoreHomePageData] = useState([]);

  const decoreHomePageApiCall = async () => {
    await axios
      .get("http://localhost:3000/api/products/DecoreHomePage")
      .then((response) => setDecoreHomePageData(response.data))
      .catch((error) => console.log("ERROR FROM DECORE HOME  PAGE : ", error));
  };
  decoreHomePageData.length === 0 && decoreHomePageApiCall();
  console.log(decoreHomePageData);
  return (
    <section>
      {/* all decore banner */}
      <div className="w-11/12 mx-auto my-5 ">
        <img
          src={decoreHomePageData.decoreHeading?.decoreImage}
          alt={decoreHomePageData.decoreHeading?.decoreName}
        />
      </div>
      {/* category section  */}
      <div className=" w-11/12 mx-auto   grid  grid-cols-12">
        <div className=" col-span-9">
          <div className="">
            <h3
              className="text-center font-bold text-2xl
            py-10 
            text-gray-900"
            >
              NICE TO SEE YOU, COME ON IN!
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {decoreHomePageData.decoreCategoryWise?.map((elm) => (
              <div className="  overflow-hidden rounded-sm  ">
                <img
                  key={elm.index}
                  src={elm.image}
                  alt={elm.name}
                  className=" hover:scale-105 cursor-pointer  transition-all duration-[500ms]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 m-2 col-span-3">links</div>
      </div>
      {/* inspiration section */}
      <div>
        <div>
          <img src={decoreHomePageData.inspiration?.bannerImage} />
        </div>
        <div className="bg-[#EFEDEE] pb-20 ">
          <div className="w-11/12 grid gap-2 grid-cols-3  mx-auto">
            {decoreHomePageData?.inspiration?.inspirationData?.map((elm) => (
              <div className="overflow-hidden">
                <img
                  src={elm.image}
                  alt={elm.name}
                  className=" hover:scale-105 cursor-pointer  transition-all duration-[500ms]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* featured brand section */}
      <div className="mx-auto w-11/12 my-10">
        <img src={decoreHomePageData?.featuredBrandsHeading} />

        <div className="grid grid-cols-5">
          {decoreHomePageData?.featuredBrands?.map((elm) => (
            <div className="overflow-hidden">
              <img
                src={elm.image}
                alt={elm.name}
                className=" hover:scale-105 cursor-pointer  transition-all duration-[500ms]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DecorePage;
