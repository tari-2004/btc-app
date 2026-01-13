"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, PlayCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      if (pathname === "/") {
        e.preventDefault();
        const elem = document.getElementById(targetId);
        if (elem) {
          const offset = 80;
          const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } 
    }
    setIsOpen(false); 
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Sermons", href: "#sermons" },
    { name: "Teachings", href: "#teachings" },
    { name: "Events", href: "#events" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled || isOpen 
        ? "top-0 py-4 bg-black/95 backdrop-blur-xl border-b border-[#00B0F0]/20" 
        : "top-4 py-4 px-4 sm:px-6"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
        
        {/* LOGO AREA */}
<Link href="/" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false); }}>
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="flex items-center gap-3 cursor-pointer group"
  >
    {/* Enlarged Logo Image Container */}
    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
      <img
        src="/images/white-1.png"
        alt="Sovereign Grace Logo"
        className="w-full h-full object-contain"
      />
    </div>
    
    {/* Church Name */}
    <div className="flex flex-col justify-center">
      <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#00B0F0] leading-tight whitespace-nowrap">
        BelieversTribe
      </span>
      <span className="text-white font-sans font-light text-sm sm:text-base tracking-[0.1em] uppercase leading-tight">
        Church
      </span>
    </div>
  </motion.div>
</Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={pathname === "/" ? link.href : `/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-white/70 hover:text-[#FFC107] transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://facebook.com/yourpagename" // Replace with your actual Facebook page URL
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 193, 7, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full border border-[#FFC107] text-[#FFC107] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-colors"
            >
              {/* <svg 
                size={14} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-3.5 h-3.5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg> */}
              Watch Live
            </motion.a>
            <Link href="/give">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-[#E53935] text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg"
              >
                <Heart size={14} fill="currentColor" /> Give
              </motion.button>
            </Link>
          </div>
        </div>

        {/* MOBILE TOGGLE - Enhanced for touch */}
        <button 
          className="lg:hidden p-2 text-[#00B0F0] hover:bg-white/10 rounded-lg transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-black/98 backdrop-blur-2xl border-b border-[#00B0F0]/20 overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={pathname === "/" ? link.href : `/${link.href}`} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-serif text-white active:text-[#FFC107] border-b border-white/5 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <Link href="/give" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-4 bg-[#E53935] text-white font-bold rounded-xl uppercase tracking-widest active:scale-95 transition-transform">
                    GIVE NOW
                  </button>
                </Link>
                <button className="w-full py-4 border border-[#00B0F0] text-[#00B0F0] font-bold rounded-xl uppercase tracking-widest active:scale-95 transition-transform">
                  WATCH LIVE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}