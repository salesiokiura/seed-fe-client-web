import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function recent_payments() {
  return (
    <h1 className="text-3xl font-bold">
      recent_payments
    </h1>
  )
}

export default ResponsiveWrapper(recent_payments);
