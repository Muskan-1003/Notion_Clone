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
import  { useState } from "react";


const Card3 = () => {

const [click, setClick]=useState("engineering");


function clickHandlerE(){
  setClick("engineering");
}

function clickHandlerD(){
  setClick("design");
}
function clickHandlerH(){
  setClick("hr");
}
function clickHandlerO(){
  setClick("operation");
}
function clickHandlerM(){
  setClick("marketing");
}
function clickHandlerP(){
  setClick("product");
}




  return (
    <div>
      <h1 className="text-5xl font-bold ">Every team, side-by-side</h1>

      <div className="flex flex-row gap-4 ">
        <button className= {` drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]
         ${click=="engineering"?"":"bg-black/5"}`}
        onClick={clickHandlerE}>
          <img
            src={engineering}
            alt="engineering"
            height={100}
            width={100}
            className="object-contain pl-[30px] "
          />
          <h1>Engineering</h1>
        </button>
        <button className= {` drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]
         ${click=="design"?"":"bg-black/5"}`} 
         onClick={clickHandlerD}>
          <img
            src={design}
            alt="design"
            height={100}
            width={100}
            className="object-contain  pl-[30px]"
          />
          <h1>Design</h1>
        </button>
        <button className= {` drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]
         ${click=="product"?"":"bg-black/5"}`}
         onClick={clickHandlerP}>
          <img
            src={products}
            alt="products"
            height={100}
            width={100}
            className="object-contain  pl-[30px]"
          />
        </button>
        <button className= {` drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]
         ${click=="marketing"?"":"bg-black/5"}`}
         onClick={clickHandlerM}>
          <img
            src={marketing}
            alt="marketing"
            height={100}
            width={100}
            className="object-contain  pl-[30px]"
          />
          <h1>Product</h1>
        </button>
        <button className= {` drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]
         ${click=="operation"?"":"bg-black/5"}`} onClick={clickHandlerO}>
          <img
            src={operations}
            alt="perationsa"
            height={100}
            width={100}
            className="object-contain  pl-[30px]"
          />
           <h1>Operation</h1>
        </button>
        <button className= {` drop-shadow-md border-solid rounded-lg h-[150px] w-[150px]
         ${click=="hr"?"":"bg-black/5"}`}
         onClick={clickHandlerH}>
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
    <div className=" mt-2 w-[1023px] h-[639px] border-[2px] rounded-lg">
      {click=="engineering"?<img src={engineeringImg}></img>:<div></div>}
{click=="design"?<img src={designImg}></img>:<div></div>}
{click=="product"?<img src={productImg}></img>:<div></div>}
{click=="marketing"?<img src={marketingImg}></img>:<div></div>}
{click=="operation"?<img src={operationsImg}></img>:<div></div>}
{click=="hr"?<img src={hrImg}></img>:<div></div>}
</div>

    </div>
    </div>
  );
};

export default Card3;
