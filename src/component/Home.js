import React from 'react'
import Heading from './Heading'
import FirstImg from './FirstImg'
import MillionsRun from './MillionsRun'
import Logos from './Logos'
import MidImg from './MidImg'
import Card3 from './Card3'
import Avatar from './Avatar'
import Grid from './Grid'
import Twitter from './Twitter'
import Grid2 from './Grid2'
import Grid3 from './Grid3'
import Parade from './Parade'
import MidGrid from './MidGrid'
import Modal from './Modal'
import Footer from "./footerC.js/Footer"
import PowerfulBB from './PowerfulBB'


const Home = () => {
  return (
    <div className='min-h-full bg-white flex flex-col'>
        <div className='flex flex-col items-center justify-center text-center gap-y-8 flex-1 px-6 pb-10'>
         
            <Heading />
            <FirstImg/>
           <Modal/>
            <MillionsRun/>
            <Logos/>
            <MidImg/>
            <PowerfulBB/>
            <MidGrid/>
            <Card3/>
            <Avatar/>
            <Grid/>
            <Twitter/>
            <Grid2/>
            <Grid3/>
            <Parade/>
            <Footer/>
            

        </div>
       
    </div>
  )
}

export default Home
