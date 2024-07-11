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
        <div className=' relative font-nohemi p-5 overflow-hidden'>
            <div>
                <p className='text-2xl font-medium'>Karan Sarawagi<span className=' text-base-purple'>.</span></p>
            </div>
            <div className='grid grid-cols-2 gap-2 mb-7 mt-4'>
                {footerData.map((section, index) => (
                    <div key={index} className='pb-3'>
                        <p className='text-lg'>{section.head}</p>
                        <div className='text-sm font-extralight tracking-wide'>
                            {section.data.map((item, subIndex) => (
                                <p key={subIndex}>{item}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <p className='left-0 text-nowrap bottom-0 absolute opacity-5 text-5xl w-full font-medium'>Karan Sarawagi.</p>
        </div>
    );
}

export default Footer;
