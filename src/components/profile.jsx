import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function profile() {
  return (
    <h1 className="text-3xl font-bold">
      Profile
    </h1>
  )
}

export default ResponsiveWrapper(profile);

