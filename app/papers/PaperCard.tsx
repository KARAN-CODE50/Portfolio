"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Link } from 'lucide-react'

interface PaperProp {
    title: string,
    link: string
}

function PaperCard({ title, link }: PaperProp) {
    return (
        <motion.div whileHover="hovered" className='border md:h-[35vw] h-[100vw] max-w-[55vh] p-10 text-center rounded-xl overflow-hidden backdrop-blur-[5px]'>
            <div className=' flex flex-col items-center justify-center gap-3'>
                <p className='md:text-xl font-light text-xl'>{title}</p>
                <motion.a href={link} target="_blank" variants={{ hovered: { backgroundColor: "#242424", color: "#ffffff" } }} className='font-[500] px-2 py-1 rounded-full flex gap-1 w-fit bg-white text-black'>
                    <Link size={18} />
                    <p className=''>Link</p>
                </motion.a>
            </div>
            <motion.div className='mt-6 relative rounded-xl'>
                <motion.div variants={{ initial: { rotate: 0, y: 0 }, hovered: { y: '20px', rotate: 5 } }} className=' rounded-xl overflow-hidden'>
                    <div className=" rounded-lg absolute h-full w-full bg-black opacity-70" />
                    <Image alt='paper' src='/paper.svg' width={350} height={800} />
                </motion.div>
                <motion.div variants={{ initial: { rotate: 0, y: 0 }, hovered: { y: '20px', rotate: -5 } }} className=' absolute top-12 rounded-xl overflow-hidden'>
                    <div className=" absolute h-full w-full bg-black opacity-50" />
                    <Image alt='paper' src='/paper.svg' width={350} height={800} />
                </motion.div>
                <motion.div variants={{ initial: { rotate: 0, y: 0 }, hovered: { y: '20px', rotate: 5 } }} className=' absolute top-24 rounded-xl overflow-hidden'>
                    <div className=" absolute h-full w-full bg-black opacity-0" />
                    <Image alt='paper' src='/paper.svg' width={350} height={800} />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default PaperCard;