import React, { useState } from 'react'
import arrowimg from '../assets/arrow.svg'

const Journeyboard = () => {

    const [open, setopen] = useState(false)
    
  return (
    <div className='sidebar w-70 border-t-0 overflow-hidden bg-white border-0 rounded-xl rounded-tl-none rounded-bl-none shadow-2xl h-100 flex flex-col fixed top-18.5' style={{transition:'transform 0.3s ease-in-out',
     transform:(open) ? 'translateX(0%)':'translateX(-85%)'}}>
            <div className='flex items-center justify-between w-full gap-2 bg-black text-white py-2 px-3'>
                <h2 className='font-semibold'>Journey Board</h2>
                <img onClick={()=>{
                    setopen(!open)
                }} className=' arrow w-7 aspect-[1/1] active:scale-90 cursor-pointer' src={arrowimg} alt=""
                style = {{transform:(open) ? 'rotate(0deg)':'rotate(180deg)'}}
                 />
            </div>
            <div className='py-4 px-5 ml-2 leading-4 flex flex-col gap-3 text-black text-sm'>
                <li className='font-bold'>Explore the world of management</li>
                <li >Technical Project Management</li>
                <li>Threadbuild</li>
                <li>Structure you pointers</li>
                <li>4SA Method</li>

            </div>
    </div>
  )
}

export default Journeyboard