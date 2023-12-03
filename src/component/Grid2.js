import React from 'react'
import point from "../assets/point.avif"
import { LuArrowRight } from "react-icons/lu";

const Grid2 = () => {
  return (
    <div>
    <div className='flex '>
      
   <div className='ml-[200px]'>
      <h1 className="text-4xl font-bold font-[inter-var (woff2)]  ">
      Endless ways to use it.
      </h1>
      
      <div className="flex justify-center items-center">
        <button className="bg-white  rounded-lg p-2  font-[Segoe UI] font-medium
        w-60 h-8 text-blue-600 text-sm flex items-center justify-center hover:underline">
            Browse all templates
          <LuArrowRight className="h-4 w-7" />
        </button>
      </div>

   </div>
      <img
            src={point}
            alt="avatar"
            height={200}
            width={200}
            className='mb-[-90px]'/>

    </div>


    <div>
        
    </div>
    </div>
  )
}

export default Grid2
