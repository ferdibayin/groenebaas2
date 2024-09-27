'use client';
import Image from "next/image";
import { useEffect } from "react";
import Section from '../components/Section';
import Intro from '../components/Carousel/Intro';
import Description from '../components/Description';
import Lenis from "lenis";
import Footer from '../components/Footer';

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
   <main>
    <Intro />
    <Description />
    <Section />
    <Footer />
    <div className='h-screen'></div>
   </main>
  );
}
