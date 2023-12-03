import React from "react";
import wiki from "../../assets/open-book.png";
import project from "../../assets/target.png";
import docs from "../../assets/google-docs.png";
import ai from "../../assets/twinkel.png"
import Option from "./Option";

function Product() {
  return (
    <div className="w-[481px] h-[199px]  flex ml-[124px] rounded-sm	shadow bg-white absolute top-12">
      <div className="border-r-[1px] pr-6"> 
      <Option image={wiki} header="Wiki" text="Centralize your knowledge"></Option>
      <Option image={project} header="Projects" text="For every team or size"></Option>
      <Option image={docs} header="Docs" text="Simple & powerful"></Option>
      <Option image={ai} header="Notion AI" text="Integrated AI assistant"></Option></div>
     
      <div> 
        <div className="flex-row items-baseline	justify-start ml-3	">
          <div className="text-left font-[Segoe UI] font-medium	text-m	">Template gallery</div>
          <div className="text-left font-[Segoe UI] font-normal text-gray-400">Setups to get you started</div>
        </div>
        <div className="flex-row items-baseline	justify-start ml-3	">
          <div className="text-left font-[Segoe UI] font-medium	text-m	">Customer stories</div>
          <div className="text-left font-[Segoe UI] font-normal text-gray-400">See hoe teams use Notion </div>
        </div>
        <div className="flex-row items-baseline	justify-start ml-3	">
          <div className="text-left font-[Segoe UI] font-medium	text-m	">Connections</div>
          <div className="text-left font-[Segoe UI] font-normal text-gray-400">Connect your tools to Notion</div>
        </div>
      </div>
     

      
    </div>
  );
}

export default Product;