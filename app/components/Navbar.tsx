"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { CircleXIcon, GanttChart } from 'lucide-react'
import React, { useState } from 'react'

const navbarLinks = [
  // {
  //   name: 'About',
  //   link: 'about'
  // },
  {
    name: 'Publishings',
    link: 'papers'
  },
  {
    name: 'Experience',
    link: 'experience'
  },
  {
    name: 'Projects',
    link: 'projects'
  },
  {
    name: 'Volunteering',
    link: 'volunteering'
  },
  {
    name: 'Contact',
    link: null
  },
]

const DURATION = 0.09;
const STAGGER = 0.025;

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight - 1000,
      behavior: 'smooth',
    });
  };

  function toggleMenu() {
    setOpenMenu(prevState => !prevState);
  }

  function twoFunction() {
    scrollToBottom();
    toggleMenu();
  }

  return (
    <div className='flex justify-between items-center pt-6 px-7 md:pt-10 md:px-20 font-nohemi'>
      <div className='text-[1.3em] md:text-3xl font-medium'>
        <a href='/'>Karan Sarawagi<span className='text-base-purple'>.</span></a>
      </div>
      <div onClick={toggleMenu} className='md:hidden rounded-full p-1 backdrop-blur-sm'>
        <GanttChart size={30} />
      </div>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ ease: [0.87, 0, 0.13, 1] }}
            className='blur-bg rounded-l-lg border-l-2 border-zinc-400 h-screen space-y-5 flex flex-col items-end z-50 p-10 fixed right-0 top-0'>
            <CircleXIcon onClick={toggleMenu} className='mb-10 text-zinc-500' />
            {navbarLinks.map((item, i) => (
              <a onClick={!item.link ? twoFunction : undefined} key={i} className='block text-white' href={item.link ? `/${item.link}` : "#"}>{item.name}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='hidden md:flex text-lg gap-[4em] font-light'>
        {navbarLinks.map((item, index) => (
          <motion.a
            initial="initial"
            whileHover="hovered"
            className='relative overflow-hidden leading-none'
            key={index}
            href={item.link ? `/${item.link}` : "#"}
            onClick={!item.link ? scrollToBottom : undefined}
          >
            <div>
              {item.name.split('').map((char, index) => (
                <motion.span
                  variants={{
                    initial: {
                      y: 0,
                      opacity: 1
                    },
                    hovered: {
                      y: "-100%",
                      opacity: 0
                    },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * index
                  }}
                  key={index}
                  className=' inline-block'>
                  {char}
                </motion.span>
              ))}
            </div>
            <motion.div
              variants={{ initial: { x: "-100%" }, hovered: { x: 0 } }}
              transition={{ ease: [0.76, 0, 0.24, 1] }}
              className='border-b-2 absolute inset-0 w-full'
            ></motion.div>
            <div className=' absolute inset-0'>
              {item.name.split('').map((char, index) => (
                <motion.span
                  variants={{
                    initial: {
                      y: "100%",
                      opacity: 0
                    },
                    hovered: {
                      y: 0,
                      opacity: 1
                    },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * index
                  }}
                  key={index}
                  className=' inline-block'>
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Navbar