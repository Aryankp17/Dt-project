import React, { useState } from 'react'
import { CircleAlert } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import threadimg from '../assets/thread-img.svg'
import { Plus } from 'lucide-react';
import { CornerUpLeft } from 'lucide-react';
import { CornerUpRight } from 'lucide-react';
import { Expand } from 'lucide-react';
import { Ellipsis } from 'lucide-react';
import { ChevronUp } from 'lucide-react';

const Asset = ({ item,idx }) => {
  const [open, setOpen] = useState(true)
  const [threadbuild, setthreadbuild] = useState(true)
  const [saIntro, setsaIntro] = useState(true)
  const [saThread, setsaThread] = useState(true)
  

  const getassetcontent = ()=>{
    if(item.asset_title?.trim() === "Technical Project Management"){
      return TechnicalProjectManagement
    }
     if(item.asset_title?.trim() === "Threadbuild"){
      return Threadbuild
    }
     if(item.asset_title?.trim() === "Structure you pointers"){
      return Structureyoupointers
    }
    if(item.asset_title?.trim() === "4SA Method"){
      return SAMethod
    }
  }

  const TechnicalProjectManagement = (
    <div className='w-full h-full'>
      <div className='w-full h-60 object-contain'>
        {item.asset_content_type === "video" && (<iframe width="100%" height="315" src={item.asset_content} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>)}

      </div>
    </div>
  )
  const Threadbuild = (
    <div className={`w-full h-full`}>
      <div className='flex h-8 w-full items-center py-2 px-3 bg-[#FEFFC033]'>
        <ChevronDown onClick={()=>setthreadbuild(!threadbuild)} style={{transform: threadbuild ? 'rotate(0deg)' : 'rotate(180deg)',transition:'transform 0.3s ease'}} />
        <h1 className='font-bold text-lg mx-auto'>Thread A</h1>
      </div>
      <div className={`${(threadbuild) ? 'block':'hidden'}`} style={{transition:'all 0.3s cubic-bezier(0.33, 0.12, 0.2, 1)'}}>
          <div className='flex w-full  flex mt-1 gap-3 px-3 h-30'>
          <div className=' w-50 h-full py-1 bg-gray-300 shadow-2xl overflow-hidden rounded-2xl'>
            <span className='lg:rounded-t-2xl rounded-xl font-semibold break-words ml-2 justify-center lg:break-words break-all lg:text-base text-xs' style={{maxWidth: '100%', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Sub thread 1</span>
            <textarea rows={10} className='w-full bg-white px-2 py-1 rounded-t-2xl h-[100%] border-0 outline-0 resize-none ' name="" id="" placeholder='Enter text here'></textarea>
          </div>
          <div className=' w-50 h-full py-1 bg-gray-300 shadow-2xl overflow-hidden rounded-2xl'>
            <span className='lg:rounded-t-2xl rounded-xl font-semibold break-words ml-2 justify-center lg:break-words break-all lg:text-base text-xs' style={{maxWidth: '100%', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>Sub Interpretation 1</span>
            <textarea rows={10} className='w-full bg-white px-2 py-1 rounded-t-2xl h-[100%] border-0 outline-0 resize-none ' name="" id="" placeholder='Enter text here'></textarea>
          </div>
        </div>
        <div className='w-full h-20 flex items-center justify-between lg:flex-row flex-col px-5 mt-3'>
          <img className='lg:size-30 size-20' src={threadimg} alt="" />
          <div className='flex'>
            <select className='p-2 shadow-2xl bg-white rounded-lg font-semibold' name="" id="">
            <option value="">Select Categ</option>
          </select>
          <select className='p-2 shadow-2xl bg-white rounded-lg font-semibold' name="" id="">
            <option value="">Select Proces</option>
          </select>
          </div>
        </div>
        <div>
          <button className='flex py-2 px-3 bg-blue-600 cursor-pointer rounded-lg text-white font-semibold mb-1 items-center'>
            <Plus size={18} />
            <span className='text-sm'>Sub thread</span>
          </button>
          <div className=' mx-auto lg:w-100 w-full h-full py-1 bg-gray-300 shadow-2xl overflow-hidden rounded-2xl'>
            <span className='rounded-t-2xl font-semibold ml-2'>Summary of Thread A</span>
            <textarea rows={10} className='w-full bg-white px-2 py-1 rounded-t-2xl h-[100%] border-0 outline-0 resize-none ' name="" id="" placeholder='Enter text here'></textarea>
          </div>
        </div>
      </div>

    </div>
  )
  const Structureyoupointers = (
    <div className='w-full h-full px-4'>
      <div className='pt-4'>
        <label className='font-medium' htmlFor="title">Title</label>
        <input className=' w-full mt-2 shadow-xl p-2 rounded-lg bg-[#ececec]' type="text" id='title' />
      </div>
      <div className='mt-3'>
        <label className='font-medium' htmlFor="content">Content</label>
        <div className='w-full shadow-2xl rounded-lg  h-70 '>
          <div className='w-full lg:h-20 h-25 shadow-xl mt-2 py-2 px-3 '>
            <div className=' w-full h-10 flex flex-wrap gap-2 '>
              <a className=' cursor-pointer'>File</a>
              <a className=' cursor-pointer'>Edit</a>
              <a className=' cursor-pointer'>View</a>
              <a className=' cursor-pointer'>Insert</a>
              <a className=' cursor-pointer'>Format</a>
              <a className=' cursor-pointer'>Tools</a>
              <a className=' cursor-pointer'>Table</a>
              <a className=' cursor-pointer'>Help</a>
            </div>
            <div className='flex gap-3 lg:mt-0 mt-5'>
              <CornerUpLeft />
              <CornerUpRight />
              <Expand />
              <input className='bg-gray-200 placeholder:text-gray-500 w-25 border-0 outline-0' type="text" placeholder='Paragraph' />
              <Ellipsis />
            </div>
          </div>
          {/* <textarea name="" id=""></textarea> */}
        </div>
      </div>

    </div>
  )
  const SAMethod = (
    <div className='w-full h-full p-4'>
      <div>
        <div className='flex gap-2 w-full p-2 bg-[#F2F2F2]'>
          <ChevronUp onClick={()=>setsaIntro(!saIntro)} className='cursor-pointer' style={{transform:(saIntro) ? 'rotate(180deg)': 'rotate(0deg)',transition:'transform 0.3s ease'}} />
          <h1 className='font-medium'>Introduction</h1>
        </div>
        <div className={`${saIntro ? 'block':'hidden'}`} style={{transition:'all 0.3s ease'}}>
          <p className='text-sm p-2'>The 4SA Method , How to bring a idea into progress ?</p>
        <span className='block flex text-[#606161] justify-end'>See More</span>
        </div>
      </div>

      <div>
        <div className='flex gap-2 w-full p-2 bg-[#F2F2F2]'>
          <ChevronUp onClick={()=> setsaThread(!saThread)} className='cursor-pointer' style={{transform:(saThread) ? 'rotate(180deg)':'rotate(0deg)',transition:'transform 0.3s ease'}} />
          <h1 className='font-medium'>Thread A</h1>
        </div>
        <div className={`${saThread ? 'block':'hidden'}`} style={{transition:'all 0.3s ease'}}>
          <p className='text-sm p-2'>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
          <span className='block flex text-[#606161] justify-end'>See More</span>
        </div>
      </div>
      <div className={`flex flex-wrap justify-end ${saThread ? 'block':'hidden'}`} style={{transition:'all 0.3s ease'}}>
        <h1 className='font-semibold w-90 lg:p-2 p-1 flex items-center border-1 border-gray-300 text-lg'>Example 1</h1>
        <p className='text-sm px-2 lg:py-2 leading-4  py-'>You have a concept , How will you put into progress?</p>
      </div>
    </div>

  )

  return (
    <div key={idx} className={` lg:w-110 w-70 rounded-2xl shadow-2xl bg-white overflow-hidden ${open ? 'h-120' : 'h-10'}`} style={{ transition: 'all 0.3s ease-in-out' }}>
      <div className='w-full h-10 flex text-sm bg-black px-3 flex items-center justify-between text-white'>
        <h1 className='mx-auto'>{item.asset_title}</h1>
        <CircleAlert onClick={() => setOpen(!open)} className='cursor-pointer active:scale-90' />
      </div>
      <div className=' w-full h-full' style={{ display: 'block', transition: 'display 0.3s ease-in-out' }}>
        <div className='w-full lg:h-20 h-18 p-3 bg-[#FDFDFD] leading-relaxed border-b-2 border-gray-300'>
          <p className=' text-left text-xs lg:text-lg lg:leading-5 leading:4'><span className='font-semibold'>Description: </span>{item.asset_description}</p>
        </div>
        {getassetcontent()}
      </div>
    </div>
  )
}

export default Asset