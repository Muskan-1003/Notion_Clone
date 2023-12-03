import React, { useState } from "react";
import logo from "../assets/logo.svg";
import downward from "../assets/downward.svg";
import { useScrollTop } from "../hooks/UseScrollTop";
import Resources from "./navHover/Resources";
import Download from "./navHover/Download";
import Solutions from "./navHover/Solutions";
import Product from "./navHover/Product";

const Navbar = () => {
  const scrolled = useScrollTop();
  const [isHovering, setisHovering] = useState("");

  function handleMouseEnter() {
    setisHovering("Resources");
  }
  function handleMouseLeave() {
    setisHovering("");
  }
  function handleMouseEnterD() {
    setisHovering("Download");
  }
  function handleMouseLeaveD() {
    setisHovering("");
  }
  function handleMouseEnterS() {
    setisHovering("Solution");
  }
  function handleMouseLeaveS() {
    setisHovering("");
  }
  function handleMouseEnterP() {
    setisHovering("product");
  }
  function handleMouseLeaveP() {
    setisHovering("");
  }

  return (
    <div
      className={`flex z-50 bg-background bg-white fixed top-0 h-[60px] items-center w-full 
          ${scrolled ? " border-b shadow-sm" : ""}`}
    >
      <nav className="flex justify-between w-screen  gap-x-2">
        <div>{isHovering == "product" ? <Product /> : <div></div>}</div>
        <div>{isHovering == "Resources" ? <Resources /> : <div></div>}</div>

        <div>{isHovering == "Download" ? <Download /> : <div></div>}</div>

        <div>{isHovering == "Solution" ? <Solutions /> : <div></div>}</div>

        <div className="flex items-center absolute mt-[-12px] ">
          <ul className="flex items-center ">
            <li>
              <img src={logo} height={24} width={60} alt="Logo" />
            </li>
            <li className="font-[Segoe UI] text-black text-xl font-medium">
              Notion
            </li>
          </ul>
          <ul className="flex gap-8 ml-5 font-normal">
            <li
              className="font-[Segoe UI] text-black flex items-baseline gap-1
               hover:bg-stone-100 hover:rounded-md hover:bg-[50px]"
              onMouseEnter={handleMouseEnterP}
              onMouseLeave={handleMouseLeaveP}
            >
              Product
              <img src={downward} alt="Downward Arrow" />
            </li>
            <li
              className="font-[Segoe UI] text-black flex items-baseline gap-1"
              onMouseEnter={handleMouseEnterD}
              onMouseLeave={handleMouseLeaveD}
            >
              Download
              <img src={downward} alt="Downward Arrow" />
            </li>
            <li
              className="font-[Segoe UI] text-black flex items-baseline gap-1"
              onMouseEnter={handleMouseEnterS}
              onMouseLeave={handleMouseLeaveS}
            >
              Solutions<img src={downward}></img>
            </li>
            <li
              className="font-[Segoe UI] text-black flex items-baseline gap-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Resources<img src={downward}></img>
            </li>
            <li
              className="font-[Segoe UI] text-black flex items-baseline gap-1
             hover:bg-stone-100 hover:rounded-md hover:bg-[50px]"

            >
              Pricing
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <ul className="flex items-center">
            <li className="border-r-2 pr-5  hover:bg-stone-100 hover:rounded-md hover:pl-6">
              Request a demo
            </li>
            <li className="pr-4 pl-4 hover:bg-stone-100 hover:rounded-md hover:pl-4">
              Log in
            </li>
          </ul>
          <div className="flex justify-center items-center ml-5">
            <button
              className="bg-black rounded-lg p-2 shadow font-sans font-semibold w-70 h-8
               text-white flex items-center justify-center hover:bg-gray-800"
            >
              Get Notion free
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
