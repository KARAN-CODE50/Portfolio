"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import { Clock, FlaskConical, MapPin, Microscope, PieChart, NotebookPen, Building2 } from 'lucide-react'
import Image from 'next/image';
import { animate, delay, easeInOut, motion } from 'framer-motion';
import Footer from '../components/Footer';

interface ExpData {
    year: string;
    duration: string;
    role: string;
    position: string;
    company: string;
    location: string;
    desc: string;
    image: string;
    icon: keyof typeof icons; // Type for icon based on the keys of the icons object
}

const icons = {
    FlaskConical,
    Microscope,
    PieChart,
    NotebookPen,
    Building2,
};

const expData: ExpData[] = [
    {
        year: "May 2024 - Jul 2024 ",
        duration: "3 Months",
        role: "Research Scholar",
        position: "Internship",
        company: "National Central University",
        location: "Taoyuan City, Taiwan · On-site",
        desc: "Working with Prof. Chih Yang Lin on Transforming detection of Alzheimer Disease using MRI images using new Algorithms and computer vision techniques",
        icon: "FlaskConical",
        image: "ncu.svg"
    },
    {
        year: "Oct 2023 - Apr 2024 ",
        duration: "7 Months",
        role: "Research Assistant",
        position: "Full-time",
        company: "CHANDIGARH UNIVERSITY",
        location: "Mohali district, India · On-site",
        desc: "Worked under the supervision of Dr. Bhupinder Kaur on developing a Robotic arm with 5 DOF along with teleops mechanism integrated using a small miniature arm 3d printed all the materials and filed a patent for the same",
        icon: "Microscope",
        image: "cu.svg"
    },
    {
        year: "Jun 2023 - Aug 2023",
        duration: "3 Months",
        role: "Summer Analyst",
        position: "Internship",
        company: "Goldman Sachs",
        location: "Hyderabad, Telangana, India · On-site",
        desc: "Engineered Money Movements Dashboard from scratch which had usage of Ag-Grid with ui toolkit and various filters in Reactjs while backend was built in Spring Boot. • Worked with GraphQL to make ultimate advantage of Rest APIs,decreasing fetching time by 65%. • Used Rest Clients to connect various backend services and wrote various Rest APIs for data collection. • Experienced in leveraging Mithra, Sybase, and Aqua Data Studio to optimize data retrieval processes within databases. • Used Junit , Swagger, Postman and Graphi ql for Realtime api testing saving 45% time.",
        icon: "PieChart",
        image: "gold.svg"
    },
    {
        year: "Jan 2022 - Apr 2023",
        duration: "1 Year 4 Months",
        role: "Research and Development Product Manager",
        position: "Full-time",
        company: "RAJ COMMODITIES PRIVATE LIMITED",
        location: "Suratgarh, Rajasthan, India · Remote",
        desc: "As a Product Manager and Financial Analyst at Raj Commodities, I led the development and enhancement of our trading platform, ensuring a seamless and user-friendly experience for our clients. As a small team we tried to implement innovative features, analyzed market trends to identify new opportunities, and provided financial insights to inform product strategies. My role involved driving user engagement, ensuring compliance with regulatory standards, and optimizing product performance through data-driven insights. Additionally, I conducted financial analysis to support strategic decision-making and enhance the firm's market positioning.",
        icon: "NotebookPen",
        image: "raj.svg"
    },
    {
        year: "Sep 2020 - Feb 2022",
        duration: "1 Year 6 Months",
        role: "Entrepreneur",
        position: "Self-employed",
        company: "Pubg Tradehub",
        location: "Chandigarh, India · On-site",
        desc: "A marketplace for gamers to trade their accounts in a fast and legit way, Initially started with telegram as the main marketplace and growingly created a website for the same, generated over 5M INR in revenue at a personal level.",
        icon: "Building2",
        image: "pubg.svg"
    },
]

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 200
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            easeInOut,
            delay: 0.05 * index,
        }
    })
}

function Experience() {
    return (
        <div className=' text-white md:px-0 bg-repeat bg-grid-wave min-h-screen bg-contain font-nohemi'>
            <div className=' md:px-10 pb-20'>
                <Navbar />
                <div className='md:mx-20 mx-7 mt-16 flex flex-col md:gap-3 gap-2'>
                    <div className='leading-[25px] flex md:text-6xl text-2xl'>
                        <p>Experience</p>
                    </div>
                </div>
                <div className=' relative grid grid-cols-[4fr_1fr_4fr] min-h-64 mx-20 py-10'>
                    <motion.div initial={{ height: 0 }} animate={{ height: '100%' }} transition={{ duration: 3, ease: 'easeInOut' }} className='absolute h-full w-1 rounded-full opacity-40 bg-white left-0 right-0 mx-auto'></motion.div>
                    {expData.map((item, index) => {
                        const Icon = icons[item.icon];
                        return (
                            <React.Fragment key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <motion.div
                                            variants={fadeInAnimationVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{
                                                once: true,
                                            }}
                                            whileHover="hovered"
                                            custom={index}
                                            className=' relative'
                                        >
                                            <motion.div className=' relative overflow-hidden rounded-xl bg-gradient-to-tl from-white/40 to-[#cecece]/10 blur-bg-sm'>
                                                <motion.div variants={{ initial: { opacity: 0 }, hovered: { opacity: 0.9 } }} className='absolute h-full w-full bg-black inset-0 z-50'></motion.div>
                                                {item.image === "ncu.svg" && <Image className='absolute -right-10 -bottom-10 opacity-25' src={item.image} width={350} height={500} alt='ncu' />}
                                                {item.image === "gold.svg" && <Image className='absolute -right-4 -bottom-5 opacity-20' src={item.image} width={380} height={500} alt='ncu' />}
                                                {item.image === "pubg.svg" && <Image className='absolute -right-0 -bottom-5 opacity-25' src={item.image} width={300} height={500} alt='ncu' />}
                                                <div className='flex relative z-20 flex-col justify-center px-10 py-16 rounded-xl '>
                                                    <p className='font-light tracking-wide text-2xl'>{item.position}</p>
                                                    <p className=' text-[2.5em]'>{item.role}</p>
                                                    <div className='flex gap-3 pb-2'>
                                                        <div className='w-5 h-5 pt-[2px]'>
                                                            <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 0.333344C26.205 0.333344 33.6667 7.79501 33.6667 17C33.6667 26.205 26.205 33.6667 17 33.6667C7.79504 33.6667 0.333374 26.205 0.333374 17C0.333374 7.79501 7.79504 0.333344 17 0.333344ZM17 7.00001C16.558 7.00001 16.1341 7.17561 15.8215 7.48817C15.509 7.80073 15.3334 8.22465 15.3334 8.66668V17C15.3335 17.442 15.5091 17.8659 15.8217 18.1783L20.8217 23.1783C21.136 23.4819 21.557 23.6499 21.994 23.6461C22.431 23.6423 22.8491 23.4671 23.1581 23.158C23.4671 22.849 23.6424 22.431 23.6462 21.994C23.65 21.557 23.482 21.136 23.1784 20.8217L18.6667 16.31V8.66668C18.6667 8.22465 18.4911 7.80073 18.1786 7.48817C17.866 7.17561 17.4421 7.00001 17 7.00001Z" fill="white" /></svg>
                                                        </div>
                                                        <p className=' text-xl font-light tracking-wide'>{item.company}</p>
                                                    </div>
                                                    <div className='flex gap-3'>
                                                        <div className='w-5 h-5'>
                                                            <svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 0.333313C18.9782 0.333313 22.7936 1.91367 25.6066 4.72671C28.4196 7.53976 30 11.3551 30 15.3333C30 20.4566 27.2067 24.65 24.2633 27.6583C22.7928 29.1451 21.1882 30.493 19.47 31.685L18.76 32.1683L18.4267 32.39L17.7983 32.79L17.2383 33.1316L16.545 33.535C16.0744 33.8036 15.5419 33.9449 15 33.9449C14.4581 33.9449 13.9256 33.8036 13.455 33.535L12.7617 33.1316L11.895 32.5983L11.575 32.39L10.8917 31.935C9.03805 30.6808 7.31151 29.2485 5.73667 27.6583C2.79333 24.6483 0 20.4566 0 15.3333C0 11.3551 1.58035 7.53976 4.3934 4.72671C7.20644 1.91367 11.0218 0.333313 15 0.333313ZM15 10.3333C14.3434 10.3333 13.6932 10.4626 13.0866 10.7139C12.48 10.9652 11.9288 11.3335 11.4645 11.7978C11.0002 12.2621 10.6319 12.8133 10.3806 13.4199C10.1293 14.0265 10 14.6767 10 15.3333C10 15.9899 10.1293 16.6401 10.3806 17.2467C10.6319 17.8534 11.0002 18.4046 11.4645 18.8688C11.9288 19.3331 12.48 19.7014 13.0866 19.9527C13.6932 20.204 14.3434 20.3333 15 20.3333C16.3261 20.3333 17.5979 19.8065 18.5355 18.8688C19.4732 17.9312 20 16.6594 20 15.3333C20 14.0072 19.4732 12.7355 18.5355 11.7978C17.5979 10.8601 16.3261 10.3333 15 10.3333Z" fill="white" /></svg>
                                                        </div>
                                                        <p className=' text-xl font-light tracking-wide'>{item.location}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            {<motion.div variants={{ initial: { opacity: 0 }, hovered: { opacity: 1 } }} className='absolute top-0 bottom-0 my-auto h-fit px-8 py-5'>
                                                Work Description <br />
                                                <p className=' font-light'>{item.desc}</p>
                                            </motion.div>}
                                        </motion.div>

                                        <motion.div
                                            variants={fadeInAnimationVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{
                                                once: true,
                                            }}
                                            custom={index}
                                            className='justify-self-center self-center bg-white p-2 rounded-full'
                                        >
                                            <Icon size={30} color='black' opacity={0.8} />
                                        </motion.div>

                                        <motion.div
                                            variants={fadeInAnimationVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{
                                                once: true,
                                            }}
                                            custom={index}
                                            className=' self-center text-2xl'
                                        >
                                            {item.year} <br /> <span className=' bg-white p-1 rounded-md text-black font-medium text-xl'> {item.duration}</span>
                                        </motion.div>
                                    </>
                                ) : (
                                    <>
                                        <motion.div
                                            variants={fadeInAnimationVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{
                                                once: true,
                                            }}
                                            custom={index}
                                            className=' self-center justify-self-end text-2xl'
                                        >
                                            {item.year} <br /> <span className=' bg-white p-1 rounded-md text-black font-medium text-xl'> {item.duration}</span>
                                        </motion.div>

                                        <motion.div
                                            variants={fadeInAnimationVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{
                                                once: true,
                                            }}
                                            custom={index}
                                            className='justify-self-center self-center bg-white p-2 rounded-full'
                                        >
                                            <Icon size={30} color='black' opacity={0.8} />
                                        </motion.div>

                                        <motion.div
                                            variants={fadeInAnimationVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{
                                                once: true,
                                            }}
                                            whileHover="hovered"
                                            custom={index}
                                            className=' relative'
                                        >
                                            <motion.div className=' relative overflow-hidden rounded-xl bg-gradient-to-tl from-white/40 to-[#cecece]/10 blur-bg-sm'>
                                                <motion.div variants={{ initial: { opacity: 0 }, hovered: { opacity: 0.9 } }} className='absolute h-full w-full bg-black inset-0 z-50'></motion.div>
                                                {item.image === "cu.svg" && <Image className='absolute right-5 -bottom-5 opacity-25' src={item.image} width={180} height={500} alt='ncu' />}
                                                {item.image === "raj.svg" && <Image className='absolute -right-16 -bottom-10 opacity-20' src={item.image} width={400} height={500} alt='ncu' />}

                                                <div className='flex relative z-20 flex-col justify-center px-10 py-16 rounded-xl '>
                                                    <p className='font-light tracking-wide text-2xl'>{item.position}</p>
                                                    <p className=' text-[2.5em] leading-10 py-3'>{item.role}</p>
                                                    <div className='flex gap-3 pb-2'>
                                                        <div className='w-5 h-5 pt-[2px]'>
                                                            <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 0.333344C26.205 0.333344 33.6667 7.79501 33.6667 17C33.6667 26.205 26.205 33.6667 17 33.6667C7.79504 33.6667 0.333374 26.205 0.333374 17C0.333374 7.79501 7.79504 0.333344 17 0.333344ZM17 7.00001C16.558 7.00001 16.1341 7.17561 15.8215 7.48817C15.509 7.80073 15.3334 8.22465 15.3334 8.66668V17C15.3335 17.442 15.5091 17.8659 15.8217 18.1783L20.8217 23.1783C21.136 23.4819 21.557 23.6499 21.994 23.6461C22.431 23.6423 22.8491 23.4671 23.1581 23.158C23.4671 22.849 23.6424 22.431 23.6462 21.994C23.65 21.557 23.482 21.136 23.1784 20.8217L18.6667 16.31V8.66668C18.6667 8.22465 18.4911 7.80073 18.1786 7.48817C17.866 7.17561 17.4421 7.00001 17 7.00001Z" fill="white" /></svg>
                                                        </div>
                                                        <p className=' text-xl font-light tracking-wide'>{item.company}</p>
                                                    </div>
                                                    <div className='flex gap-3'>
                                                        <div className='w-5 h-5'>
                                                            <svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 0.333313C18.9782 0.333313 22.7936 1.91367 25.6066 4.72671C28.4196 7.53976 30 11.3551 30 15.3333C30 20.4566 27.2067 24.65 24.2633 27.6583C22.7928 29.1451 21.1882 30.493 19.47 31.685L18.76 32.1683L18.4267 32.39L17.7983 32.79L17.2383 33.1316L16.545 33.535C16.0744 33.8036 15.5419 33.9449 15 33.9449C14.4581 33.9449 13.9256 33.8036 13.455 33.535L12.7617 33.1316L11.895 32.5983L11.575 32.39L10.8917 31.935C9.03805 30.6808 7.31151 29.2485 5.73667 27.6583C2.79333 24.6483 0 20.4566 0 15.3333C0 11.3551 1.58035 7.53976 4.3934 4.72671C7.20644 1.91367 11.0218 0.333313 15 0.333313ZM15 10.3333C14.3434 10.3333 13.6932 10.4626 13.0866 10.7139C12.48 10.9652 11.9288 11.3335 11.4645 11.7978C11.0002 12.2621 10.6319 12.8133 10.3806 13.4199C10.1293 14.0265 10 14.6767 10 15.3333C10 15.9899 10.1293 16.6401 10.3806 17.2467C10.6319 17.8534 11.0002 18.4046 11.4645 18.8688C11.9288 19.3331 12.48 19.7014 13.0866 19.9527C13.6932 20.204 14.3434 20.3333 15 20.3333C16.3261 20.3333 17.5979 19.8065 18.5355 18.8688C19.4732 17.9312 20 16.6594 20 15.3333C20 14.0072 19.4732 12.7355 18.5355 11.7978C17.5979 10.8601 16.3261 10.3333 15 10.3333Z" fill="white" /></svg>
                                                        </div>
                                                        <p className=' text-xl font-light tracking-wide'>{item.location}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                            {<motion.div variants={{ initial: { opacity: 0 }, hovered: { opacity: 1 } }} className='absolute top-0 bottom-0 my-auto h-fit px-8 py-5'>
                                                Work Description <br />
                                                <p className=' font-light'>{item.desc}</p>
                                            </motion.div>}
                                        </motion.div>

                                    </>
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Experience