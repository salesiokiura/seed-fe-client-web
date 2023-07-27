import React from 'react'
import { ResponsiveWrapper } from '../hoc';

function inbox() {
  return (
    <div className="text-3xl font-bold">
      Inbox
    </div>
  )
}

export default ResponsiveWrapper(inbox);
