import React from 'react';
import Option from './Option';
import enterprise from '../../assets/team-size-enterprise.png';
import smallBussiness from "../../assets/team-size-small-business.png";
import personal from "../../assets/team-size-personal.png"

function Solutions() {
  return (
    <div className='flex w-fit rounded-r-md shadow bg-white absolute left-[110px] top-12'>
        <div className='flex-row border-r-[1px] pr-10 pl-2'>
            <div className='text-left font-[Segoe UI] font-normal text-gray-400 text-[11px] '>BY TEAM SIZE</div>
            <div className='flex-row'>
                <Option image={enterprise} header="Enterprise" text="Advanced features for your org"></Option>
                <Option image={smallBussiness} header="Small Business" text="Run your team on one tool"></Option>
                <Option image={personal} header="Personal" text="Free for individuals"></Option>

            </div>
        </div>
        <div className='flex-row pl-2 pr-6'>
        <div className='text-left font-[Segoe UI] font-normal text-gray-400 text-[11px] '>BY TEAM FUNCTION</div>
        <div className="text-left font-[Segoe UI] font-normal	text-m  pr-10 mb-1	" >Design</div>
        <div className="text-left font-[Segoe UI] font-normal	text-m  pr-10 mb-1	" >Engineering</div>
        <div className="text-left font-[Segoe UI] font-normal	text-m  pr-10 mb-1	" >Product</div>
        <div className="text-left font-[Segoe UI] font-normal	text-m  pr-10 	" >Managers</div>
        </div>
        <div>
        <div className='flex-row pl-2 pr-6'>
        <div className='text-left font-[Segoe UI] font-normal text-gray-400 text-[11px] '>NOTION FOR</div>
        <div className="text-left font-[Segoe UI] font-normal	text-m  pr-10 mb-1	" >Startups</div>
        <div className="text-left font-[Segoe UI] font-normal	text-m  pr-10 mb-1	" >Remote works</div>
        <div className="text-left font-[Segoe UI] font-normal	text-m  pr-10 mb-1	" >Education</div>
        <div className="text-left font-[Segoe UI] font-normal	text-m  pr-10 	" >Nonprofits</div>
        </div>
        </div>
    </div>
  )
}

export default Solutions