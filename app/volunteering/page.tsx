import React from 'react'
import Navbar from '../components/Navbar'
import VolCard from './VolCard'
import YogaCard from './YogaCard'

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



function Volunteering() {
    return (
        <div className='text-white md:px-10 bg-repeat bg-grid-wave min-h-screen bg-contain font-nohemi'>
            <Navbar />
            <div className='md:mx-20 mx-7 md:mt-16 mt-10 flex flex-col md:gap-3'>
                <div className='md:grid md:grid-cols-2 gap-4 flex flex-col'>
                    {VolData.map((i, idx) => (
                        <VolCard key={idx} title={i.title} company={i.company} date={i.date} sector={i.sector} desc={i.desc} src={i.src} />
                    ))}
                </div>
                <div>
                    <YogaCard />
                </div>
            </div>
        </div>
    )
}


export default Volunteering