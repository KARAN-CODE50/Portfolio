"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {  CircleChevronLeft, CircleChevronRight, ExternalLink, Instagram } from 'lucide-react'


interface VolProps {
    title: string,
    company: string,
    date: string,
    sector: string,
    desc: string,
    src: string[]
}

function VolCard({ title, company, date, sector, desc, src }: VolProps) {
    const [index, setIndex] = useState(0);
    const [ht, setht] = useState('100px');
    const [isReadMore, setIsReadMore] = useState(true);

    function readMore() {
        setht('full');
        setIsReadMore(false);
    }

    const forward = () => {
        setIndex((prevIndex) => (prevIndex + 1) % src.length);
    };

    const backward = () => {
        setIndex((prevIndex) => (prevIndex - 1 + src.length) % src.length);
    };


    return (
        <motion.div
            className='overflow-hidden flex flex-col border rounded-lg md:p-5 p-5 bg-[radial-gradient(circle,rgba(27,27,27,1)0%,rgba(0,0,0,1)300%)] transition-transform'
        >
            <div className='flex-[2]'>
                <div className='flex flex-col mb-2'>
                    <p className='md:text-3xl text-lg font-medium font-inter'>{title}</p>
                    <p className='md:text-xl text-white/80 uppercase font-inter'>{company}</p>
                    <p className='md:text-lg text-white/50 font-inter font-light'>{date}</p>
                </div>
                <div className='mb-4'>
                    <p className={`text-base h-[${ht}] text-ellipsis overflow-hidden md:text-left font-extralight font-inter`}>{desc}</p>
                    {isReadMore && <p onClick={readMore} className='font-inter hover:underline'>Read More</p>}
                </div>
            </div>
            {src.length !== 1 ? ( <div className='flex-1 flex items-center justify-center'>
                <motion.div
                    className='relative w-full h-[20em] border rounded-xl overflow-hidden'>
                        <div className=' absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(115,115,115,0)20%,rgba(115,115,115,0)80%,#000_100%)]'></div>
                    <CircleChevronLeft
                        onClick={backward}
                        color='#fff'
                        strokeWidth={2}
                        size={25}
                        className='absolute opacity-70 left-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                    />
                    <Image
                        className='w-full h-full object-cover select-none'
                        alt='image'
                        src={src[index]}
                        width={500}
                        height={500}
                    />
                    <CircleChevronRight
                        onClick={forward}
                        color='#fff'
                        strokeWidth={2}
                        size={25}
                        className='absolute opacity-70 right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
                    />
                </motion.div>
            </div>) : (
                <a href='https://www.instagram.com/letshelpeveryone/' className=' flex gap-2 items-center p-5 justify-center rounded-md bg-[linear-gradient(45deg,_#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)]'>
                    <Instagram size={30}/>
                    Instagram Page
                    <ExternalLink size={15} />
                </a>
            )}
        </motion.div>
    );
}


export default VolCard