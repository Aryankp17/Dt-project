import React from 'react'

import Noticeboard from './Noticeboard';
import Journeyboard from './Journeyboard';

const Sidebar = () => {
    
  return (
    <div className='flex justify-between bg-red-400 w-full' >
        <Journeyboard />

        <Noticeboard />

    </div>
  )
}

export default Sidebar