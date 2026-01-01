import React from 'react'
import Asset from '../components/Asset'
import Slidebar from '../components/Sidebar'
import Journeyboard from '../components/Journeyboard'
import Noticeboard from '../components/Noticeboard'
import Content from '../components/Content'
import question from '../assets/question.svg'
import teamimg from '../assets/team.svg'
import meetingimg from '../assets/meeting.svg'

const Homepage = () => {
  return (
    <div className='w-full h-screen mx-auto flex  justify-between'>
      <Journeyboard />
      <Content />
      <Noticeboard />
      <div className='flex justify-end items-end fixed right-0 bottom-0'>
        <div className='w-20 lg:h-50 h-40 px-2 py-3 flex flex-col justify-between items-center'>
          <img className='w-10 aspect-[1/1] bg-blue-600 rounded-4xl p-2 active:scale-90 cursor-pointer' src={question} alt="" />
          <img className='w-10 aspect-[1/1] bg-blue-600 rounded-4xl p-2 active:scale-90 cursor-pointer' src={teamimg} alt="" />
          <img className='w-10 aspect-[1/1] bg-blue-600 rounded-4xl p-2 active:scale-90 cursor-pointer' src={meetingimg} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Homepage