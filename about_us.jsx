import React from 'react'
import { ResponsiveWrapper } from '../hoc';


function about_us() { 
  return (
    <div style={{margin: 30}}> 

    <h1 className="text-3xl font-bold">
    <div style={{margin: 10}}>
         Sustainable Energy Education Districts (SEED)
    </div>
    </h1>

    <p style={{ color: '#CC5500' }} className="text-3xl font-bold"> 
   
    <div style={{margin: 10}}>
      About us 
    </div>
    </p>

    <p style={{ color: '#008080' }}>
      <div style={{margin: 10}}>
      The initiative aims to strengthen the resilience of African cities, especially informal settlements.
      </div>
    </p>

    <p style={{ color: '#008080' }}>
    <div style={{margin: 10}}>
     For this purpose, the project partners involved are developing a comprehensive and sustainable supply concept that addresses the different energy needs of the popularion living in informal settlements and thus support the local infrastructure. The concept is being developd in a participatory manner, therefore also having a positive community-building effect.
    </div> 
    </p>

     <p style={{ color: '#008080' }}>
     <div style={{margin: 10}}>
      In a follow-up project, the project partners intend to then implement the designed concept together with the relevant local actors.
    </div> 
    </p>

     <p style={{ color: '#008080' }}>
     <div style={{margin: 10}}>
      SEED is sponsored by the German Federal Ministry of Education and Research promoting research on resilience, strengthening, and structural development in African cities and urban areas. (support code: 01DG21015A)
     </div>
     </p>

     <p style={{ color: '#008080' }}>
     <div style={{margin: 10}}>
      The initiative starts in April 2021 and runs until the end of March 2024.
      </div>
      </p>

    </div>
    
  
  ) 
}

export default ResponsiveWrapper(about_us);
