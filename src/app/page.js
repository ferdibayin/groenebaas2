'use client';
import Image from "next/image";
import { useEffect } from "react";
import Intro from '../components/Carousel/Intro';
import Boxes from '../components/Redirectboxes';
import Lenis from "lenis";
import Footer from '../components/Footer';
import Nieuws from '../components/Nieuws';

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
    <Boxes />
    <Nieuws />
    <Footer />
    <div className='h-screen'></div>
   </main>
  );
}
