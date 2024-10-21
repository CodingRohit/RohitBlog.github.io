import React from 'react'
// components/Navbar.jsx
import Link from 'next/link';
import { HamIcon } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { ModeToggle  } from './theme-btn';


const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur z-10">
      <div className="container mx-auto flex justify-around border-b pb-6 items-center">
        <a href="/"><div className='text-lg font-bold'>RohitBlog</div></a>
        <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300"> Home
                    </Link>
                    <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        About
                    </Link>
                    <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Blog
                    </Link>
                    <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        Contact
                    </Link>
                    <div className='flex items-center'>
                        <Button className="mx-1" variant="outline">Login</Button>
                        <Button className="mx-1" variant="outline">Signup</Button>
                        <ModeToggle />
                    </div>
                </div>
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger>
              <svg className="w-6 h-6 bg-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="1" id="_1"><path d="M441.13,166.52h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" /><path d="M441.13,279.72h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" /><path d="M441.13,392.92h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" /></g></svg>
            </SheetTrigger>
                <span className='mx-2'><ModeToggle/></span>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold my-4">RohitBlog</SheetTitle>
                <SheetDescription><div className="flex flex-col gap-5">
                  <Link className='' href="/">Home
                  </Link>
                  <Link className='' href="/about">
                    About
                  </Link>
                  <Link className='' href="/contact">
                    Contact
                  </Link>
                  <div className='space-x-4'>
                    <Button className="mx-1 text-xs " variant="outline">Login</Button>
                    <Button className="mx-1 text-xs" variant="outline">Sign-up</Button>
                  </div>
                </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  );
};

export default Navbar
