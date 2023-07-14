import React from 'react'
import about_us from './about_us';
import { ResponsiveWrapper } from '../hoc';

function charging_transactions() {
  return (
    <h1 className="text-3xl font-bold">
      Charging transactions
    </h1>
  )
}

export default ResponsiveWrapper(charging_transactions);
