import React, { useState } from 'react';
import { ResponsiveWrapper } from '../hoc';

// imports
import backgroundImage from '../assets/image 12.png'


function Login() {

   const [ setInput1] = useState('');
  const [ setInput2] = useState('');

  const handleInputChange = (event, setInput) => {
    setInput(event.target.value);
  };

    const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
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
    width:'84px',
    marginRight:'10px',
    marginLeft:'10px',
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
    <div className="body grid grid-rows-4 justify-items-center" style={containerStyle} >
        <div className='background ' >
          <img src='../assets/image 12.png' />
        </div>

  

        <div className='text-white mb-32'> 
          <img src='../assets/SEED full logo (1) 1.png' />
         </div>

       <div className=''> 

        <div className='flex items-center justify-evenly'> 
          <div className='relative 'style={buttonStyle}> 
              <img src='../assets/image 8.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
              <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-12 whitespace-nowrap'>About us</span>
          </div>
           <div className='relative'style={buttonStyle}> 
            <img src='../assets/image 9.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
              <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-12 whitespace-nowrap font-xs' >Contact us</span>
          </div>
          <div className='relative'style={buttonStyle}> 
        <img src='../assets/image 10.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-12 whitespace-nowrap'>FAQs</span>
          </div>
       </div>
       </div>

       <div className='form w-80'> 
           <form className='grid grid-rows-2 gap-y-6 w-full'>
            <div className='w-full' >
              
              <input
              style={inputStyle}
                type="button"
                id="input1"
                value="Login"
              
                onChange={(e) => handleInputChange(e, setInput1)}
              />
            </div>
            <div className='gap-y-6 w-full'>
             
              <input
              style={inputStyle}
                type="button"
                id="input2"
                value="Sign Up"

                
                onChange={(e) => handleInputChange(e, setInput2)}
              />
            </div>
          </form>
       </div>


      <div className='m-4'> 

          <div className='grid grid-cols-2 gap-x-40 '> 
            <div className='relative'style={iconStyle}> 
        <img src='../assets/image 9.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
          </div>
          <div className='relative'style={iconStyle}> 
        <img src='../assets/image 10.png' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
          </div>
            
         </div>
       </div>

       </div>

  )
}

export default ResponsiveWrapper(Login);
