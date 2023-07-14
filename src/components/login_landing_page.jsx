import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function login_landing_page() {
  return (
    <h1 className="text-3xl font-bold">
      login_landing_page
    </h1>
  )
}

export default ResponsiveWrapper(login_landing_page);
