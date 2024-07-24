import React from 'react'
import laptop from '../asset/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-gray-100 py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={laptop} alt='/' />
        <div className='flex flex-col justify-center items-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                Manage data Analytics Centrary
            </h1>
            <p>
            Welcome to our Data Analytics Dashboard! This 
            interactive and user-friendly interface is designed to
             provide you with real-time insights into key metrics 
             and performance indicators that drive our business.
            </p>
            <p>
                 
             Whether you're a seasoned analyst or a newcomer, our dashboard 
             is tailored to offer valuable information at a glance, enabling informed
              decision-making.
            </p>
            <center><button className='bg-[#000300] text-[#00df9a] w-[200px] mx-auto font-medium py-3 my-6 md:mx-0 md:p-4 rounded-md  hover:bg-opacity-90 hover:scale-110 ease-in-out duration-300'>Get Started</button></center>
        </div>
      </div>
    </div>
  )
}

export default Analytics
