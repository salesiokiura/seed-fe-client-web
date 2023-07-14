import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function about_us() {
  return (
    <h1 className="text-3xl font-bold">
      About us 
    </h1>
  )
}

export default ResponsiveWrapper(about_us);
