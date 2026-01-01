import React, { useState } from 'react'
import { X } from 'lucide-react';

const Noticeboard = () => {
    
    const [Open, setOpen] = useState(false)
    
  return (
    <div className=' Board flex w-55 lg:w-65  h-55 rounded-xl bg-white overflow-hidden shadow-2xl fixed right-0 top-16.5 ' style={{transform: (Open) ? 'translateX(0%)': 'translateX(80%)',transition:'transform 0.3s ease-in-out'}} >
        <div className=' py-1 h-full gap-2 bg-black text-white flex cursor-default items-center justify-centre' style={{writingMode: 'vertical-rl',letterSpacing:'-1px',textOrientation:'upright'}} >
            <X onClick={()=>setOpen(!Open)} className='Cross cursor-pointer mt-1 active:scale-90' />
            <h2 className='text-[12px]'>Notice Board</h2>
        </div>
        <div className='w-full py-4 px-2 flex flex-col gap-3' >
            <li className='ml-5 text-xs lg:text-sm font-semibold'>Notice 1: Meeting at 10 AM</li>
        </div>

    </div>
  )
}

export default Noticeboard