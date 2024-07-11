import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <div className='pt-[5em] font-nohemi'>
            <div className='mx-[9%] p-8 md:border-2 border rounded-xl backdrop-blur-sm'>
                <div className='flex justify-between'>
                    <div className='hidden md:block w-[30em] pl-5 pr-20'>
                        <div className='border w-full h-full rounded-full' />
                    </div>
                    <div className=' text-right'>
                        <p className='text-6xl font-bold'>About me<span className=' text-base-purple'>.</span></p>
                        <p className=' font-light'>Explore my diverse range of projects, showcasing my ability to apply theoretical knowledge to practical solutions.</p>
                    </div>
                </div>
                <div className='md:flex md:flex-row flex flex-col-reverse md:pl-5 items-end mt-5 md:gap-10 gap-5'>
                    <p className='md:w-[80%] md:text-[1.5em] md:leading-[25px] text-sm font-light text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className='md:w-[50%] w-full h-32 md:h-[18em] mt-20 relative rounded-2xl'>
                        <div className='absolute z-10 bottom-0 rounded-xl overflow-hidden'>
                            <Image alt='pic' src='/pic.svg' width={500} height={500} />
                        </div>
                        <div className='absolute z-0 h-32 md:h-[18em] bg-gradient-to-b from-slate-200/50 to-white/0 rounded-xl w-full bottom-0'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About