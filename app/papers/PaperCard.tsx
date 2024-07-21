"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function PaperCard() {
    return (
        <motion.div whileHover="hovered" className='border md:h-[35vw] h-[100vw] w-fit p-10 text-center rounded-xl overflow-hidden backdrop-blur-[5px]'>
            <p className='md:text-3xl text-xl'>Research Paper X</p>
            <p className='font-light md:text-xl'>Description</p>
            <motion.div className='mt-6 relative rounded-xl'>
                <motion.div variants={{initial:{rotate: 0, y: 0}, hovered: {y: '20px', rotate: 5}}} className=' rounded-xl overflow-hidden'>
                    <div className=" rounded-lg absolute h-full w-full bg-black opacity-70" />
                    <Image alt='paper' src='/paper.svg' width={350} height={800} />
                </motion.div>
                <motion.div variants={{initial:{rotate: 0, y: 0}, hovered: {y: '20px', rotate: -5}}} className=' absolute top-12 rounded-xl overflow-hidden'>
                    <div className=" absolute h-full w-full bg-black opacity-50" />
                    <Image alt='paper' src='/paper.svg' width={350} height={800} />
                </motion.div>
                <motion.div variants={{initial:{rotate: 0, y: 0}, hovered: {y: '20px', rotate: 5}}} className=' absolute top-24 rounded-xl overflow-hidden'>
                    <div className=" absolute h-full w-full bg-black opacity-0" />
                    <Image alt='paper' src='/paper.svg' width={350} height={800} />
                </motion.div>
            </motion.div>
        </motion.div>
   )
}

export default PaperCard;