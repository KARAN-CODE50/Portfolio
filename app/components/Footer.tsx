import React from 'react';

const footerData = [
    {
        head: 'Information',
        data: ['About Me', 'Work Experience', 'Projects']
    },
    {
        head: 'Links',
        data: ['Github', 'LinkedIn', 'Instagram']
    },
    {
        head: 'Contact Me',
        data: ['+91 875xxxxxx215', 'email@address.in']
    },
];

function Footer() {
    return (
        <div className=' relative md:flex md:items-start md:justify-between md:py-10 font-nohemi p-5 overflow-hidden md:px-20'>
            <div>
                <p className='text-2xl font-medium md:text-4xl'>Karan Sarawagi<span className=' text-base-purple'>.</span></p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-10 mb-7 mt-4 md:mt-0'>
                {footerData.map((section, index) => (
                    <div key={index} className='pb-3 md:pb-16'>
                        <p className='text-lg md:text-xl'>{section.head}</p>
                        <div className='text-sm md:text-lg font-extralight tracking-wide'>
                            {section.data.map((item, subIndex) => (
                                <p key={subIndex}>{item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <p className='left-16 text-nowrap bottom-[-30px] absolute opacity-5 md:opacity-[2%] text-5xl md:text-[10em] w-full font-medium'>Karan Sarawagi.</p>
        </div>
    );
}

export default Footer;
