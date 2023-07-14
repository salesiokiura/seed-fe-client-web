import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function contact_us() {
  return (
    <h1 className="text-3xl font-bold">
      Contact us
    </h1>
  )
}

export default ResponsiveWrapper(contact_us);
