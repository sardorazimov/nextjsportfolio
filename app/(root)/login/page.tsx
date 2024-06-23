"use client"

import { Login } from "@/components/Login";
import WavyDotPattern from "@/components/ui/SignUp";

const page = () => {
  return (
    <div className="relative flex h-screen  w-full items-center justify-center overflow-hidden rounded-lg border bg-background  md:shadow-xl ">
        
      <div className="z-10 whitespace-pre-wrap   font-semibold tracking-tighter text-black dark:text-white">
        <Login />
      </div>

      <WavyDotPattern
        gridWidth={30}
        gridHeight={15}
        dotWidth={8}
        dotHeight={8}
      />
    </div>
  );
}
export default page