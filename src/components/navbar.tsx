"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Manufacturers", href: "#manufacturers" },
  { label: "Presence", href: "#presence" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <a href="#home" className="flex items-center gap-3 group relative">
          <div className="relative w-[160px] h-[36px] sm:w-[200px] sm:h-[44px] md:w-[240px] md:h-[52px] transition-transform duration-300 group-hover:scale-[1.02]">
            <Image 
              src="/logo.svg" 
              alt="HealthSync Pharma" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-500 hover:text-secondary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              >
                {l.label}
              </a>
            ))}
          </div>
          
          <a
            href="#contact"
            className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            className="p-2.5 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 px-6 py-6 shadow-xl transition-all duration-300 origin-top flex flex-col gap-1 ${
          open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="block py-3 px-4 rounded-xl text-base font-medium text-slate-600 hover:text-secondary hover:bg-slate-50 transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3.5 rounded-xl text-center text-base font-semibold transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
