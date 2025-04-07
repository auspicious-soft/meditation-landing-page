"use client";
import Image from "next/image";
import { Menu, X } from 'lucide-react';
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function Headers() {
  const router = useRouter();
  
 const [menuOpen, setMenuOpen] = useState(false);


const handleClick = () => {
  window.location.href = 'https://panel.inscape.life/';
};


 return (
      <>

    <header className="  sticky top-0 z-50 bg-white px-4 md:px-8   shadow shadow-gray-400/30">
      <div className="flex justify-between items-center 2">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center hover:cursor-pointer">
          <Image
            src="/images/inscape.png"
            height={81}
            width={162}
            alt="inscape logo"
            className="w-[120px] md:w-[162px] h-auto"
          />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-zinc-800 text-base font-medium">
          <Link href="#benefits" scroll={true} className="cursor-pointer">Benefits</Link>
          <Link href="#how-it-works" className="cursor-pointer">How It Works</Link>
          <Link href="#faq" className="cursor-pointer">FAQ</Link>
        </nav>

        {/* Login/Register Button */}
        <div className="hidden md:flex">
          <button  onClick={handleClick}  className="cursor-pointer px-6 py-3 bg-[#1A3F70] rounded-full text-white font-medium">
            Login/Register
          </button>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-2 py-2 md:hidden ">
          <Link href="#benefits"  className="text-zinc-800 font-small cursor-pointer">Benefits</Link>
          <Link href="#how-it-works"  className="text-zinc-800 font-small cursor-pointer">How It Works</Link>
          <Link href="#faq"  className="text-zinc-800 font-small cursor-pointer">FAQ</Link>
          <button  onClick={handleClick}  className="px-6 py-3 bg-[#1A3F70] rounded-full text-white font-medium w-fit">
            Login/Register
          </button>
        </div>
      )}
    </header>


    </>
 );
}
