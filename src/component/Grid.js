import React from "react";
import welcome from "../assets/welcome-to-notion.webp";
import discord from "../assets/discord.webp";
import Swipe from 'swiper';

const Grid = () => {
  return (
    <div>
      <div className="  flex flex-row gap-[20px] ">
        <div
          className=" bg-black/5 w-[327px] h-[127px] text-left flex 
    items-start  flex-col  justify-center pl-[20px] rounded-lg"
        >
          <h1 className="text-6xl font-bold  text-sky-500 ">1M+</h1>
          <h6 className="font-medium">community members</h6>
        </div>
        <div
          className=" bg-black/5 w-[327px] h-[127px] 
    text-left flex items-start  flex-col  justify-center pl-[20px] rounded-lg"
        >
          <h1 className="text-6xl font-bold  text-sky-500 ">150+</h1>
          <h6 className="font-medium">community groups</h6>
        </div>
        <div
          className=" bg-black/5 w-[327px] 
    h-[127px] text-left flex items-start  flex-col  justify-center pl-[20px] rounded-lg"
        >
          <h1 className="text-6xl font-bold  text-sky-500 ">50+</h1>
          <h6 className="font-medium">countries represented</h6>
        </div>
      </div>
      <div className="flex  gap-5">
        <div className=" w-[500px] h-[450px]  bg-black/5 mt-[25px] rounded-lg pt-[50px] pl-[35px]">
          <h3 className="font-bold text-left  text-xl ">An always-on support network</h3>
          <p className="text-left">
            Swap setups and share tips in over 149 online<br></br> communities.
          </p>
          <img
            src={discord}
            alt="welcome"
            height={300}
            width={300}
            className="object-fill mt-8"
          />
        </div>
        <div className=" w-[500px] h-[450px]  bg-black/5 mt-[25px] rounded-lg pt-[50px] pl-[35px] border-[1px]">
          <h3 className="font-bold text-xl text-left ">Choose your language</h3>
          <p className="text-left">
          Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to <br>
          </br>come!
          </p>
          <img
            src={welcome}
            alt="welcome"
            height={300}
            width={500}
            className="object-contain mt-16 overflow-hidden rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
