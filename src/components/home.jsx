import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function home() {
  return (
    <h1 className="text-3xl text-black font-bold">
      Home
    </h1>
  )
}


export default ResponsiveWrapper(home);