import React from 'react'
import { ResponsiveWrapper } from '../hoc';
import { Link } from 'react-router-dom';

function services() {
  return (
    <div className='bg-white '> 
      <div className=' bg-mainColor py-4 px-6 text-center relative'>
        <div className='w-10 h-10 rounded-full border border-white flex justify-center items-center absolute top-2'>
            <Link to= '/'><span className='text-white text-xl'>&#8592;</span></Link>
        </div>

        <p className='text-white mb-20 text-lg'>SERVICES</p>
        
      </div>

      <div className='p-4 relative z-10'>

        <div className='relative bottom-24 z-10'>
        <div className=' bg-white rounded-xl shadow-xl py-8 px-6 flex justify-between items-center'>
          <img src="./assets/charge.png" alt="" />
          <p className='text-black'>check slot</p>
        </div>
        </div>

        

        <div className='relative bottom-20 '>
        <div className='rounded-xl shadow-xl p-6 flex justify-between items-center'>
          <img src="./assets/contact.png" alt="" />
          <p className='text-black'>customer <br /> care</p>
        </div>
        </div>

        <div className='relative bottom-20 '>
        <div className='rounded-xl shadow-xl p-6 flex justify-between items-center'>
          <img src="./assets/contact.png" alt="" />
          <p className='text-black'>customer <br /> care</p>
        </div>
        </div>

        <div className='relative bottom-20 '>
        <div className='rounded-xl shadow-xl p-6 flex justify-between items-center'>
          <img src="./assets/contact.png" alt="" />
          <p className='text-black'>customer <br /> care</p>
        </div>
        </div>

        <div className='relative bottom-20 '>
        <div className='rounded-xl shadow-xl p-6 flex justify-between items-center'>
          <img src="./assets/contact.png" alt="" />
          <p className='text-black'>customer <br /> care</p>
        </div>
        </div>

        <div className='relative bottom-20 '>
        <div className='rounded-xl shadow-xl p-6 flex justify-between items-center'>
          <img src="./assets/contact.png" alt="" />
          <p className='text-black'>customer <br /> care</p>
        </div>
        </div>
      </div>

      <div className='relative bottom-10'>
      <div className='bg-mainColor rounded-xl p-4 flex justify-between items-center'>
        <div className='bg-blue-100 w-10 h-10 rounded-full flex justify-center items-center'>
        <img src="./assets/home.png" alt="" />
        </div>
        <img src="./assets/message.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default ResponsiveWrapper(services);
