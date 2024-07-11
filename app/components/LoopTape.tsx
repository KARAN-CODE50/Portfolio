"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import useMeasure from 'react-use-measure'
import { animate, useMotionValue, motion } from 'framer-motion';

function LoopTape() {

  const loopData = [
    '1',
    '1',
    '1',
  ]

  const [ref, { width }] = useMeasure();
  console.log(width)

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width/2 - 16;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 10,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    });

    return controls.stop;
  }, [xTranslation, width]);


  return (
    <div className='relative bg-white h-[3em] md:h-[4em] font-nohemi flex justify-center items-center'>
      <motion.div
        className=' absolute flex gap-8 left-0'
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...loopData, ...loopData].map((item, index) => (
          <div key={index} className='flex gap-8'>
            <p className='text-black pt-1 text-2xl md:text-5xl font-semibold text-nowrap'>DISCUSS YOUR IDEAS</p>
            <Image className=' min-w-9' alt='star' src='/star.svg' width={35} height={35} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default LoopTape