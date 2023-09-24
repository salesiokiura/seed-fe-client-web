import React, { useState } from 'react';
import { ResponsiveWrapper } from '../hoc';
import { Link } from 'react-router-dom';

function Login_landing_page() {

   const [ setInput1] = useState('');
  const [ setInput2] = useState('');

  const handleInputChange = (event, setInput) => {
    setInput(event.target.value);
  };

    const containerStyle = {
    backgroundColor: '#2a4454',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
    width:'100%',
    
  };

  const buttonStyle = {
    backgroundColor:'#A9CBD6',
    borderRadius:'20px',
    height:'84px',
    width:'90px',
    marginRight:'15px',
    marginLeft:'15px',
  }

  const iconStyle = {
    backgroundColor:'#fff',
    borderRadius:'50%',
    height:'47px',
    width:'47px',
  }

  const inputStyle = {
    borderRadius: '25px',
    height: '50px',
    width:'100%',
    padding: '15px',
    backgroundColor: '#2A4454',
    color: 'white',


  }
  return (
    <div class="grid grid-cols-2 gap-4 overflow-hidden" style={containerStyle}>
      <div>
        <img src="./assets/SEED full logo.png" className='mx-auto my-auto pt-[10px]'/>
        <h1>Sustainable Energy Education Districts For Informal Settlements</h1>
        <img src='./assets/bg-image.png' className='w-[300px] h-[350px] rounded-full mx-auto my-auto pt-[50px]'/>
      </div>
    <div className="body grid grid-rows-4 justify-items-center bg-white pt-[100px]">
        <div className='flex items-center justify-evenly'> 
        <Link to="/about_us">
          <div className='relative 'style={buttonStyle}> 
              <img src='../assets/info-icon2.png' className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
              <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-9 whitespace-nowrap'>About us</span>
          </div>
          </Link>
          <Link to="/contact_us">
           <div className='relative'style={buttonStyle}> 
            <img src='../assets/phone-icon.png' className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
              <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-9 whitespace-nowrap font-xs' >Contact us</span>
          </div>
          </Link>
          <Link to="/FAQ">
          <div className='relative'style={buttonStyle}> 
        <img src='../assets/info-icon.png' className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-9 whitespace-nowrap'>FAQs</span>
          </div>
          </Link>
       </div>
       <div className='form w-80 mt-10'> 
           <div className='grid grid-rows-2 gap-y-6 w-full'>
            <div className='w-full' >  
            <Link to="/login">
              <input
              style={inputStyle}
                type="button"
                id="input1"
                value="Login"   
                onChange={(e) => handleInputChange(e, setInput1)}
              />
              </Link>
            </div>
            
            <div className='gap-y-6 w-full'>
              <Link to='/sign_up'>
              <input
              style={inputStyle}
                type="button"
                id="input2"
                value="Sign Up"
                onChange={(e) => handleInputChange(e, setInput2)}
              />
              </Link>
            </div>
          </div>
       </div>
      <div className='m-4 pt-5'> 

          <div className='grid grid-cols-2 gap-x-40 '> 
          <Link to='/location'>
            <div className='relative'style={iconStyle}> 
              <img src='../assets/location-icon.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
              <p className='pt-10'>Location</p>
            </div>
            </Link>
            <Link to='/FAQ'>
            <div className='relative'style={iconStyle}> 
              <img src='../assets/info-icon.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
              <p className='pt-10 px-3'>FAQ</p>
            </div>
            </Link>
         </div>
       </div>
       </div>
    </div>
  )
}

export default ResponsiveWrapper(Login_landing_page);
