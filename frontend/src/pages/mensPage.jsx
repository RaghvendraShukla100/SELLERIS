import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider1 from "../components/Slider1";

function MensPage() {
  const [pageData, setPageData] = useState();

  useEffect(() => {
    const fetchDataFromServer = async () => {
      axios
        .get("http://localhost:3000/api/products/MensHomePage")
        .then((response) => setPageData(response.data))
        .catch((error) => console.log(error));
    };
    fetchDataFromServer();
  }, []);
  // console.log(pageData);
  return (
    <div>
      {/* category section */}
      <div className="  bg-[#FFE9DC]">
        <h1
          className="text-6xl text-center text-[#F56600] py-10
          uppercase font-bold "
        >
          products by category
        </h1>

        {/* main slider */}
        <div className="  bg-[#FFE9DC]  pb-10">
          <div className="w-10/12 mx-auto">
            <Slider1 imagesArray={pageData?.seasonalSection.slider} />
          </div>
        </div>

        <div className="w-10/12 mx-auto grid grid-cols-6 gap-3 pb-20">
          {pageData?.productsByCategory.map((elm, index) => (
            <img
              key={index}
              src={elm.link}
              className="hover:shadow-md cursor-pointer"
            />
          ))}
        </div>
      </div>
      {/* sesional section */}
      <div className="bg-[#36619D]">
        <div>
          <img src={pageData?.seasonalSection.label} />
        </div>

        <div className="w-10/12 mx-auto">
          <Slider1 imagesArray={pageData?.seasonalSection.slider} />
        </div>

        <div className="grid grid-cols-5 gap-3 w-10/12 mx-auto mt-10 pb-20">
          {pageData?.seasonalSection.data.map((elm, index) => (
            <img
              key={index}
              src={elm.link}
              className="hover:shadow-md cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* forever wears */}

      <div className="bg-[#F2E5DD]">
        <div>
          <img src={pageData?.foreverWears.label} />
        </div>
        <div className="grid grid-cols-6 gap-3 w-10/12 mx-auto pb-20">
          {pageData?.foreverWears.data.map((elm) => (
            <img src={elm.link} alt={elm.name} />
          ))}
        </div>
      </div>

      {/* the premimum edit */}
      <div className="bg-black">
        <div>
          <img src={pageData?.premiumEdit.label} />
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-6 gap-3 pb-20">
          {pageData?.premiumEdit.data.map((elm, index) => (
            <img
              key={index}
              src={elm.link}
              alt={elm.name}
              className="hover:cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* brand in focus */}

      <div className="bg-[#FCF3EC]">
        <div>
          <img src={pageData?.brandsInFocus.label} />
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-5 gap-3 pb-20">
          {pageData?.brandsInFocus.data.map((elm, index) => (
            <img
              key={index}
              src={elm.link}
              alt={elm.name}
              className="hover:cursor-pointer hover:shadow-md"
            />
          ))}
        </div>
      </div>

      {/* cleb section */}
      <div className="bg-[#FCF3EC] ">
        <div>
          <img src={pageData?.celebrityApproved.label} />
        </div>
        <div className="w-10/12 mx-auto  grid grid-cols-6 gap-1 pb-20">
          {pageData?.celebrityApproved.data.map((elm, index) => (
            <img
              src={elm.link}
              alt={elm.name}
              className="hover:cursor-pointer hover:shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MensPage;
