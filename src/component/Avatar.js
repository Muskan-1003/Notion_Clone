import React from 'react'
import { LuArrowRight } from "react-icons/lu";
import avatar from "../assets/avatars.png"

const Grid = () => {
  return (
    <div>
      
   
      <h1 className="text-5xl font-bold   ">
      Join a global movement.<br>
      </br> Unleash your creativity.
      </h1>
      <h3 className="text-lg text-gray-700  font-medium mt-4">
      Our vibrant community produces content, teaches courses, and leads events all over <br></br>the world.
      </h3>
      <div className="flex justify-center items-center">
        <button className="bg-white  rounded-lg p-2  font-[Segoe UI] font-medium
        w-60 h-8 text-blue-600 text-lg flex items-center justify-center hover:underline">
            Learn more
          <LuArrowRight className="h-4 w-7" />
        </button>
      </div>
      <img
            src={avatar}
            alt="avatar"
            height={1000}
            width={1000}/>

    </div>
    
 
  )
}

export default Grid
