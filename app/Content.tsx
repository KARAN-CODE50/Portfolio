import React from 'react'
import About from './About'
import Exp from './Exp'
import ContactMe from './ContactMe'
import Certificate from './components/Certificate'

function Content() {
  return (
    <div className='bg-text-bg bg-repeat bg-contain pb-20'>
        <About/>
        <Exp/>
        <Certificate />
        <ContactMe/>
    </div>
  )
}

export default Content