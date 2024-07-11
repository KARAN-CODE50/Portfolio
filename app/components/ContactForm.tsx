import React from 'react'
import ButtonGlass from './glass-btn'

function ContactForm() {
  return (
    <div className=''>
        <form action="" className='flex flex-col my-5 md:mx-20 mx-5 md:space-y-4 space-y-2'>
            <div className=' flex flex-col md:flex-row md:gap-4 gap-2 font-light tracking-wider text-xl'>
                <input placeholder='name' className='pl-2 md:text-xl text-sm py-2 text-center flex-1 border border-white border-opacity-30 bg-[#D9D9D9]/20 md:h-12 rounded-md' type="text" />
                <input placeholder='email' className='pl-2 md:text-xl text-sm py-2 text-center flex-1 border border-white border-opacity-30 bg-[#D9D9D9]/20 md:h-12 rounded-md' type="text" />
            </div>
            <textarea name="" id="" placeholder='message' className=' md:text-xl text-center p-4 font-light bg-[#D9D9D9]/20 border border-white border-opacity-30 rounded-md min-h-32 max-h-32'></textarea>
            <div className='pt-5 md:pt-0 flex justify-center'>
                <ButtonGlass/>
            </div>
        </form>
    </div>
  )
}

export default ContactForm