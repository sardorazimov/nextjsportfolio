/* eslint-disable @next/next/no-img-element */
import { About } from "@/components/About";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Landing } from "@/components/Landing";
import  { NavbarScroll } from "@/components/Navbar";

import { ModeToggle } from "@/components/Theme";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" ">
     <Header />
     <div>
       <Hero />
      
     </div>
    
    </main>
  );
}
