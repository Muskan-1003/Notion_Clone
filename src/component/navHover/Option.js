import React from 'react'

function Option(props) {
  return (
    <div className="flex items-center">
        <div className="">
          <img src={props.image} height={"25px"} width={"25px"}></img>
        </div>
        <div className="flex-row items-baseline	justify-start ml-3	">
          <div className="text-left font-[Segoe UI] font-medium	text-sm	">{props.header}</div>
          <div className="text-left font-[Segoe UI] font-normal text-gray-400">{props.text}</div>
        </div>
      </div>
  )
}

export default Option