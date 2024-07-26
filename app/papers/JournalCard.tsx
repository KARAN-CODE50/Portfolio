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
        <motion.a target='_blank' href='https://assets.cureus.com/uploads/original_article/pdf/248945/20240628-2574-1nm5hu8.pdf' whileHover="hovered" className='flex md:flex-row flex-col overflow-hidden items-center blur-bg-lg rounded-xl md:min-h-[350px] min-h-[80vh] border'>
            <div className='flex-[4] flex flex-col md:gap-3 gap-2 md:py-10 md:pl-10 p-7'>
                <motion.p variants={{ hovered: { color: "#15bca4"}}} className='md:text-4xl text-xl'>{title}</motion.p>
                <p className='md:text-md text-sm opacity-70 font-["FK_Roman_Standard_Trial_Regular"]'>{desc}</p>
            </div>
            <div className='flex-[4] relative w-full'>
                <motion.div variants={{ hovered: {y: 5, x: -5, rotate: 0}}} className=' drop-shadow-[2px_-2px_3px_rgba(0,0,0,0.15)] absolute md:-top-[70px] z-50 md:left-[40px] md:right-auto -top-[2vh] left-[2vh] right-[10vh] rounded-xl overflow-hidden'>
                    <Image src="/journal-image.svg" alt="image" width={450} height={500} />
                </motion.div>
                <motion.div variants={{ hovered: {y: 2, x: 10, rotate: 0}}} className=' drop-shadow-[2px_-2px_3px_rgba(0,0,0,0.15)] absolute md:-top-[110px] z-30 md:left-[70px] md:right-auto -top-[6vh] left-[5vh] right-[6vh]  rounded-xl overflow-hidden'>
                    <div className=' absolute h-full w-full bg-black opacity-20' />
                    <Image src="/journal-image.svg" alt="image" width={450} height={500} />
                </motion.div>
                <motion.div variants={{ hovered: {y: -5, x: 20, rotate: 0}}} className=' drop-shadow-[2px_-2px_3px_rgba(0,0,0,0.15)] absolute md:-top-[145px] z-0 md:left-[100px] md:right-auto -top-[10vh] left-[8vh] right-[2vh]  rounded-xl overflow-hidden'>
                    <div className=' absolute h-full w-full bg-black opacity-40' />
                    <Image src="/journal-image.svg" alt="image" width={450} height={500} />
                </motion.div>
            </div>
        </motion.a>
    )
}

export default JournalCard