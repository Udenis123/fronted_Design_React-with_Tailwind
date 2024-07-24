import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] max-auto grid lg:grid-cols-3'>
       <div className='lg:col-span-2 my-4'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Want tips & tricls to optimize your flow?</h1>
        <p className='md:text-2xl sm:text-1xl text-ml'>Sign up to Our newsletter and stay up to date.</p>
       </div>

       <div className='my-4'>
        <div className='flex flex-col sm:flex-row items-center justify-center '>
            <input className=' text-xl text-center w-full flex rounded-md text-black p-1 sm:p-2 ' type='email' placeholder='Enter Email' />
            <button className='bg-[#00df9a] rounded-md font-medium w-[150px] ml-2 my-6 py-2 sm:py-3'>Notify Me</button>
            
        </div>
        <p className='text-gray-500'>We care bout the protection of your data.Read our<span className='sm:block underline text-[#00df9a]'> Privacy Policy.</span> </p>
       </div>
      </div>
    </div>
  )
}

export default NewsLetter
