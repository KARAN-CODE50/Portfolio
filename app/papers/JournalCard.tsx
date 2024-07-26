"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface JournalProp {
    title: string,
    desc: string,
}

function JournalCard({ title, desc }: JournalProp) {
    return (
        <motion.a target='_blank' href='https://assets.cureus.com/uploads/original_article/pdf/248945/20240628-2574-1nm5hu8.pdf' whileHover="hovered" className='flex overflow-hidden items-center blur-bg-lg rounded-xl min-h-[350px] border'>
            <div className='flex-[4] flex flex-col gap-3 py-10 pl-10'>
                <motion.p variants={{ hovered: { color: "#15bca4"}}} className='text-4xl'>{title}</motion.p>
                <p className='text-md opacity-70 font-["FK_Roman_Standard_Trial_Regular"]'>{desc}</p>
            </div>
            <div className='flex-[4] relative'>
                <motion.div variants={{ hovered: {y: 5, x: -5, rotate: 0}}} className=' drop-shadow-[2px_-2px_3px_rgba(0,0,0,0.15)] absolute -top-[70px] z-50 left-[40px] rounded-xl overflow-hidden'>
                    <Image src="/journal-image.svg" alt="image" width={450} height={500} />
                </motion.div>
                <motion.div variants={{ hovered: {y: 2, x: 10, rotate: 0}}} className=' drop-shadow-[2px_-2px_3px_rgba(0,0,0,0.15)] absolute -top-[110px] z-30 left-[70px] rounded-xl overflow-hidden'>
                    <div className=' absolute h-full w-full bg-black opacity-20' />
                    <Image src="/journal-image.svg" alt="image" width={450} height={500} />
                </motion.div>
                <motion.div variants={{ hovered: {y: -5, x: 20, rotate: 0}}} className=' drop-shadow-[2px_-2px_3px_rgba(0,0,0,0.15)] absolute -top-[145px] z-0 left-[100px] rounded-xl overflow-hidden'>
                    <div className=' absolute h-full w-full bg-black opacity-40' />
                    <Image src="/journal-image.svg" alt="image" width={450} height={500} />
                </motion.div>
            </div>
        </motion.a>
    )
}

export default JournalCard