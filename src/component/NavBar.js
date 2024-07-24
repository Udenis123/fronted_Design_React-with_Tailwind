import React,{useState} from 'react'


function NavBar() {
const [nav,setNav] = useState(false)

const handleNav =()=>{
  setNav(!nav);     
}

  return (
    <div className='flex justify-between items-center h-24 max-w-[1124px] mx-auto px-8 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Windows</h1>
      <ul className=' hidden  md:flex cursor-pointer '>
        <li className='p-4 hover:text-[#00df9a] '>Home</li>
        <li className='p-4 hover:text-[#00df9a] '>Campany</li>
        <li className='p-4 hover:text-[#00df9a] '>Resource</li>
        <li className='p-4 hover:text-[#00df9a] '>About</li>
        <li className='p-4 hover:text-[#00df9a] '>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {
          !nav?<> <svg className='w-6' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg></>
          :<><svg className='w-8' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
        </svg></>
         }  
      </div>
      <div className={!nav?'fixed left-[100%] block md:hidden':'fixed left-0 top-0 w-[40%] h-full border-r border-gray-800 bg-[#000300] ease-in-out duration-500 block md:hidden'} >
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Mobile</h1>
      <ul className=' p-1  uppercase text-sm cursor-pointer '>
        <li className='p-4 border-b border-gray-800 hover:text-[#00df9a] '>Home</li>
        <li className='p-4 border-b border-gray-800 hover:text-[#00df9a]  '>Campany</li>
        <li className='p-4 border-b border-gray-800 hover:text-[#00df9a] '>Resource</li>
        <li className='p-4 border-b border-gray-800 hover:text-[#00df9a] '>About</li>
        <li className='p-4 hover:text-[#00df9a] '>Contact</li>
      </ul>
      </div>
    </div>
  )
}

export default NavBar
