import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="md:pt-[5em] pt-[5vh] font-nohemi">
      <div className="mx-[9%] p-8 md:border-2 border rounded-xl blur-bg-md">
        <div className="flex justify-between">
          <div className="hidden md:block w-[30em] pl-5 pr-20">
            <div className="bg-art-bg bg-cover opacity-25 w-full h-full rounded-full" />
          </div>
          <div className=" text-right">
            <p className="text-6xl font-bold">
              About me<span className=" text-base-purple">.</span>
            </p>
            <p className=" font-light">
              Explore my diverse range of projects, showcasing my ability to
              apply theoretical knowledge to practical solutions.
            </p>
          </div>
        </div>
        <div className="md:flex md:flex-row flex flex-col-reverse md:pl-5 items-end mt-5 md:gap-10 gap-5">
          <p className="md:w-[80%] md:text-[1.25em] md:leading-[30px] text-sm font-extralight text-justify">
            A versatile professional with a unique blend of technical expertise
            and entrepreneurial drive. With a strong foundation in machine
            learning, I have done several research internships including Taiwan
            along with securing 2 national design patents. As a tech-savvy
            entrepreneur, I founded a platform for buying and selling digital
            assets, leveraging Telegram for traffic generation, that exceeded 5M
            in revenue. Beyond my technical and entrepreneurial endeavors, I’ve
            held financial roles in stock trading firms, driving operations and
            aligning business goals with market trends. I’m also deeply
            committed to giving back through volunteering, whether it's as an
            NCC cadet, a plantation volunteer for environmental conservation, or
            mentoring young minds in tech and entrepreneurship. I thrive at the
            intersection of innovation, leadership, and impact. Whether it’s
            building sophisticated AI models, managing operations in high-paced
            environments, or creating platforms that disrupt industries, I am
            always eager to tackle challenges and make a difference.
            <span className="bold">
              Let’s connect if you’re interested in collaborating on
              groundbreaking projects, exploring entrepreneurial opportunities,
              or driving meaningful change in the tech and business world.
            </span>
          </p>
          <div className="md:w-[50%] w-full h-32 md:h-[18em] mt-20 relative rounded-2xl">
            <div className="absolute z-10 bottom-0 rounded-xl overflow-hidden">
              <Image alt="pic" src="/pic.svg" width={500} height={500} />
            </div>
            <div className="absolute z-0 h-32 md:h-[18em] bg-gradient-to-b from-slate-200/50 to-white/0 rounded-xl w-full bottom-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
