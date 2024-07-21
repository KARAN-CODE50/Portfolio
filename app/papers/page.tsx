import React from 'react'
import Navbar from '../components/Navbar'
import PaperCard from './PaperCard'

function Papers() {
  return (
    <div className='text-white bg-repeat bg-grid-wave  bg-cover font-nohemi'>
      <Navbar/>
      <div className='md:mx-20 mx-7 flex flex-col md:gap-5 gap-2'>
        <div className='leading-[25px] flex mt-16 md:text-6xl text-2xl'>
          <p>Patents <span className=' text-base-purple opacity-50'>•</span> Journals <span className=' text-base-purple opacity-50'>•</span> Research Papers <span className=' text-base-purple opacity-50'>•</span> Conference Papers <span className=' text-base-purple opacity-50'>•</span> Book chapters</p>
        </div>
        <p className='md:text-xl text-[0.8em] text-neutral-200 font-light font-["FK_Roman_Standard_Trial_Regular"]'>Explore a comprehensive collection of my scholarly contributions across various formats. This includes patents that highlight innovative solutions, peer-reviewed journal articles that present in-depth research findings, conference papers that share insights at leading industry events, and book chapters that provide extensive analyses on key topics. Each piece reflects my dedication to advancing knowledge and contributing to the academic community.</p>
      </div>
      <div className='md:px-20 px-7 py-10 grid gap-5 md:grid-cols-3 justify-between'>
        {['paper a', 'paper b', 'paper c'].map((item, index) => (
          <PaperCard key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Papers