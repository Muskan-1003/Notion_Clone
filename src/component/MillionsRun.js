import React from 'react'
import { LuArrowRight } from "react-icons/lu";


const MillionsRun = () => {
  return (
    <div className='mt-[80px]'>
     
      <h1 className="text-4xl font-bold ">
      Millions run on Notion every day
      </h1>
      <h3 className="text-lg text-gray-700  font-medium mt-4">
      Powering the world’s best teams, from next-generation startups <br></br>to established enterprises.
      </h3>
      <div className="flex justify-center items-center">
        <button className="bg-white  rounded-lg p-2  font-[Segoe UI] font-semibold 
        w-60 h-8 text-blue-500 text-lg flex items-center justify-center hover:underline">
            Read customer stories
          <LuArrowRight className="h-4 w-7" />
        </button>
      </div>
    
    </div>
  )
}

export default MillionsRun

