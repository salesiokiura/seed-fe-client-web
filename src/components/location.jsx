import React from 'react'
import { ResponsiveWrapper } from '../hoc';


function location() {
  return (
    <div className="text-3xl font-bold">
      Location
    </div>
  )
}

export default ResponsiveWrapper(location);
