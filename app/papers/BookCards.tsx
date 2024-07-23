"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface BookProp {
    title: string
}

function BookCards({ title }: BookProp) {
    return (
        <motion.div whileHover="hovered" className=' border flex flex-1 overflow-hidden max-h-[40vh] items-center rounded-xl blur-bg-lg'>
            <div className='flex-[4] p-10'>
                <p className=' text-2xl font-[300]'>{title}</p>
            </div>
            <div className='flex-[3] relative h-full'>
                <motion.div variants={{ hovered: {x:-5}}} className=' absolute z-50 top-0 bottom-0 h-fit rounded-xl overflow-hidden my-auto'>
                    <Image alt='book' src="/book-cover.svg" width={150} height={500} />
                </motion.div>
                <motion.div variants={{ hovered: {x:1}}} className=' absolute z-40 top-0 bottom-0 left-[43px] rounded-xl h-fit overflow-hidden my-auto'>
                    <Image alt='book' src="/book-paper.svg" width={120} height={400} />
                </motion.div>
                <motion.div variants={{ hovered: {x:6}}} className=' absolute z-30 top-0 bottom-0 left-[58px] rounded-xl h-fit overflow-hidden my-auto'>
                    <div className=' absolute w-full h-full bg-black opacity-20'/>
                    <Image alt='book' src="/book-paper.svg" width={120} height={400} />
                </motion.div>
                <motion.div variants={{ hovered: {x:11}}} className=' absolute z-20 top-0 bottom-0 left-[73px] rounded-xl h-fit overflow-hidden my-auto'>
                    <div className=' absolute w-full h-full bg-black opacity-40'/>
                    <Image alt='book' src="/book-paper.svg" width={120} height={400} />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default BookCards