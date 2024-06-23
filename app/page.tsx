/* eslint-disable @next/next/no-img-element */
import { About } from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Landing } from "@/components/Landing";
import  { NavbarScroll } from "@/components/Navbar";

import { ModeToggle } from "@/components/Theme";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" ">
     <Header />
     <div>
       <Hero  />
     
        
       <main className="bg-black">
        <h1 className="text-center text-5xl ">About</h1>
        <About />
        <Footer />
       </main>
     </div>
     
    </main>
  );
}
