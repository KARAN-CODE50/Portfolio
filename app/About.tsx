import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <div className='pt-[5em] font-nohemi'>
            <div className='mx-[9%] p-8 border-2 rounded-xl backdrop-blur-sm'>
                <div className='flex justify-between'>
                    <div className='w-[30em] pl-5 pr-20'>
                        <div className='border w-full h-full rounded-full' />
                    </div>
                    <div className=' text-right'>
                        <p className='text-6xl font-bold'>About me<span className=' text-base-purple'>.</span></p>
                        <p className=' font-light'>Explore my diverse range of projects, showcasing my ability to apply theoretical knowledge to practical solutions.</p>
                    </div>
                </div>
                <div className='flex pl-5 items-end mt-5 gap-10'>
                    <p className='w-[80%] mt-10 text-[1.4em] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='w-[50%] relative  rounded-2xl'>
                        <div className='absolute z-10 bottom-0'>
                            <Image alt='pic' src='/pic.svg' width={500} height={500} />
                        </div>
                        <div className='absolute z-0 h-[21em] bg-gradient-to-b from-slate-200/50 to-white/0 rounded-xl w-full bottom-0'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About