import React from 'react'
import Image from 'next/image'

function Avatar() {
  return (
    <div className='flex justify-center relative pt-5'>
        <div className=' scale-75 md:scale-100 border-[0.3em] flex justify-center border-[#C7B2FF] relative overflow-hidden backdrop-blur-[3px] h-[18em] w-[18em] rounded-full'>
            <Image alt='avatar' src='/avatar-3d.png' className=' scale-150 absolute top-10' width={700} height={700} />
        </div>
        <div className='flex justify-center items-center bg-glass-border bg-cover backdrop-blur-[8px] h-[80px] w-[80px] rounded-full absolute scale-75 md:scale-100 md:bottom-5 bottom-10 md:left-[39%] left-[15%]'>
            <Image alt='arrow' src='./arrow.svg' width={18} height={18}></Image>
        </div>
        <div className='flex justify-center items-center bg-glass-border bg-cover backdrop-blur-[8px] h-[80px] w-[80px] rounded-full absolute scale-75 md:scale-100 md:bottom-5 bottom-10 md:right-[39%] rotate-[270deg] right-[15%]'>
            <Image alt='upload' src='./down.svg' width={28} height={28} className=' rotate-90'></Image>
        </div>
    </div>
  )
}

export default Avatar