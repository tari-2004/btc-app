"use client";

import { motion } from "framer-motion";
import { Monitor, Users, Zap, Clock } from "lucide-react";

const SERIES = [
  {
    title: "Wordroom",
    schedule: "Every Wednesday • 5:00 PM",
    focus: "People Of Prophecy",
    image: "images/wordroom.jpeg",
    icon: <Zap size={20} className="text-[#FFC107]" />,
    accent: "#FFC107"
  },
  {
    title: "Sunday First Service",
    schedule: "Every Sunday • 8:00 AM",
    focus: "The Believers Ministry. Part 1",
    image: "/images/believer.jpeg",
    icon: <Monitor size={20} className="text-[#00B0F0]" />,
    accent: "#00B0F0"
  },
  {
    title: "Sunday Second Service",
    schedule: "Every Sunday • 10:30 AM",
    focus: "The Revelation of the Father",
    image: "images/revelation.jpeg",
    icon: <Users size={20} className="text-[#E53935]" />,
    accent: "#E53935"
  }
];

export default function TeachingSeries() {
  return (
    <section id="teachings" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00B0F0] font-sans text-xs font-black tracking-[0.5em] uppercase"
          >
            Monthly Curriculum
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mt-4"
          >
            Current <span className="text-[#FFC107]">Teaching</span> Tracks
          </motion.h2>
        </div>

        {/* Triple Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERIES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10"
            >
              {/* Image Layer */}
              <img 
                src={item.image}
                className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                alt={item.title}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

              {/* Glowing Border on Hover */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-[${item.accent}]/40 transition-all duration-500 rounded-3xl`} 
                   style={{ borderColor: i === 1 ? '#00B0F066' : i === 0 ? '#FFC10766' : '#E5393566' }} />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                    {item.icon}
                  </div>
                  <div className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B0F0] animate-pulse" />
                    <span className="text-[9px] font-bold text-white tracking-widest uppercase">Active Track</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#FFC107]">
                    <Clock size={14} />
                    <span className="text-[10px] font-black tracking-widest uppercase">{item.schedule}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-[#00B0F0] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 font-sans tracking-wide">
                    {item.focus}
                  </p>
                  
                  {/* Progress Bar (Visual Flair) */}
                  <div className="mt-6 w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full w-full" 
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 rounded-xl border border-[#00B0F0]/30 bg-[#00B0F0]/5 text-[#00B0F0] font-bold tracking-widest uppercase hover:bg-[#00B0F0] hover:text-black transition-all">
            View Syllabus for All Tracks
          </button>
        </motion.div>
      </div>
    </section>
  );
}