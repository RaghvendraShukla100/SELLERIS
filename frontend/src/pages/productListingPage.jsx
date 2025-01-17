import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dommyData from "./dommyProductListData";

function ProductListingPage() {
  const navigate = useNavigate();
  const catData = useSelector((state) => state.productListing.value);

  return (
    <div>
      <div className="py-2">
        {/* page path section */}
        <h1 className="px-5 py-1 capitalize font-normal">
          home / clothing / {`${catData} `}
        </h1>
        {/* search query section */}
        <h1 className="px-5 py-1 capitalize font-normal">
          {`${catData} `} - 15941 items
        </h1>
      </div>
      <div className="grid grid-cols-12">
        {/* filter section */}
        <aside className="col-span-2 mt-[2px] h-fit">
          <div className="flex justify-between min-h-20">
            <h1 className="uppercase font-bold c py-5 px-4 text-gray-800">
              Filters
            </h1>
            <h1 className="uppercase text-red-500 font-semibold  px-2 py-5 ">
              clearall
            </h1>
          </div>
          <div className="border py-5 px-4">
            <h1 className="uppercase font-semibold text-gray-800">
              categories
            </h1>
            <div>
              {dommyData?.categories?.map((elm) => (
                <div key={elm}>
                  <input type="checkbox" id={elm} name={elm} value={elm} />
                  <label htmlFor={elm} className="capitalize">
                    {" "}
                    {elm}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-y-0 py-5 px-4">
            <h1 className="uppercase font-semibold text-gray-800">brand </h1>
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
          <div className="border py-5 px-4">
            <h1 className="uppercase font-semibold text-gray-800">price </h1>
            <div>
              <input type="range" name="price" id="price" />
            </div>
          </div>
          <div className="border border-y-0 py-5 px-4">
            <h1 className="uppercase font-semibold text-gray-800">color </h1>
            <div>
              {dommyData?.color?.map((elm) => (
                <div key={elm}>
                  <input type="checkbox" id={elm} name={elm} value={elm} />
                  <label htmlFor={elm} className="capitalize">
                    {" "}
                    {elm}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="border py-5 px-4">
            <h1 className="uppercase font-semibold text-gray-800">discount </h1>
            <div>
              {dommyData?.discount?.map((elm) => (
                <div key={elm}>
                  <input type="radio" id={elm} name="discount" value={elm} />
                  <label htmlFor={elm} className="capitalize">
                    {" "}
                    {elm}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <section className="col-span-10   ">
          {/* advance filter section */}
          <div className=" min-h-20 uppercase flex justify-between p-5">
            <div>super filter options will available here</div>

            <div className="border p-2 hover:shadow-md ">
              short by :
              <select className="font-semibold capitalize hover:w-full focus:outline-none">
                <option value="recomendation px-2">recomendation</option>
                <option value="new">what's new</option>
                <option value="popularity" className="bg-red-600 py-5">
                  popularity
                </option>
                <option value="discount">better discount</option>
                <option value="high to low">price : high to low</option>
                <option value="low to high">price : low to high</option>
                <option value="customer rating">customer rating</option>
              </select>
            </div>
          </div>
          {/* product listing section */}
          <div className="p-5 border border-x-0 h-screen ">product listing</div>
        </section>
      </div>
    </div>
  );
}

export default ProductListingPage;
