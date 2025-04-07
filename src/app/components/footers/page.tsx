"use client";
import React from "react";
import Link from 'next/link';


export default function Footers() {

 return (
      <>

<footer className="sticky top-0 z-50 bg-white px-4 md:px-8">
  <div className="h-0 outline-1 outline-offset-[-0.5px] outline-sky-900/20"></div>

  <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 gap-2 md:gap-0">
    
  <nav className="flex flex-wrap justify-center md:justify-start w-full gap-4 md:gap-6 text-zinc-800 text-sm  font-medium">
  <Link href="#benefits" scroll={true}  className="cursor-pointer">Benefits</Link>
  <Link href="#how-it-works"  className="cursor-pointer">How It Works</Link>
  <Link href="#faq"  className="cursor-pointer">FAQ</Link>
</nav>

<div className="text-zinc-800 text-xs md:text-base font-normal text-center md:text-right w-full">
  Copyright © 2025 inscape.  All Rights Reserved.
</div>

  </div>
</footer>

    </>

 );
}
