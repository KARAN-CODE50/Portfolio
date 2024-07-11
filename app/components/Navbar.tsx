import { GanttChart } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center pt-6 px-7 md:pt-10 md:px-20 font-nohemi'>
        <div className='text-[1.6em] md:text-3xl font-medium'>
            <p>Karan Sarawagi<span className='text-base-purple'>.</span></p>
        </div>
        <div className='md:hidden rounded-full p-1 backdrop-blur-sm'>
          <GanttChart size={30}/> 
        </div>
        <div className='hidden md:flex text-xl gap-[7em] font-light'>
            <p>About</p>
            <p>Experience</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default Navbar