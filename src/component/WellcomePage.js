import React from 'react'

import { ReactTyped } from "react-typed";

function WellcomePage() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full text-center  flex flex-col  h-screen mx-auto justify-center'>
           <p className='text-[#00df9a] font-bold p-2 text-md md:text-xl'>GROWING WITH DATA ANALYTICS</p>
           <h1 className='md:text-5xl sm:text-5xl text-3xl font-bold md:py-4'>Grow with Data.</h1>
           <div className='flex justify-center items-center'>
            <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast,flexible financing for</p>
            <ReactTyped className='md:text-4xl sm:text-3xl text-gray-500 text-xl md:pl-4 pl-2 font-bold '
            strings={['BTB','BTC','SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop />
           </div>
           <p className='md:text-2xl w-[400px] mx-auto md:w-full text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB,BTC,& SASS platforms. </p>
           <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:py-4 text-black  hover:bg-opacity-90 hover:scale-110 ease-in-out duration-300'>Get Started</button>
        </div>
       
      
    </div>
  )
}

export default WellcomePage
