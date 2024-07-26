"use client"
import { useEffect } from "react";
import Footer from "./components/Footer";
import LoopTape from "./components/LoopTape";
import ContactMe from "./ContactMe";
import Content from "./Content";
import LandingPage from "./LandingPage";


export default function Home() {

  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    }
  }, [])

  return (
    <div className=" bg-bg-color overflow-hidden text-white">
      <LandingPage />
      <LoopTape />
      <Content />
      <Footer />
    </div>
  );
}
