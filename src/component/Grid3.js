import React from "react";
import grid3 from "../assets/grid3.webp";
import home from "../assets/grid/home.png";
import flag from "../assets/grid/flag.png";
import plane from "../assets/grid/plane.png";
import tick from "../assets/grid/tick.png";
import pad from "../assets/grid/pad.png";
import calander from "../assets/grid/calendar.png";
import purple from "../assets/grid/purple.png";
import { LuArrowRight } from "react-icons/lu";
import GridItem from "./GridItem"

const Grid3 = () => {
  return (
    <div className="flex  gap-3 ">
      {/* Left Column */}
      <div className="w-[450px] h-[600px] bg-black/5 rounded-lg pt-[50px] pl-[35px] border-[1px]">
        <img
          src={home}
          alt="welcome"
          height={20}
          width={20}
          className="object-contain overflow-hidden rounded-lg"
        />
        <h3 className="font-bold text-lg pt-4 text-left">Company wiki</h3>
        <button
          className="rounded-lg font-[Segoe UI] font-medium w-60 h-8 text-sky-400 pt-4 text-sm flex"
        >
          Get templates
          <LuArrowRight className="h-4 w-7" />
        </button>
        <img
          src={grid3}
          alt="welcome"
          height={600}
          width={400}
          className="object-contain mt-[140px] ml-[12px] overflow-hidden rounded-lg"
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-row gap-3">
        {/* First Row */}
        <div className="flex flex-col gap-3">

        <GridItem imgSrc={flag} title="Product Roadmap" />
        <GridItem imgSrc={pad} title="Meeting Notes" />
        <GridItem imgSrc={calander} title="Editorial Calendar" />
        </div>

        {/* Second Row */}
        <div className="flex flex-col gap-3">
          
        <GridItem imgSrc={tick} title="Editorial Calendar" />
        <GridItem imgSrc={plane} title="Vacation Planner" />
        <GridItem imgSrc={purple} title="Habit Tracker" />
        </div>
      </div>
    </div>

  )};
export default Grid3;