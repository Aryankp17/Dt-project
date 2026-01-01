import React from 'react'
import logo from '../assets/logo.svg'
import homeimg from '../assets/home.svg'
import notificationimg from '../assets/notification.svg'
import supportimg from '../assets/support.svg'
import { EllipsisVertical } from 'lucide-react';



const Navbar = () => {
  return (
    <div>
      <div className='flex py-4 bg-[#F0F0F0] lg:px-10 px-1 justify-between items-center w-full fixed z-50'>
        <div>
            <img src={logo} alt="Logo" />
        </div>
        <div className='flex lg:gap-3 gap-1.5 items-center'>
            <img title='Home' className=' active:scale-95 object-cover cursor-pointer' src={homeimg} alt="" />
            <img title='Support' className=' active:scale-95 object-cover cursor-pointer' src={supportimg} alt="" />
            <img title='Notification' className=' active:scale-95 object-cover cursor-pointer' src={notificationimg} alt="" />
            <img title='Profile' className=' active:scale-95 object-cover cursor-pointer w-8 aspect-[1/1] object-cover overflow-hidden rounded-full' src="https://images.unsplash.com/photo-1722322426803-101270837197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <EllipsisVertical size={20} color='blue' className='cursor-pointer' />
        </div>
    </div>
    </div>
  )
} 

export default Navbar