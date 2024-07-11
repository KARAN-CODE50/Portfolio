import React from 'react'
import About from './About'
import Exp from './Exp'
import ContactMe from './ContactMe'

function Content() {
  return (
    <div className=' bg-text-bg pb-20'>
        <About/>
        <Exp/>
        <ContactMe/>
    </div>
  )
}

export default Content