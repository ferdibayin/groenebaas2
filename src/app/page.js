'use client';
import Image from "next/image";
import { useEffect } from "react";
import Intro from '../components/Carousel/Intro';
import Lenis from "lenis";
import Footer from '../components/Footer';
import Duurzaamheid from '../components/duurzaamheid';
import Verhaal from '../components/Verhaal';
import Bedrijf from "../components/Bedrijven";
import Waaromk from "../components/WaaromK";
import Offerte from "../components/Offerte";


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
    <Duurzaamheid />
    <Verhaal />
    <Bedrijf />
    <Waaromk />
    <Offerte />
    <Footer />
    <div className='h-screen'></div>
   </main>
  );
}
