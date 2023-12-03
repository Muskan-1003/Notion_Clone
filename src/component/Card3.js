import React from "react";
import engineering from "../assets/card3/engineering-v2.png";
import design from "../assets/card3/design-v2.png";
import products from "../assets/card3/productsvg.png";
import marketing from "../assets/card3/marketingsvg.png";
import operations from "../assets/card3/operationssvg.png";
import hr from "../assets/card3/hr-v2.png";
//image
import engineeringImg from "../assets/card3/engineering.png";
import designImg from "../assets/card3/design.png";
import productImg from "../assets/card3/product.png";
import marketingImg from "../assets/card3/marketing .png";
import operationsImg from "../assets/card3/operations.png";
import hrImg from "../assets/card3/hr.png";

const Card3 = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold ">Every team, side-by-side</h1>

      <div className="flex flex-row gap-4 ">
        <button className=" bg-white drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]">
          <img
            src={engineering}
            alt="engineering"
            height={100}
            width={100}
            className="object-contain pl-[30px] "
          />
          <h1>Engineering</h1>
        </button>
        <button className=" bg-white drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]">
          <img
            src={design}
            alt="design"
            height={100}
            width={100}
            className="object-contain  pl-[30px]"
          />
          <h1>Design</h1>
        </button>
        <button className=" bg-white drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]">
          <img
            src={products}
            alt="products"
            height={100}
            width={100}
            className="object-contain  pl-[30px]"
          />
        </button>
        <button className=" bg-white drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]">
          <img
            src={marketing}
            alt="marketing"
            height={100}
            width={100}
            className="object-contain  pl-[30px]"
          />
          <h1>Product</h1>
        </button>
        <button className=" bg-white drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]">
          <img
            src={operations}
            alt="perationsa"
            height={100}
            width={100}
            className="object-contain  pl-[30px]"
          />
           <h1>Operation</h1>
        </button>
        <button className=" bg-white drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]">
          <img
            src={hr}
            alt="hr"
            height={100}
            width={100}
            className="object-contain  pl-[30px]"
          />
           <h1>hr</h1>
        </button>
      </div>
    <div>
      
    </div>
    </div>
  );
};

export default Card3;
