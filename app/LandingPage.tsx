import React from 'react'
import Navbar from './components/Navbar'
import Avatar from './components/Avatar'

function LandingPage() {
  return (
    <div className=' bg-grid-wave bg-cover h-screen'>
      <Navbar />
      <Avatar/>
      <div className=' font-nohemi font-[300] leading-[1.2em] text-[5em] mx-20 text-center my-4'>
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