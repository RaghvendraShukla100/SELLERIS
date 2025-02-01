import React from "react";

function MultipurposComponent({ heading, products }) {
  console.log(products);
  return (
    <div className="shadow-lg border bg-white  border-gray-200 w-[330px]  z-50 relative mb-5">
      <h1 className="py-3 px-2 capitalize font-bold text-xl">{heading}</h1>
      <div className="h-[300px] grid grid-cols-2 gap-2 p-2">
        <div className="w-full h-full overflow-hidden">
          <img
            src={products[0].image}
            className="object-cover h-4/5 rounded-sm"
          />
          <p className="pl-1">{products[0].name}</p>
        </div>
        <div className="w-full h-full overflow-hidden">
          <img
            src={products[1].image}
            className="object-cover h-4/5 rounded-sm"
          />
          <p className="pl-1">{products[1].name}</p>
        </div>
        <div className="w-full h-full overflow-hidden">
          <img
            src={products[2].image}
            className="object-cover h-4/5 rounded-sm"
          />
          <p className="pl-1">{products[2].name}</p>
        </div>
        <div className="w-full h-full overflow-hidden">
          <img
            src={products[3].image}
            className="object-cover h-4/5 rounded-sm"
          />
          <p className="pl-1">{products[3].name}</p>
        </div>
      </div>
      <div className="pb-3 px-2 text-blue-700">see all</div>
    </div>
  );
}

export default MultipurposComponent;
