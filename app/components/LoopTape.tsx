import React from 'react'
import Image from 'next/image'

function LoopTape() {
  return (
    <div className=' bg-white h-[4em] font-nohemi flex justify-center items-center gap-8 overflow-hidden'>
        <p className=' text-black pt-1 text-5xl font-semibold'>DISCUSS YOUR IDEAS</p>
        <Image alt='star' src='/star.svg' width={40} height={40}></Image>
        <p className=' text-black pt-1 text-5xl font-semibold'>DISCUSS YOUR IDEAS</p>
        <Image alt='star' src='/star.svg' width={40} height={40}></Image>
    </div>
  )
}

export default LoopTape