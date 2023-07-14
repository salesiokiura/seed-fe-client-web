import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function sign_up() {
  return (
    <h1 className="text-3xl font-bold">
      sign_up
    </h1>
  )
}

export default ResponsiveWrapper(sign_up);
