"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowLeftCircle, ArrowRightCircle, CircleChevronLeft, CircleChevronRight, ExternalLink, Instagram } from 'lucide-react'

const VolData = [
    {
        title: 'Plantation Volunteer',
        company: 'Raj Agritech',
        date: '',
        sector: 'Environment',
        desc: 'As a Plantation Volunteer, I actively participated in tree planting drives and environmental conservation efforts. My role involved planting and nurturing trees, organizing community awareness programs, and collaborating with local organizations to promote sustainable practices. Through this experience, I developed a deep commitment to environmental stewardship and contributed to creating greener, healthier communities.',
        src: [
            '/plant-1.jpeg',
            '/plant-2.jpeg',
        ]
    },
    {
        title: 'Cadet',
        company: 'NATIONAL CADET CORPS - India',
        date: 'Jan 2022 - Feb 2024 · 2 yrs 2 mos',
        sector: 'Social Services',
        desc: 'As an NCC volunteer, I actively participated in various training camps, community service activities, and leadership programs. I developed strong leadership, discipline, and teamwork skills while contributing to social causes and community development initiatives. My experience with NCC has enriched my ability to work under pressure, coordinate with diverse teams, and serve the community with dedication and integrity.',
        src: [
            '/cadet-1.jpeg',
            '/cadet-2.jpeg',
        ]
    },
    {
        title: 'Community Volunteer',
        company: 'Goldman Sachs',
        date: 'May 2023 - Aug 2023 · 4 mos',
        sector: 'Children',
        desc: 'Worked with Goldman Sachs in the community teamworks department as a volunteer for children to make and distribute free food for the needy',
        src: [
            '/goldman-1.jpeg',
            '/goldman-2.jpeg',
        ]
    },
    {
        title: 'Donation Volunteer',
        company: 'Lets Help Everyone',
        date: 'Jan 2022 - Present · 2 yrs 8 mos',
        sector: 'Poverty Alleviation',
        desc: 'Helping Hands, Happy Hearts: Every donation is a step towards a brighter future Please check the Instagram page here for some reactions that we captured - https://www.instagram.com/letshelpeveryone In my college life I and my friend Abhinav as Community Outreach Volunteers, I played a pivotal role in organizing and facilitating donation drives aimed at uplifting individuals in need. Through this initiative, We were able to make a tangible impact on the lives of many by providing essential resources and fostering meaningful interactions. Capturing the heartfelt reactions and stories of those we helped was a deeply rewarding experience, highlighting the profound difference that compassion and generosity can make.',
        src: [
            ''
        ]
    },
]

interface VolProps {
    title: string,
    company: string,
    date: string,
    sector: string,
    desc: string,
    src: string[]
}

function Volunteering() {
    return (
        <div className='text-white md:px-10 bg-repeat bg-grid-wave min-h-screen bg-contain font-nohemi'>
            <Navbar />
            <div className='md:mx-20 mx-7 mt-16 flex flex-col md:gap-3 gap-2'>
                <div className='leading-[25px] flex md:text-6xl text-2xl'>
                    <p>Volunteering</p>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    {VolData.map((i, idx) => (
                        <VolCard key={idx} title={i.title} company={i.company} date={i.date} sector={i.sector} desc={i.desc} src={i.src} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function VolCard({ title, company, date, sector, desc, src }: VolProps) {
    const [index, setIndex] = useState(0);

    const forward = () => {
        setIndex((prevIndex) => (prevIndex + 1) % src.length);
    };

    const backward = () => {
        setIndex((prevIndex) => (prevIndex - 1 + src.length) % src.length);
    };

    console.log(src.length)

    return (
        <motion.div
            className='overflow-hidden flex flex-col border rounded-lg p-5 bg-[radial-gradient(circle,rgba(27,27,27,1)0%,rgba(0,0,0,1)300%)] transition-transform'
        >
            <div className='flex-[2] mb-4'>
                <div className='flex flex-col mb-2'>
                    <p className='text-3xl tracking-wide'>{title}</p>
                    <p className='text-xl font-light'>{company}</p>
                    <p className='text-lg tracking-wider font-light'>{date}</p>
                </div>
                <p className='text-base leading-relaxed'>{desc}</p>
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

export default Volunteering