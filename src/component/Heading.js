import React from "react";
import { LuArrowRight } from "react-icons/lu";

const Heading = () => {
  return (
    <div className=" space-y-4">
      <h1 className="text-6xl font-bold mt-20">
        Write, plan, share.<br></br> With AI at your side.
      </h1>
      <h3 className="text-2xl  font-medium">
        Notion is the connected workspace where better, faster work happens.
      </h3>
      <div className="flex justify-center items-center">
        <button className="bg-black rounded-lg p-2 shadow font-sans font-semibold 
        w-60 h-8 text-white flex items-center justify-center">
          Get Notion free
          <LuArrowRight className="h-4 w-7" />
        </button>
      </div>
    </div>
  );
};

export default Heading;
