import React from 'react'
import Navbar from '../components/Navbar'
import PatentCards from './PatentCards'
import JournalCard from './JournalCard'
import PaperCard from './PaperCard'
import BookCards from './BookCards'

const patentsData = [
  {
    title: "Master Slave Robotic Arm",
    desc: "This invention discloses a novel control system and design for robotic arms, aiming to improve user experience, flexibility, and customizability. A key feature is a master-slave control system with a miniature robotic arm mimicking the degrees of freedom of a larger target arm. Users can intuitively control the target arm in real-time by manipulating the miniature arm, offering a more natural experience compared to traditional controls.",
    image: "/patent-arm-image.svg",
    href: "https://drive.google.com/drive/folders/1SwgwMR3Ka3n6YS-d5DDx_EhdjEzy-mML"
  },
  {
    title: "Plant Pathogen Detection Device",
    desc: "The Plant Pathogen Detection Device is an innovative tool designed to quickly and accurately identify harmful pathogens in plants. Utilizing advanced sensor technology, this device helps farmers and researchers monitor plant health, prevent disease spread, and ensure optimal crop yields, contributing significantly to sustainable agriculture practices.",
    image: "/patent-plant-image.svg",
    href: "https://drive.google.com/drive/folders/1SwgwMR3Ka3n6YS-d5DDx_EhdjEzy-mML"
  },
]

const journalData = [
  {
    title: "Self-Trained Convolutional Neural Network (CNN) for Tuberculosis Diagnosis in Medical Imaging",
    desc: "This study shows how well deep learning-in particular, CNNs-performs in the identification of tuberculosis. Subsequent efforts have to give precedence to optimising the model by obtaining more extensive datasets from the local hospitals and localities, which are vulnerable to TB, and stress the possibility of augmenting diagnostic knowledge in medical imaging via machine learning methodologies.",
    image: "/journal-image.svg"
  }
]

const researchData = [
  {
    title: "Intelligent Robotic Arm: Adaptive Collision Avoidance Using Current Fluctuation Analysis in Human-Proximity Scenarios",
    link: "https://www.preprints.org/manuscript/202406.1794/v1"
  },
  {
    title: "Deep Learning for Early Disease Detection: A CNN Approach to Classify Potato, Tomato, and Pepper Leaf Diseases",
    link: "https://www.preprints.org/manuscript/202406.0986/v1"
  },
  {
    title: "Predicting Landslides with Machine Learning: A Data-Driven Approach",
    link: "https://ieeexplore.ieee.org/abstract/document/10584875"
  },
  {
    title: "Cloud based IoT platforms for Home Automation System",
    link: "https://easychair.org/publications/preprint/CR8x"
  },
  {
    title: "Quantum Blend: the Next Frontier of Artificial Intelligence(AI)-Driven Hyper Realism",
    link: "https://easychair.org/publications/preprint/P5gG"
  },
]

const bookData = [
  {
    title: "Machine Learning and Data Ethics: A Design of Integrated Framework Towards Intelligent Decision Making",
    link: "https://easychair.org/publications/preprint_download/tQFm"
  },
  {
    title: "Leveraging Advanced AI Algorithms to Revolutionize Health Monitoring for Seniors",
    link: "https://easychair.org/publications/preprint_download/1vRH"
  },
]

function Papers() {
  return (
    <div className='text-white md:px-10 bg-repeat bg-grid-wave-light min-h-screen bg-contain font-nohemi'>
      <Navbar />
      <div className='md:mx-20 mx-7 mt-16 flex flex-col md:gap-3 gap-2'>
        <div className='leading-[25px] flex md:text-6xl text-2xl'>
          <p>Published Papers</p>
        </div>
        <p className='md:text-xl text-[0.8em] text-neutral-200 font-light font-["FK_Roman_Standard_Trial_Regular"]'>Explore a comprehensive collection of my scholarly contributions across various formats. This includes patents that highlight innovative solutions, peer-reviewed journal articles that present in-depth research findings, conference papers that share insights at leading industry events, and book chapters that provide extensive analyses on key topics. Each piece reflects my dedication to advancing knowledge and contributing to the academic community.</p>
      </div>
      <div className='md:mx-20 mx-7 md:mt-16 mt-7'>
        <p className='md:text-5xl text-xl'>Patents</p>
        <div className='md:pt-5 pt-2 md:pb-20 pb-10 flex flex-col gap-8'>
          {patentsData.map((item, i) => (
            <PatentCards key={i} no={i} title={item.title} desc={item.desc} image={item.image} href={item.href} />
          ))}
        </div>
        <div>
          <p className='md:text-5xl text-xl'>Journal</p>
          <div className='md:pt-5 pt-2 md:pb-20 pb-10'>
            {journalData.map((item, i) => (
              <JournalCard key={i} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
        <div>
          <p className='md:text-5xl text-xl'>Conference Paper</p>
          <div className='md:pt-5 pt-2 md:pb-20 pb-10 grid md:grid-cols-3 md:gap-10 gap-5'>
            {researchData.map((item, i) => (
              <PaperCard key={i} title={item.title} link={item.link}/>
            ))}
          </div>
        </div>
        <div>
          <p className='md:text-5xl text-xl'>Book Chapters</p>
          <div className='md:pt-5 pt-2 md:pb-20 pb-10 flex md:flex-row flex-col md:gap-10 gap-5'>
            {bookData.map((item, i) => (
              <BookCards key={i} title={item.title} href={item.link}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Papers