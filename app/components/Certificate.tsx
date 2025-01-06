import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Certificate() {
  return (
    <a
      href="https://www.linkedin.com/in/karan-sarawagi-3883b3200/overlay/1731670485676/single-media-viewer/?profileId=ACoAADNQ9VgB-gSiJf3PjEfoiHtmfy_YzibH-q4"
      target="_blank"
      className="flex mx-[9%] mt-[5em] justify-center items-center rounded-[24px] bg-[radial-gradient(circle,rgba(255,255,255,1)0%,rgba(93,93,93,1)100%)]"
    >
      <div className="m-[1px] rounded-[23px] p-[8px] w-full bg-[#181818]">
        <motion.div
          initial="initial"
          whileHover="hovered"
          className="bg-[radial-gradient(circle,rgba(255,255,255,1)0%,rgba(93,93,93,1)100%)] p-[0.7px] h-full rounded-[16px]"
        >
          <motion.div
            variants={{
              initial: {
                background:
                  "radial-gradient(circle,rgba(38,38,38,1) 0%,rgba(24,24,24,1) 100%)",
              },
              hovered: { background: "radial-gradient(circle, rgba(36, 40, 194,1) 0%, rgba(24,24,24,1) 120%)" },
            }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="h-full relative overflow-hidden md:px-16 p-8 md:py-8 rounded-[15.3px]"
          >
            <div className="flex justify-between relative z-20">
              <p className="md:text-3xl text-2xl pb-2 font-[600] tracking-wide">
              National Stock Exchange India ₹
              <br />
              <span className="text-lg">
                Equity Derivatives Certification
              </span>
              </p>
              <motion.div
                variants={{ hovered: { x: 10, scale: 1.05 } }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
              >
                <ArrowRight />
              </motion.div>
            </div>

            <p className=" relative h-[140px] md:h-auto text-ellipsis overflow-hidden mb-10 z-20 md:mb-0 md:text-md text-sm md:pb-10 font-[200] tracking-wide">
            This Certification shows my strength and abilities in understanding the derivatives market, provided by SEBI, India
            </p>
            <motion.div
              variants={{ hovered: { y: -5, scale: 1.03 } }}
              transition={{ ease: "anticipate", duration: 0.5 }}
              className=" relative z-20 flex items-center justify-center"
            >
              <Image
                className="rounded-xl"
                src="/certi.jpg"
                alt="pubgimage"
                width={1150}
                height={500}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </a>
  );
}

export default Certificate;
