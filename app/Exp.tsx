'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
import { Scale } from 'lucide-react'

const workData = [
  {
    name: 'projects & entrepreneurship'
  },
  {
    name: 'research & publications'
  },
  {
    name: 'sports & volunteering'
  },
]

function Exp() {

  return (
    <div className=' font-nohemi text-[#EBEBEB]'>
      <div className='md:mx-[9%] mx-[8%] md:px-8 px-2 py-10 border md:border-2 backdrop-blur-sm rounded-xl mt-20'>
        <div className='hidden md:block'>
          <div className='flex justify-between'>
            <div className=' text-left pl-5'>
              <p className='text-7xl font-bold'>Work Experience<span className=' text-base-purple'>.</span></p>
              <p className=' font-light'>Explore my diverse range of projects, showcasing my ability to apply theoretical knowledge to practical solutions.</p>
            </div>
            <div className='w-[30em] pl-5 pr-10'>
              <div className='bg-art-bg bg-cover opacity-25 w-full h-full rounded-full overflow-hidden' />
            </div>
          </div>

          {/* DESKTOP VERSION */}

          <div className=' space-y-4 pt-10 mx-6'>
            <div className='flex gap-4'>
              <div className='text-7xl rounded-xl p-10 w-full bg-[#D9D9D9]/20'>projects & <br />entrepreneurship</div>
              <div className=' relative w-[60%] rounded-xl bg-[#D9D9D9]/20 backdrop-blur-md'>
                <InsideExp side='flex-col' wd='min-w-[16em]' ht='min-h-[8em]'/>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='w-[100%] relative rounded-xl bg-[#D9D9D9]/20'>
                <InsideExp side='flex-row' wd='min-w-[16em]' ht='min-h-[10em]' />
              </div>
              <div className='text-7xl text-right rounded-xl p-10 w-full bg-[#D9D9D9]/20'>research &<br />publications</div>
            </div>
            <div className='flex gap-4'>
              <div className='text-7xl rounded-xl p-10 w-full bg-[#D9D9D9]/20'>sports &<br />volunteering</div>
              <div className='w-[90%] relative rounded-xl bg-[#D9D9D9]/20'>
                <InsideExp side='flex-col' wd='min-w-[20em]' ht='min-h-[10em]'/>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className='block md:hidden px-4'>
          <div className=' text-left'>
            <p className='text-3xl font-bold'>Work Experience<span className=' text-base-purple'>.</span></p>
            <p className='text-sm font-light'>Explore my diverse range of projects, showcasing my ability to apply theoretical knowledge to practical solutions.</p>
          </div>
          <div className='mt-5'>
            {workData.map((data, index) => (
              <div key={index}>
                <div className='bg-[#D9D9D9]/20 my-3 px-3 py-7 text-center text-[1.75em] leading-7 rounded-lg'>
                  {data.name}
                </div>
                <div className='h-[200px] relative rounded-lg bg-[#D9D9D9]/20'>
                <InsideExp side='flex-row' wd='min-w-[10em]' ht='min-h-[10em]'/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface propInside{
  side: string,
  wd: string,
  ht: string,
}

function InsideExp({side, wd, ht}: propInside) {
  const items = [
    '1',
    '1',
    '1',
    '1',
  ];

  const scrolled = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if(scrolled.current) {
      scrolled.current.scrollTop = 110;
      scrolled.current.scrollLeft = 110;
    }
  }, [])


  return (
    <div ref={scrolled} className={`absolute w-full h-full flex ${side} items-center overflow-auto no-scrollbar`}>
      {items.map((item, index) => (
        <motion.div whileHover={{scale: 1.1, backgroundColor: 'rgb(217,217,217, 0.7)'}} key={index} className={` ${wd} ${ht} rounded-lg bg-[#D9D9D9]/20 m-2 flex items-center justify-center`}>
        </motion.div>
      ))}
    </div>
  );
}

export default Exp