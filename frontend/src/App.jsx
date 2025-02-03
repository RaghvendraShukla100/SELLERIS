import React, { useEffect, useState } from "react";
import Slider1 from "./components/Slider1";
import RelatedToYourViewedItem from "./components/RelatedToYourViewedItem";
import MultipurposComponent from "./components/multipurposComponent";
import axios from "axios";

function App() {
  const [homePageData, setHomePageData] = useState();

  useEffect(() => {
    const fetchMpcDataFromServer = async () => {
      axios
        .get("http://localhost:3000/api/products/homePageData")
        .then((response) => setHomePageData(response.data))
        .catch((error) => console.log(error));
    };
    fetchMpcDataFromServer();
  }, []);
  const customSettings = {
    dots: false,
  };
  console.log(
    homePageData?.multipurposeComponentTypeOne.map((elm) => console.log(elm))
  );
  return (
    <>
      <div className=" z-0">
        <Slider1
          imagesArray={homePageData?.mainSlider}
          customSettings={customSettings}
        />
      </div>
      multipurpose component
      <div className="flex flex-wrap gap-2 pl-1">
        {homePageData?.multipurposeComponentTypeOne?.map((elm, index) => (
          <MultipurposComponent
            key={index}
            heading={elm.heading}
            products={elm.products}
          />
        ))}
        {/* Related To Your Viewed Item component */}
        {/* <RelatedToYourViewedItem /> */}
      </div>
    </>
  );
}

export default App;
