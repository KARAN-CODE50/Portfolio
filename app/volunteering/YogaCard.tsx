"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function YogaCard() {
  return (
    <div className="mt-10 md:mb-20 mb-10">
      <p className=" text-3xl md:text-6xl">Yoga</p>
      <div className="border md:p-7 p-5 mt-3 rounded-xl blur-bg-sm">
        <div className="flex flex-col md:grid grid-cols-4 grid-rows-2 gap-5 md:h-[40em]">
          <div className=" md:border-4 border-blue-400/50 relative col-span-2 bg-white rounded-lg overflow-hidden h-[9em]">
            <video
              autoPlay
              muted
              loop
              className=" absolute inset-0 w-full"
              src="/yoga/pose1.mp4"
            ></video>
          </div>
          <div className=" col-span-1 md:border-4 border-green-300/50 overflow-hidden bg-white rounded-lg">
            <Image src="/yoga/pose3.jpg" width={500} height={500} alt="pose" />
          </div>
          <div className=" col-span-1 md:border-4 border-green-300/50 overflow-hidden bg-white rounded-lg">
            <Image src="/yoga/pose4.jpg" width={500} height={500} alt="pose" />
          </div>
          <div className=" col-span-1 md:border-4 border-green-300/50 overflow-hidden bg-white rounded-lg">
            <Image src="/yoga/pose5.jpg" width={500} height={500} alt="pose" />
          </div>
          <div className=" col-span-1 md:border-4 border-green-300/50 overflow-hidden bg-white rounded-lg">
            <Image src="/yoga/pose6.jpg" width={500} height={500} alt="pose" />
          </div>
          <div className=" md:border-4 border-blue-400/50 relative overflow-hidden col-span-2 bg-white rounded-lg h-[9em]">
            <video
              autoPlay
              muted
              loop
              className=" absolute inset-0 w-full"
              src="/yoga/pose2.mp4"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YogaCard;
