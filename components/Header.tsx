import { cn } from '@/lib/utils'
import React from 'react'
import MobilNavbar from './MobilNavbar'
import Link from 'next/link'
import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { Github, Instagram, Star, Twitter, Watch } from 'lucide-react'
import { ModeToggle } from './Theme'
import MainNavbar from './MainNavbar'

const Header = () => {
  return (
    <header className={cn('supports-backdrop-blur:bgbackground/90 sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg',)}>
      <div className='container flex h-16 items-center'>
        <MobilNavbar />
        <MainNavbar />
        <Link href={'/'}>azsams</Link>
        <div className='flex flex-1 items-center justify-between gap-2 md:justify-end'>
        <Link href={'/'} className={cn('hidden max-w-52 gap-2 overflow-hidden whitespace-pre md:flex',
            "group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
        )} target='_blank' > 
         <span  className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" >
            
         </span>
          <div className='flex items-center'>
            <GitHubLogoIcon  className='h-4 w-4'/>
              <span className='ml-1'>Git Hub</span>
          </div>
        <div className='ml-2 flex items-center gap-1 text-sm md:flex'>
            <Star className='h-4 w-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-400' />
            <Watch />
        </div>
        </Link>
        <div className='w-full flex-1 md:w-auto md:flex-none'>
            {/**command menu */}
        </div>
        <nav className='flex items-center gap-1'>
        <Link
              href={'/'}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
              
                  "w-9 px-0",
                )}
              >
                <DiscordLogoIcon className="h-4 w-4" />
                <span className="sr-only">Discord</span>
              </div>
            </Link>
            <Link
              href={'/'}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
               
                  "w-9 px-0",
                )}
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={'/'}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
              
                  "w-9 px-0",
                )}
              >
                <Twitter className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <Link
              href={'/'}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                 
                  "w-9 px-0",
                )}
              >
                <InstagramLogoIcon className="h-4 w-4 fill-current" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
         <ModeToggle />
        </nav>
       </div>
      </div>
    </header>
  )
}

export default Header
