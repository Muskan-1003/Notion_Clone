import React, { useState } from "react";
import ai from "../assets/twinkel.png";
import wiki from "../assets/open-book.png";
import project from "../assets/target.png"
import docs from "../assets/google-docs.png"
import askai from "../assets/askai.webp"
import wiki2 from "../assets/wiki2.webp"
import projects2 from "../assets/projects2.webp"
import docs2 from "../assets/docs2.webp"

function Modal(props) {
    const [hover, sethover] = useState("ai")
    const ishoveringA =()=>{
        sethover("ai")
    }
    const ishoveringW =()=>{
        sethover("wiki")
    }
    const ishoveringP =()=>{
        sethover("project")
    }
    const ishoveringD =()=>{
        sethover("docs")
    }
  return (<div className="flex-row items-center justify-center">
    <div className=" flex gap-3">
  <div onMouseEnter={ishoveringA} className={`w-[243px] h-[150px]
   border-[2px] rounded-lg flex-col  
   p-4 ${hover=="ai"?"":"bg-black/5"}`}>
    <div className="flex">
      <div className="bg-[#F0E1F9] rounded-lg w-fit p-[5px] h-fit ">
        <img src={ai} width={33} height={33}></img>
      </div>
      <h1 className="text-left font-[Segoe UI] font-bold text-[30px] ml-2	">
        AI
      </h1>
    </div>
    <p  className={`text-left ${hover=="ai"?"":"mt-7"}`}> Ask litrally anything. Notion will answer</p>
    {hover=="ai"?<p className="font-[Segoe UI] text-left text-[#9D34DA]">Learn more →</p>:<div></div>}
  </div>
  <div  onMouseEnter={ishoveringW} className={`w-[243px] h-[150px] border-[2px] rounded-lg flex-col
    p-4 ${hover=="wiki"?"":"bg-black/5"}`}>
    <div className="flex">
      <div className="bg-[#FCE9E8] rounded-lg w-fit p-[5px] h-fit ">
        <img src={wiki} width={33} height={33}></img>
      </div>
      <h1 className="text-left font-[Segoe UI] font-bold text-[30px] ml-2	">
        Wikis
      </h1>
    </div>
    <p className={`text-left ${hover=="wiki"?"":"mt-7"}`}> Ask litrally anything. Notion will answer</p>
    {hover=="wiki"?<p className="font-[Segoe UI] text-left text-[#EA4E43]">Learn more →</p>:<div></div>}
  </div>
  <div onMouseEnter={ishoveringP} className={`w-[243px] h-[150px] border-[2px] rounded-lg flex-col  p-4 ${hover=="project"?"":"bg-black/5"}`}>
    <div className="flex">
      <div className="bg-[#E2ECF3] rounded-lg w-fit p-[5px] h-fit ">
        <img src={project} width={33} height={33}></img>
      </div>
      <h1 className="text-left font-[Segoe UI] font-bold text-[30px] ml-2	">
       Projects
      </h1>
    </div>
    <p className={`text-left ${hover=="project"?"":"mt-7"}`}> Ask litrally anything. Notion will answer</p>
    {hover=="project"?<p className="font-[Segoe UI] text-left text-[#0A85D1]">Learn more →</p>:<div></div>}
  </div>
  <div onMouseEnter={ishoveringD} className={`w-[243px] h-[150px]  border-[2px]  rounded-lg flex-col  p-4 ${hover=="docs"?"":"bg-black/5"}`}>
    <div className="flex">
      <div className="bg-[#FFF6D6] rounded-lg w-fit p-[5px] h-fit ">
        <img src={docs} width={33} height={33}></img>
      </div>
      <h1 className="text-left font-[Segoe UI] font-bold text-[30px] ml-2	">
        Docs
      </h1>
    </div>
    <p  className={`text-left ${hover=="docs"?"":"mt-7"}`}> Ask litrally anything. Notion will answer</p>
    {hover=="docs"?<p className="font-[Segoe UI] text-left text-[#996600]">Learn more →</p>:<div></div>}
  </div>
  
  </div>
  <div className=" mt-2 w-[1023px] h-[639px] border-[2px] rounded-lg">{hover=="ai"?<img src={askai}></img>:<div></div>}
{hover=="wiki"?<img src={wiki2}></img>:<div></div>}
{hover=="project"?<img src={projects2}></img>:<div></div>}
{hover=="docs"?<img src={docs2}></img>:<div></div>}
</div>

  </div>
    
  );
}

export default Modal;
