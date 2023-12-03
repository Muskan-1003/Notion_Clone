import React from "react";
import parade from "../assets/notion-parade.png";
import { LuArrowRight } from "react-icons/lu";

const Parade = () => {
  return (
    <div className="mt-[60px]">
      <h1 className="text-5xl font-bold ">Get started for free</h1>
      <h3 className="text-sm text-gray-700 font-medium mt-4">
        Play around with it first. Pay and add your team later.
      </h3>
      <div className="flex ml-[80px] mt-5">
        <div className="">
          <button
            className="bg-black rounded-lg p-2 shadow font-sans font-semibold
             w-40 h-8 text-white flex items-center justify-center  hover:bg-gray-800"
          >
            Get Notion free
            <LuArrowRight className="h-4 w-7" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-white rounded-lg p-2 font-[Segoe UI] font-medium
             text-blue-500 text-sm flex items-center justify-center hover:underline"
          >
            Request a demo
            <LuArrowRight className="h-4 w-7" />
          </button>
        </div>
      </div>

      <img
        src={parade}
        alt="welcome"
        height={300}
        width={500}
        className="object-contain mb-[200px] overflow-hidden rounded-lg"
      />
    </div>
  );
};

export default Parade;
