import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function home() {
  return (
    <div className="text-3xl font-bold">
      Home
    </div>
  )
}


export default ResponsiveWrapper(home);