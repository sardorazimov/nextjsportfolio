/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Landing } from "./Landing";
import Image from "next/image";
import { About } from "./About";
import Link from "next/link";
import { Border } from "./View";
import { HeroText } from "./HeroText";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="h-screen w-full dark:bg-black bg-violet-300  dark:bg-grid-violet-900/[1.2] bg-grid-black/[2.2] relative flex items-center justify-center shadow-lg shadow-purple-800">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,purple)]">
    
      </div>
      <span></span>
      <div className="w-[40rem] ">
        <HeroText />
        <div className="flex gap-3">
          <Link href={'https://github.com/sardorazimov'} className="flex">
            <GitHubLogoIcon className="w-9 h-11" />
          </Link>
      
          <Link href={'https://github.com/sardorazimov'} className="flex text-white">
          
           <img src="/next.svg" alt="" className="w-9 h-11 text-white bg-white rounded-[50%]" />
          </Link>
      
          <Link href={'https://github.com/sardorazimov'} className="flex">
            <h1 className="text-3xl py-1 text-yellow-300">JS</h1>
          </Link>
      
          <Link href={'https://github.com/sardorazimov'} className="flex">
            <img src="/react.svg" alt=""  className="w-9 h-11"/>
          </Link>
      
        </div>
      </div>


    </div>
  );
}
