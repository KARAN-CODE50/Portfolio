"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

const projectData = [
    {
        title: 'Gaming Account Marketplace',
        desc: 'I developed a thriving marketplace for buying and selling PUBG accounts. Key features are smooth user experience, Login/signup with google security, Mobile responsive. and payment integration through stripe',
        src: '/pubg-project.png',
        bgColor: 'radial-gradient(circle, rgba(26,93,157,1) 0%, rgba(24,24,24,1) 120%)',
        link: 'https://pubg-trade-hub.vercel.app/'
    },
    {
        title: 'AI Saarthi | Interactive AI-Powered Web Application',
        desc: 'I developed AI Saarthi, an innovative AI-powered web application designed to provide users with intuitive and interactive experiences. This project showcases my skills in web development, AI integration, and user interface design. The platform leverages advanced AI technologies to deliver insightful and personalized interactions, demonstrating my ability to create cutting-edge solutions that meet user needs.',
        src: '/ai-project.png',
        bgColor: 'radial-gradient(circle, rgba(157,26,26,1) 0%, rgba(24,24,24,1) 120%)',
        link: 'https://aisaarthi.streamlit.app/'
    }
]

interface ProjectProp {
    title: string,
    desc: string,
    src: string,
    bgColor: string,
    link: string
}

function Projects() {
    return (
        <div className=' text-white'>
            <div className='text-white md:px-10 bg-repeat bg-grid-wave min-h-screen bg-contain font-nohemi'>
                <Navbar />
                <div className='md:mx-20 mx-7 mt-16 flex flex-col md:gap-3 gap-2'>
                    <div className='leading-[25px] flex md:text-6xl text-2xl'>
                        <p>Projects</p>
                    </div>
                    <div className=' space-y-10 pt-4 pb-10'>
                        {projectData.map((item, index) => (
                            <ProjectCards key={index} link={item.link} title={item.title} desc={item.desc} src={item.src} bgColor={item.bgColor}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

function ProjectCards({title, desc, src, bgColor, link}: ProjectProp) {
    return (
        <a href={link} target='_blank' className='flex justify-center items-center md:min-h-[40em] min-h-[30em] rounded-[24px] bg-[radial-gradient(circle,rgba(255,255,255,1)0%,rgba(93,93,93,1)100%)]'>
            <div className='m-[1px] rounded-[23px] p-[8px] w-full md:h-[40em] h-[30em] bg-[#181818]'>
                <motion.div initial='initial' whileHover='hovered' className='bg-[radial-gradient(circle,rgba(255,255,255,1)0%,rgba(93,93,93,1)100%)] p-[0.7px] h-full rounded-[16px]'>
                    <motion.div variants={{ initial: {background: 'radial-gradient(circle,rgba(38,38,38,1) 0%,rgba(24,24,24,1) 100%)'}, hovered: {background: bgColor}}} transition={{ ease: 'easeInOut', duration: 0.5}} className='h-full relative overflow-hidden md:px-16 p-8 md:py-8 rounded-[15.3px]'>
                        <div className='flex justify-between relative z-20'>
                            <p className='md:text-3xl text-2xl pb-2 font-[400] tracking-wide'>{title}</p>
                            <motion.div variants={{ hovered: {x:10, scale: 1.05}}} transition={{ ease: 'easeInOut', duration: 0.5}}>
                                <ArrowRight />
                            </motion.div>
                        </div>
                        <p className=' relative h-[140px] md:h-auto text-ellipsis overflow-hidden mb-10 z-20 md:mb-0 md:text-md text-sm md:pb-10 font-[200] tracking-wide'>{desc}</p>
                        <motion.div variants={{ hovered: {y:-5, scale: 1.03}}} transition={{ ease: 'anticipate', duration: 0.5}} className=' relative z-20 flex items-center justify-center'>
                            <Image className='rounded-xl' src={src} alt='pubgimage' width={1150} height={500} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </a>
    )
}

export default Projects