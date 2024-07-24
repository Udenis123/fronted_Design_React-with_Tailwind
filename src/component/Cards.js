import React from 'react'
import single from '../asset/single.png'
import double from '../asset/double.png'
import triple from '../asset/triple.png'
function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-gray-100'>
      <div className='max-w-[1000px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single}  alt='' />

            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold '>Rwf 10,000</p>
            <div className='text-center font-medi'>
                < p className='py-2 border-b mx-8 mt-8'>500 GB Storage</ p>
                < p className='py-2 border-b mx-8 '>1 Granted User</ p >
                < p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] rounded-md mx-auto w-[200px] py-3 font-medium my-6 px-6 hover:bg-opacity-90'>Start Trial</button>
        </div>
        <div className='bg-white w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white bg-transparent' src={double}  alt='' />

            <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
            <p className='text-center text-4xl font-bold '>Rwf 15,000</p>
            <div className='text-center font-medi'>
                < p className='py-2 border-b mx-8 mt-8'>1 GB Storage</ p>
                < p className='py-2 border-b mx-8 '>3 Granted User</ p >
                < p className='py-2 border-b mx-8 '>Send up to 10 GB</p>
            </div>
            <button className=' bg-[#000300] text-[#00df9a] rounded-md mx-auto w-[200px] py-3 font-medium my-6 px-6 hover:bg-opacity-90'>Start Trial</button>
        </div>
        <div className='bg-white w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple}  alt='' />

            <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className='text-center text-4xl font-bold '>Rwf 30,000</p>
            <div className='text-center font-medi'>
                < p className='py-2 border-b mx-8 mt-8'>5 TB Storage</ p>
                < p className='py-2 border-b mx-8 '>10 Granted User</ p >
                < p className='py-2 border-b mx-8 '>Send up to 20 GB</p>
            </div>
            <button className='bg-[#00df9a] rounded-md mx-auto w-[200px] py-3 font-medium my-6 px-6 hover:bg-opacity-90'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
