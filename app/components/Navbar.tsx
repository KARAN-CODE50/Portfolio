import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center pt-10 px-20 font-nohemi'>
        <div className='text-3xl font-medium'>
            <p>Karan Sarawagi<span className='text-base-purple'>.</span></p>
        </div>
        <div className='flex text-xl gap-[7em] font-light'>
            <p>About</p>
            <p>Experience</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default Navbar