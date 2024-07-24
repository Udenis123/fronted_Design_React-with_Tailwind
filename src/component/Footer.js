import React from 'react'  

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' >
        <div>
        <h1 className='w-full text-2xl font-bold text-[#00df9a] m-4'>Mobile & Windows</h1>
        <p>
        Whether you're a seasoned analyst or a newcomer, our dashboard 
        is tailored to offer valuable information at a glance, enabling informed
        decision-making
        </p>
        <div>
            icons here
        </div>

        </div>
        <div className='lg:col-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400 border-b border-gray-700'>Solutions</h6>
                <ul >
                    <li className='hover:text-[#00fd9a] py-2 text-sm'>Analytics</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm'>Marketing</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm' >Commerce</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm' >Insights</li>
                    

                </ul>
            </div>
             <div>
                <h6 className='font-medium text-gray-400 border-b border-gray-700'>Support</h6>
                <ul>
                    <li className='hover:text-[#00fd9a] py-2 text-sm'>Pricing</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm'>Documentation</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm' >Guides</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm' >API status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 border-b border-gray-700'>Campany</h6>
                <ul>
                    <li className='hover:text-[#00fd9a] py-2 text-sm'>About</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm'>Blogs</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm' >Jobs</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm' >Press</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm' >Careers</li>

                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 border-b border-gray-700'>Legal</h6>
                <ul>
                    <li className='hover:text-[#00fd9a] py-2 text-sm'>Claims</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm'>Policy</li>
                    <li className='hover:text-[#00fd9a] py-2 text-sm' >Terms</li>

                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
