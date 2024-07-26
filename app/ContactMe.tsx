import React from 'react'
import ContactForm from './components/ContactForm'

function ContactMe() {
  return (
    <div className='mx-[9%] border pt-10 pb-5 font-nohemi md:mt-20 mt-[5vh] rounded-xl blur-bg-md'>
        <div className='text-center flex flex-col items-center'>
            <p className='md:text-6xl text-4xl font-semibold'>Contact Me<span className=' text-base-purple'>.</span></p>
            <p className='text-[0.7em] font-light md:w-[50%] w-[90%]'>Explore my diverse range of projects, showcasing my ability to apply theoretical knowledge to practical solutions.</p>
        </div>
        <ContactForm/>
    </div>
  )
}

export default ContactMe