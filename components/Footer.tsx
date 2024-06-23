"use client"
/* eslint-disable @next/next/no-img-element */
import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const Footer = () => {
     const router = useRouter()
     
  return (
   <div>

    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] border border-slate-800 ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <InstagramLogoIcon />
                        <Link  href={'/'} className="text-[15px] ml-[6px]">Instagaram</Link>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <GitHubLogoIcon />
                        <Link href={'/'} className="text-[15px] ml-[6px]">Github</Link>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <DiscordLogoIcon/>
                        <Link href={'/'} className="text-[15px] ml-[6px]">Discord</Link>    
                    </p>
                </div>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <Link href={''} className='w-[12rem] h-[12rem] blur-sm shadow-black'>
                    <img src="/footer.jpeg" alt="Footer" />
                    </Link>
                </div>
              {/**
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
               * 
               */}
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Price</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <Button onClick={() => router.push('/price')}
                         className="text-[15px] ml-[6px]">Become Sponsor</Button>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">sardorazimov2901@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; <Link href={'/'}>azsams</Link>  2024 Inc. All rights reserved
            </div>
        </div>
    </div>


   </div>
  )
}

export default Footer
