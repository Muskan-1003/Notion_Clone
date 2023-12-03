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

     
        <div className="flex flex-row ">
          <img
            src={engineering}
            alt="engineering"
            height={100}
            width={100}
            className="object-contain bg-white h-[300px] w-[300px] drop-shadow-2xl border-solid rounded-lg cursor-pointer"
          />
          <img
            src={design}
            alt="design"
            height={100}
            width={100}
            className="object-contain"
          />
          <img
            src={products}
            alt="products"
            height={100}
            width={100}
            className="object-contain"
          />
          <img
            src={marketing}
            alt="marketing"
            height={100}
            width={100}
            className="object-contain"
          />
          <img
            src={operations}
            alt="perationsa"
            height={100}
            width={100}
            className="object-contain"
          />
          <img
            src={hr}
            alt="hr"
            height={100}
            width={100}
            className="object-contain"
          />
        </div>

<div>

        <button className=" bg-white drop-shadow-2xl border-solid rounded-lg h-[100px] w-[100px]">
        <img
            src={engineering}
            alt="engineering"
            height={100}
            width={100}
            className="object-contain bg-white drop-shadow-2xl border-solid rounded-lg cursor-pointer"
          />  
        </button>
        <button className=" bg-white drop-shadow-2xl border-solid rounded-lg h-10 w-[120]">
        <img
            src={design}
            alt="design"
            height={100}
            width={100}
            className="object-contain"
          />
          
        </button>
        <button className=" bg-white drop-shadow-2xl border-solid rounded-lg h-10 w-[120]">
        <img
            src={products}
            alt="products"
            height={100}
            width={100}
            className="object-contain"
          />
        </button>
        <button className=" bg-white drop-shadow-2xl border-solid rounded-lg h-10 w-[120]">
        <img
            src={marketing}
            alt="marketing"
            height={100}
            width={100}
            className="object-contain"
          />
        </button>
        <button className=" bg-white drop-shadow-2xl border-solid rounded-lg h-10 w-[120]">
        <img
            src={operations}
            alt="perationsa"
            height={100}
            width={100}
            className="object-contain"
          />
        </button>
        <button className=" bg-white drop-shadow-2xl border-solid rounded-lg h-10 w-[120]">
        <img
            src={hr}
            alt="hr"
            height={100}
            width={100}
            className="object-contain"
          />
       </button>
        </div>

       
      
    </div>
  );
};

export default Card3;
