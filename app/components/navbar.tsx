"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, PlayCircle } from "lucide-react";
import Link from "next/link"; // Required for cross-page navigation
import { usePathname } from "next/navigation"; // Required to check current page

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated Navigation Logic
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If the link is a section anchor (starts with #)
    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      
      // IF WE ARE ON THE HOME PAGE: Scroll smoothly
      if (pathname === "/") {
        e.preventDefault();
        const elem = document.getElementById(targetId);
        if (elem) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = elem.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } 
      // IF WE ARE ON OTHER PAGES: The default <Link> behavior will take us to "/#target"
    }
    setIsOpen(false); 
  };

  const navLinks = [
    { name: "About", href: "#about" },
    // { name: "Membership", href: "/membership" }, // Full page link
    { name: "Sermons", href: "#sermons" },
    { name: "Teachings", href: "#teachings" },
    { name: "Events", href: "#events" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? "top-0 py-4 bg-black/80 backdrop-blur-xl border-b border-[#00B0F0]/20" : "top-4 py-4 px-6"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            {/* LOGO IMAGE */}
<motion.div 
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  className="flex items-center gap-3 cursor-pointer"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  <div className="relative w-100 h-10 md:w-12 md:h-12">
    <img
      src="/images/white-1.png" // Path to your logo in the public/images folder
      alt="Sovereign Grace Logo"
      className="w-full h-full object-contain"
    />
  </div>
  
  {/* Optional: Keep the text name next to the logo or remove it */}
  <span className="hidden sm:block text-xl font-serif font-bold tracking-tight text-[#00B0F0]">
    Sovereign<span className="text-white font-sans font-light">Grace</span>
  </span>
</motion.div>
            <span className="text-2xl font-serif font-bold tracking-tight text-[#00B0F0]">
              BelieversTribe<span className="text-white font-sans font-light">Church</span>
            </span>
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
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#FF8F00" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full border border-[#FFC107] text-[#FFC107] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"
            >
              <PlayCircle size={14} /> Watch Live
            </motion.button>

            {/* Linked to our new Give page */}
            <Link href="/give">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0_0_20px_rgba(229,57,53,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded-full bg-[#E53935] text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg"
              >
                <Heart size={14} fill="currentColor" /> Give
              </motion.button>
            </Link>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden text-[#00B0F0]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-[#00B0F0]/20 p-8 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={pathname === "/" ? link.href : `/${link.href}`} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-serif text-white hover:text-[#FFC107]"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/give" onClick={() => setIsOpen(false)}>
                <button className="w-full py-4 bg-[#E53935] text-white font-bold rounded-xl uppercase tracking-widest">GIVE NOW</button>
              </Link>
              <button className="w-full py-4 border border-[#00B0F0] text-[#00B0F0] font-bold rounded-xl uppercase tracking-widest">WATCH LIVE</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}