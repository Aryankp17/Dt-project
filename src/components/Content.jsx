import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Asset from './Asset'
import data from '../data/data.json'


const Content = () => {
  const [Data, setData] = useState([])
  const getdata = async()=>{
    try {
      //your api is not working properly so i used local json file
      // const response = await axios.get('http://localhost:3200/api/dpthought')
      // setData(response.data.tasks[0].assets)
      setData(data.tasks[0].assets)
    } catch (error) {
      console.log(error)
    } 
  }
  useEffect(()=>{
    getdata()
  },[])
  
  return (
    <div className=' w-full  min-h-screen'>
        <div className='w-[70%] flex-1   mx-auto my-20'>
            <div className='flex  h-20 w-full items-center justify-between py-3 lg:px-8 px-1'>
                <h1 className='text-[#0029FF] font-bold lg:text-xl text-xs' style={{letterSpacing:"1px"}}>Technical Project Management</h1>
                <button className='lg:text-sm text-xs cursor-pointer hover:bg-blue-600 active:scale-95 lg:py-2 lg:px-3 p-2 rounded-xl font-medium bg-blue-500 text-white'>Submit task</button>
            </div>
            <div className='bg-gray-100 p-4 text-black'>
              <h1 className='font-semibold lg:text-lg text-md'>Explore the world of management</h1>
              <p className=''>As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
            </div>
            <div className='w-full min-h-screen gap-10 py-12 lg:px-5 px-1.5 justify-items-center  flex flex-col lg:grid lg:grid-cols-2'>
              {Data.map((item,idx)=>{
                return  <Asset key={idx} item={item} />
              })}
            </div>
            
        </div>

    </div>
  )
}

export default Content