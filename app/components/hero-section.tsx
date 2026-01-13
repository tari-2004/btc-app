"use client";

import { motion } from "framer-motion";
import { Play, Users } from "lucide-react"; // Swapped Calendar for Users icon
import Link from "next/link"; // Imported Link for navigation

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 md:pt-32">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/over.jpeg"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          alt="Church Sanctuary"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Modern Label */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span className="px-5 py-1.5 rounded-full border border-[#00B0F0]/40 bg-[#00B0F0]/10 text-[#FFC107] text-[10px] font-black uppercase tracking-[0.5em] backdrop-blur-md">
            Established in Truth
          </span>
        </motion.div>

        {/* Headline with Electric Cyan emphasis */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-serif font-bold text-white leading-[1.1] mb-8"
        >
          A Sanctuary for <br />
          <span className="text-[#00B0F0] drop-shadow-[0_0_15px_rgba(0,176,240,0.3)]">Modern Souls</span>
        </motion.h1>

        {/* High-Contrast Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-sans font-light leading-relaxed mb-12"
        >
          Experience deep worship and apostolic teaching in an atmosphere 
          designed for the next generation of believers.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* UPDATED: Link to Membership Page */}
          <Link href="/membership" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#b71c1c" }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-10 py-5 bg-[#E53935] text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_-10px_rgba(229,57,53,0.5)] tracking-widest text-xs"
            >
              <Users size={18} />
              JOIN THE FAMILY
            </motion.button>
          </Link>

          <motion.a
  href="https://t.me/pstclintondukeh" // Replace with your actual Telegram link
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.02, borderColor: "#FFC107", color: "#FFC107" }}
  whileTap={{ scale: 0.98 }}
  className="w-full sm:w-auto px-10 py-5 border-2 border-[#00B0F0] text-[#00B0F0] font-bold rounded-xl flex items-center justify-center gap-3 transition-all tracking-widest text-xs cursor-pointer"
>
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
  LATEST SERMON
</motion.a>
        </motion.div>
      </motion.div>

      {/* Modern Scroll Reveal Decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-16 bg-gradient-to-b from-[#00B0F0] to-transparent"
        />
      </div>
    </section>
  );
}