import React from 'react'
import { ResponsiveWrapper } from '../hoc';
import {Link} from 'react-router-dom'
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ChargingTransaction = () => {
  return (
    <div className='rounded-xl shadow-xl p-6 bg-white'>
      <div className='flex justify-between items-center mb-4'>
        <p className='font-semibold'>CHARGING TRANSACTIONS</p>
        <Link to='/charging_transactions' className='text-blue-500'>SEE ALL</Link>
      </div>
      <p className='font-light mb-3'>Brian234 | Samsung Galaxy A10</p>

      <div className='flex justify-between mb-4'>
          <div>
            <p className="font-light mb-3">CHARGING STATUS</p>
            <p className="font-light mb-3">REMAINING TIME</p>
            <p className="font-light mb-3">AMOUNT</p>
          </div>
          
          <div className='text-right'>
            <p className=' font-bold mb-3' style={{color: '#76D32D'}}>28 %</p>
            <p className='mb-3'>03 : 04 :45 HRS</p>
            <p className='mb-3'>KSH. 110</p>
          </div>
        </div>

    </div>
  )
}

const Client = () => {
  return (
    <div className='bg-white shadow-xl overflow-hidden rounded-xl'>
      <div className='p-4'>

        <div className='flex items-center justify-around'>
        <div className='flex flex-col justify-center items-center'>
            <img src="./assets/wallet.png" alt="" className='mb-3' />
            <p>Wallet</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src="./assets/order.png" alt="" className='mb-3' />
            <p>Order & Pay</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src="./assets/send.png" alt="" className='mb-3' />
            <p>Send & Request</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src="./assets/devices.png" alt="" className='mb-3' />
            <p>Devices</p>
          </div>
        </div>
      </div>
    </div>

    
  )
}

const Services = () => {
  return (
    <div className='bg-white shadow-xl overflow-hidden rounded-xl p-4'>

      <div className='flex justify-between items-center mb-4'>
        <p className='font-semibold'>RECENT PAYMENTS</p>
        <Link to='/recent_payments' className='text-blue-500'>SEE ALL</Link>
      </div>
      <div className='flex justify-between items-center mb-4'>
        <p className='font-semibold'>SERVICES</p>
        <Link to='/recent_payments' className='text-blue-500'>SEE ALL</Link>
      </div>
      <div className='p-4'>

        <div className='flex items-center justify-around'>
        <div className='flex flex-col justify-center items-center'>
            <img src="./assets/checkslot.png" alt="" className='mb-3' />
            <p>Check Slot</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src="./assets/contacts.png" alt="" className='mb-3' />
            <p>Contact</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src="./assets/bookslot.png" alt="" className='mb-3' />
            <p>Book Slot</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img src="./assets/bookdevice.png" alt="" className='mb-3' />
            <p>Book to collect <br /> device</p>
          </div>
        </div>
      </div>
    </div>

    
  )
}

const EnergyAnalytics = () => {
  const labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "SEE ALL",
      backgroundColor: '',
      data: [50, 30, 40, 45, 55, 40, 30],
      barThickness: 15, // Adjust this value to make the bars thinner or thicker
    }
  ]
};

  

  return (
    <div className='flex bg-white shadow-xl rounded-lg overflow-hidden justify-between items-center'>
      <div className='bg-sky-700 py-4 px-6 w-[100%] rounded-lg'>
        <h3 className='text-white text-3xl w-[100%]'>Energy <br /> Consuption</h3>
        <div className='flex items-center mt-12 mb-20'>
          <div className='w-10 h-10 rounded-full mr-2 bg-orange-300'> 
          </div>
          <span className='text-white text-sm'>Samsung Galaxy A10</span>
        </div>
      </div>

      <div className='h-[100%] w-[100%]  self-end' >
        <Bar data = {data} className = 'h-96'/>
      </div>
    </div>
  )

}


function home() {
  return (
    <div className='bg-white'>
      <div className='bg-mainColor p-6 flex justify-between item-center pb-24 relative'>
        <div className=''>
          <img src="./assets/SEED full logo.png" alt=""  className='absolute top-4 left-2 w-28'/>
        </div>
        <div className='text-white text-lg ml-12'>
          <p>Welcome Back</p>
          <p>Brain234</p>
        </div>

        <div className='flex items-center '>
          <div className='mr-2 relative'>
            <img src="./assets/elipse.png" alt="" className='w-14'/>
            <img src="/assets/search.png" alt=""  className='absolute left-3 bottom-4 w-5' />
          </div>
          <img src="/assets/user.png" alt="" className='w-14' />
        </div>
      </div>

      <div className='p-6 relative'>

        <div className='relative bottom-24 z-10'>
          <ChargingTransaction />
        </div>

        <div className='relative bottom-20'>
          <Client />
        </div>

        <div className='relative bottom-10'>
          <Services />
        </div>

        <div className='relative '>
        <EnergyAnalytics />
        </div>


        <div className='bg-mainColor rounded-xl p-4 flex justify-between items-center mt-4 mb-2'>
          <div className='bg-blue-100 w-10 h-10 rounded-full flex justify-center items-center'>
              <img src="./assets/home.png" alt="" className='w-8 h-6'  />
          </div>
          <img src="./assets/message.png" alt="" />
        </div>

      </div>
    </div>
  )
}


export default ResponsiveWrapper(home);