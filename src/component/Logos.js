import React from 'react'
import amazon from '../assets/logo/amazon.png'; 
import figmaLogo from '../assets/logo/figma-logo.png'; 
import pixar from '../assets/logo/pixar.png'; 
import doordash from '../assets/logo/doordash.png'; 
import nike from '../assets/logo/nike.png'; 
import pinterest from '../assets/logo/pinterest.png'; 
import ge from '../assets/logo/General_Electric_logo.svg__1_.png'; 
import uber from '../assets/logo/uber.png'; 
import plaid from '../assets/logo/plaid.png'; 
import toyota  from '../assets/logo/toyota.png'; 
import snowflake from '../assets/logo/snowflake.png'; 
import headspace from '../assets/logo/headspace__1_.png'; 
import anglelist from '../assets/logo/angel-list.png'; 
import robinhood from '../assets/logo/robinhood_logo.png'; 




const Logos = () => {
  return (
    <div className=' '> 
     <div  className='flex justify-center items-center flex-wrap w-100% max-w-screen-md gap-5  mx-auto  '>
     <img src={figmaLogo} alt="figma"  height={100} width={100} className='object-contain'/>
     <img src={pixar} alt="pixar" height={100} width={100} className='object-contain'/>
     <img src={doordash} alt="doordash"  height={130} width={130} className=""/>
     <img src={nike} alt="nike"  height={80} width={80} className='object-contain'/>
     <img src={amazon} alt="amazon"  height={100} width={100} className='object-contain'/>
     <img src={pinterest} alt="pinterest"  height={100} width={100} className='object-contain'/> 
     <img src={ge} alt="ge"  height={50} width={50} className='object-contain'/>
     <img src={uber} alt="uber"  height={100} width={100} className='object-contain'/>
     <img src={plaid } alt="plaid "   height={100} width={100}className='object-contain'/>
     <img src={toyota } alt="toyota "  height={100} width={100} className='object-contain'/>
     <img src={snowflake} alt="snowflake"  height={100} width={100} className='object-contain'/>
     <img src={headspace } alt="headspace "  height={100} width={100} className='object-contain'/>
     <img src={anglelist} alt="anglelist" height={100} width={100}  className='object-contain'/>
     <img src={robinhood } alt="robinhood "  height={100} width={100} className='object-contain'/>
     </div>
    </div>
  )
}

export default Logos
