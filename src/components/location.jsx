import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function location() {
  return (
    <h1 className="text-3xl font-bold">
      Location
    </h1>
  )
}

export default ResponsiveWrapper(location);
