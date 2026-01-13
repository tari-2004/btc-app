"use client";

import { motion } from "framer-motion";
import { Play, Share2, Radio, Clock, ChevronRight } from "lucide-react";

export default function LatestSermon() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any} 
    }
  };

  return (
    <section id="sermons" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B0F0]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
              <span className="flex h-2 w-2 rounded-full bg-[#E53935] animate-pulse" />
              <span className="text-[#00B0F0] font-sans text-xs font-black tracking-[0.4em] uppercase">
                Now Streaming
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-white">
              Latest <span className="italic text-[#FFC107]">Sermons</span>
            </motion.h2>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="group flex items-center gap-2 text-white/40 hover:text-[#00B0F0] transition-colors text-sm font-bold tracking-widest uppercase"
          >
            Browse Archive <ChevronRight size={16} />
          </motion.button>
        </div>

        {/* Featured Sermon Card - Fixed Mobile Height & Filters */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="relative group aspect-[3/4] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
        >
          {/* Image - Filters Removed */}
          <img 
            src="images/FB_IMG_1763808814499.jpg"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            alt="Sermon Thumbnail"
          />
          
          {/* Essential Overlay for Text Legibility (Bottom Only) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-3">
                <Radio size={16} className="text-[#E53935]" />
                <span className="text-[10px] text-white font-bold tracking-widest uppercase">Sunday Service • 05 Jan 2026</span>
              </div>
              <button className="p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white">
                <Share2 size={20} />
              </button>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-[#FFC107] font-sans text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-3">Series: The Kingdom Era</p>
                <h3 className="text-2xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                  Walking in Sovereign <br className="hidden md:block" />Authority
                </h3>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/70 text-xs font-sans">
                  <span className="flex items-center gap-2"><Clock size={16} className="text-[#00B0F0]" /> 48 Mins</span>
                  <span className="flex items-center gap-2 underline underline-offset-4 decoration-[#00B0F0]">Speaker: Dr. Elias Thorne</span>
                </div>
              </div>

              <motion.a
                href="https://facebook.com/yourpagename/videos/yourvideoid" // Replace with your specific Facebook video URL
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0px 0px 20px rgba(0, 176, 240, 0.6)" 
                }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-[#00B0F0] flex-shrink-0 flex items-center justify-center text-black shadow-lg cursor-pointer transition-shadow"
              >
                <Play 
                  size={32} 
                  fill="currentColor" 
                  className="ml-1 md:ml-2 w-8 h-8 md:w-10 md:h-10" 
                />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Recent Additions */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             { title: "The Altar of Discipline", speaker: "Pastor Sarah J.", time: "42 min" },
             { title: "Financial Redemption", speaker: "Dr. Elias Thorne", time: "55 min" },
             { title: "The Silent Watchman", speaker: "Min. David R.", time: "38 min" }
           ].map((sermon, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -5 }}
               className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00B0F0]/30 transition-all cursor-pointer"
             >
               <p className="text-[#FFC107] text-[10px] font-bold tracking-widest uppercase mb-2">{sermon.time}</p>
               <h4 className="text-lg font-serif text-white mb-2">{sermon.title}</h4>
               <p className="text-xs text-white/40 uppercase tracking-tighter">{sermon.speaker}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}