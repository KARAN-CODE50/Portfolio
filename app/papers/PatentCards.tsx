"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PatentProp {
    no: number,
    title: string,
    desc: string,
    image: string,
    href: string
}


function PatentCards({ no, title, desc, image, href }: PatentProp) {

    const titleVariants = (no: number) => ({
        hovered: { color: no === 1 ? "#619AF4" : "#FF9187" }
    });

    return (
        <motion.a href={href} target="_blank" whileHover="hovered" initial="initial" className='flex even:text-right even:flex-row-reverse items-center blur-bg-lg border rounded-xl overflow-hidden min-h-[400px]'>
            <div className='flex-[4] p-10 flex flex-col gap-5'>
                <motion.p variants={titleVariants(no)} className=' text-4xl'>{title}</motion.p>
                <p className=' text-lg opacity-80 font-["FK_Roman_Standard_Trial_Regular"]'>{desc}</p>
                <motion.p variants={titleVariants(no)} className=' text-2xl font-light underline tracking-wider'>Patent Filed</motion.p>
            </div>
            <div className={`flex-[3] m-2 relative ${no === 1 && 'scale-x-[-1]'}`}>
                <motion.div variants={{ initial: { rotate: "-15deg" }, hovered: { rotate: "-5deg" } }} className=' drop-shadow-[-2px_-2px_3px_rgba(0,0,0,0.15)] absolute -right-5 -top-[110px] z-50 rotate-[-15deg] border-black overflow-hidden rounded-xl w-fit'>
                    <Image alt='image' src={image} width={370} height={500} />
                </motion.div>
                <motion.div variants={{ initial: { rotate: "-25deg" }, hovered: { rotate: "-23deg" } }} className=' drop-shadow-[-2px_-2px_3px_rgba(0,0,0,0.15)] absolute right-0 -top-[110px] z-30 rotate-[-25deg] border-black overflow-hidden rounded-xl w-fit'>
                    <div className=' absolute inset-0 bg-black opacity-20'></div>
                    <Image alt='image' src={image} width={370} height={500} />
                </motion.div>
                <motion.div variants={{ initial: { rotate: "-34deg" }, hovered: { rotate: "-44deg" } }} className=' drop-shadow-[-2px_-2px_3px_rgba(0,0,0,0.15)] absolute right-4 -top-[110px] z-0 rotate-[-34deg] border-black overflow-hidden rounded-xl w-fit'>
                    <div className=' absolute inset-0 bg-black opacity-40'></div>
                    <Image alt='image' src={image} width={370} height={500} />
                </motion.div>
            </div>
        </motion.a>
    )
}

export default PatentCards