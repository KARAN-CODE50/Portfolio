"use client"
import { motion } from 'framer-motion'
import { Album, BookOpen } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface BookProp {
    title: string,
    href: string
}

function BookCards({ title, href }: BookProp) {
    return (
        <motion.a href={href} target="_blank" whileHover="hovered" className=' relative border flex flex-1 overflow-hidden max-h-[40vh] items-center rounded-xl blur-bg-lg'>
            <div className='flex-[4] md:p-10 p-7 z-20'>
                <p className=' md:text-2xl font-[300]'>{title}</p>
            </div>
            <div className='md:hidden absolute right-3 opacity-5'>
                <BookOpen size={100} />
            </div>
            <div className='flex-[3] md:relative hidden'>
                <motion.div variants={{ hovered: {x:-10}}} className=' absolute z-50 top-0 bottom-0 left-0 h-fit rounded-xl overflow-hidden my-auto'>
                    <Image alt='book' src="/book-cover.svg" width={150} height={500} />
                </motion.div>
                <motion.div variants={{ hovered: {x:1}}} className=' absolute z-40 top-0 bottom-0 left-[32px] rounded-xl h-fit overflow-hidden my-auto'>
                    <Image alt='book' src="/book-paper.svg" width={120} height={400} />
                </motion.div>
                <motion.div variants={{ hovered: {x:15}}} className=' absolute z-30 top-0 bottom-0 left-[32px] rounded-xl h-fit overflow-hidden my-auto'>
                    <div className=' absolute w-full h-full bg-black opacity-20'/>
                    <Image alt='book' src="/book-paper.svg" width={120} height={400} />
                </motion.div>
                <motion.div variants={{ hovered: {x:30}}} className=' absolute z-20 top-0 bottom-0 left-[32px] rounded-xl h-fit overflow-hidden my-auto'>
                    <div className=' absolute w-full h-full bg-black opacity-40'/>
                    <Image alt='book' src="/book-paper.svg" width={120} height={400} />
                </motion.div>
            </div>
        </motion.a>
    )
}

export default BookCards