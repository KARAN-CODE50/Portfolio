import React from 'react'
import Navbar from './components/Navbar'
import Avatar from './components/Avatar'

function LandingPage() {
  return (
    <div className=' bg-grid-wave bg-cover relative'>
      <Navbar />
      <Avatar/>
      <div className='md:hidden font-nohemi font-[300] leading-[1.2em] text-[2.1em] text-center pb-10 mx-6'>
        <p>
          Blending
          <span className=' font-semibold'> research,</span> 
          <span className=' font-semibold'>technology, </span> 
          and 
          <span className=' font-semibold'> innovation </span>
          to fuel 
          <span className=' font-times text-[1.2em]'> entrepreneurial success</span>
        </p>
      </div>
      <div className='hidden md:block font-nohemi font-[300] leading-[1.2em] text-[5em] mx-20 text-center mt-4 pb-16'>
        <p>
          Blending
          <span className=' font-semibold'> research,<br /></span> 
          <span className=' font-semibold'>technology,</span> 
          and 
          <span className=' font-semibold'> innovation </span>
          to <br /> fuel 
          <span className=' font-times text-[1.2em]'> entrepreneurial success</span>
        </p>
      </div>
    </div>
  )
}

export default LandingPage