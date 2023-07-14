import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function inbox() {
  return (
    <h1 className="text-3xl font-bold">
      Inbox
    </h1>
  )
}

export default ResponsiveWrapper(inbox);
