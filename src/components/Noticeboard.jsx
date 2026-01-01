import React, { useState } from 'react'
import { X } from 'lucide-react';

const Noticeboard = () => {
    
    const [Open, setOpen] = useState(false)
    
  return (
    <div className=' Board flex w-70 h-70 rounded-xl bg-white overflow-hidden shadow-2xl fixed right-0 top-18.5 ' style={{transform: (Open) ? 'translateX(0%)': 'translateX(80%)',transition:'transform 0.3s ease-in-out'}} >
        <div className=' py-2 h-full gap-4 bg-black text-white flex cursor-default items-center justify-centre' style={{writingMode: 'vertical-rl',letterSpacing:'-1px',textOrientation:'upright'}} >
            <X onClick={()=>setOpen(!Open)} className='Cross cursor-pointer mt-1 active:scale-90' />
            <h2 className='text-[15px]'>Notice Board</h2>
        </div>
        <div className='w-full p-4 flex flex-col gap-3' >
            <li className='ml-5 text-sm font-semibold'>Notice 1: Meeting at 10 AM</li>
        </div>

    </div>
  )
}

export default Noticeboard