import React, { useState } from "react";
import topPeak from "../assets/topPeek.avif";
import calander from "../assets/buildingblock/calendar.png";
import gallery from "../assets/buildingblock/gallery.png";
import kanban from "../assets/buildingblock/kanban.png";
import list from "../assets/buildingblock/list.png";
import table from "../assets/buildingblock/table.png";
import timeline from "../assets/buildingblock/timeline.png";
import forward from "../assets/forward.svg";
import { useEffect } from "react";

const PowerfulBB = () => {
  const [imgno, setImgno] = useState(1);

  return (
    <div>
      <div className="flex mr-[200px]">
        <img src={topPeak} alt="avatar" height={200} width={200} className="" />
        <h1 className="text-4xl font-bold mt-8 ">Powerful building blocks</h1>
      </div>
      <div className=" mt-[-15px] w-fit h-fit bg-black/5 border-[2px] rounded-lg p-[40px]">
        <div>
          <img
            src={forward}
            alt="logo"
            height={20}
            width={20}
            className="object-contain overflow-hidden rounded-lg"
          />
          <h3 className="font-bold text-lg pt-4 text-left">
            Visualize, filter & sort any way you want
          </h3>
          <p className="text-sm text-left">
            Show only tasks assigned to you, or items marked as urgent. Break
            down <br></br>any project in the way that’s most helpful to you.
          </p>

          <div className=" mt-10 bg-black/5 rounded-lg">
            {imgno == 1 ? (
              <img
                src={kanban}
                className="object-contain  w-[760px]   rounded-lg "
              ></img>
            ) : (
              <div></div>
            )}
            {imgno == 2 ? (
              <img
                src={table}
                className="object-contain  w-[760px]   rounded-lg"
              ></img>
            ) : (
              <div></div>
            )}
            {imgno == 3 ? (
              <img
                src={timeline}
                className="object-contain  w-[760px]   rounded-lg"
              ></img>
            ) : (
              <div></div>
            )}
            {imgno == 4 ? (
              <img
                src={calander}
                className="object-contain  w-[760px]   rounded-lg"
              ></img>
            ) : (
              <div></div>
            )}
            {imgno == 5 ? (
              <img
                src={gallery}
                className="object-contain  w-[760px]   rounded-lg"
              ></img>
            ) : (
              <div></div>
            )}
            {imgno == 6 ? (
              <img
                src={list}
                className="object-contain  w-[760px]   rounded-lg"
              ></img>
            ) : (
              <div></div>
            )}
          </div>
          <div className="flex gap-4 justify-center mt-3">
            <button
              className={`border-[2px] border-[#ddd9d4]	 p-1 rounded-lg 
          ${imgno == 1 ? "bg-black/10" : "hover:bg-black/5"}`}
              onClick={() => setImgno(1)}
            >
              Board
            </button>
            <button
              className={`border-[2px] border-[#ddd9d4]	 p-1 rounded-lg 
          ${imgno == 2 ? "bg-black/10" : "hover:bg-black/5"}`}
              onClick={() => setImgno(2)}
            >
              Table
            </button>
            <button
              className={`border-[2px] border-[#ddd9d4]	 p-1 rounded-lg 
          ${imgno == 3 ? "bg-black/10" : "hover:bg-black/5"}`}
              onClick={() => setImgno(3)}
            >
              Calander
            </button>
            <button
              className={`border-[2px] border-[#ddd9d4]	 p-1 rounded-lg 
          ${imgno == 4 ? "bg-black/10" : "hover:bg-black/5"}`}
              onClick={() => setImgno(4)}
            >
              Timeline
            </button>
            <button
              className={`border-[2px] border-[#ddd9d4]	 p-1 rounded-lg 
          ${imgno == 5 ? "bg-black/10" : "hover:bg-black/5"}`}
              onClick={() => setImgno(5)}
            >
              Gallery
            </button>
            <button
              className={`border-[2px] border-[#ddd9d4]	 p-1 rounded-lg 
          ${imgno == 6 ? "bg-black/10" : "hover:bg-black/5"}`}
              onClick={() => setImgno(6)}
            >
              List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerfulBB;
