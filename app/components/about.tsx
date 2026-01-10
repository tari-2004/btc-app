"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Flame } from "lucide-react";
import Link from "next/link"; // Added Link import

const PILLARS = [
  {
    title: "Biblical Truth",
    desc: "Uncompromising adherence to the Word of God as our final authority.",
    icon: <BookOpen className="text-[#00B0F0]" />,
    color: "#00B0F0"
  },
  {
    title: "Radical Worship",
    desc: "Creating an atmosphere where the Spirit moves and hearts are transformed.",
    icon: <Flame className="text-[#FFC107]" />,
    color: "#FFC107"
  },
  {
    title: "Deep Community",
    desc: "More than a weekend service—a family walking in Sovereign Grace.",
    icon: <Users className="text-[#FF8F00]" />,
    color: "#FF8F00"
  }
];

export default function AboutUs() {
  const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // Adding 'as any' fixes the Netlify build error
      ease: [0.6, 0.05, -0.01, 0.9] as any 
    }
  }
};

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Structural Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-[#00B0F0] to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* LEFT: Image with Tech-Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-[#00B0F0]/20 rounded-2xl" />
            <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden border border-[#00B0F0]/40 shadow-[0_0_30px_rgba(0,176,240,0.1)]">
              <img 
                src="/images/people.jpg"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                alt="Community Gathering"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            
            {/* Floating Statistic */}
            <div className="absolute -bottom-6 -right-6 bg-black border border-[#FFC107]/30 p-6 rounded-xl backdrop-blur-xl hidden md:block">
              <p className="text-[#FFC107] text-3xl font-serif font-bold">100%</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Apostolic Foundation</p>
            </div>
          </motion.div>

          {/* RIGHT: Mission Text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.span variants={fadeUp} className="text-[#FFC107] font-sans text-xs font-black tracking-[0.4em] uppercase mb-4 block">
              Our Identity
            </motion.span>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              A People Called to <br />
              <span className="text-[#00B0F0]">Higher Living.</span>
            </motion.h2>
            
            <motion.div variants={fadeUp} className="space-y-6 text-white/60 font-sans text-lg leading-relaxed">
              <p>
                We are a Christ-centered community dedicated to the unfiltered teaching of the Gospel. Our mission is to equip the modern believer with ancient truth, fostering a life of power, purpose, and sovereignty.
              </p>
              <p>
                In an age of compromise, we stand firm on the pillars of faith that have transformed lives for generations.
              </p>
            </motion.div>

            {/* BUTTON UPDATED WITH LINK */}
            <motion.div variants={fadeUp} className="mt-10">
              <Link href="/about">
                <button className="flex items-center gap-3 text-white font-bold group cursor-pointer hover:text-[#00B0F0] transition-colors">
                  <span className="w-12 h-[2px] bg-[#E53935] group-hover:w-16 transition-all" />
                  LEARN OUR HISTORY
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM: Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ borderColor: pillar.color, y: -5 }}
              className="p-8 rounded-2xl bg-[#00B0F0]/5 border border-white/5 backdrop-blur-sm transition-all duration-500"
            >
              <div className="mb-6 bg-black/50 w-12 h-12 rounded-lg flex items-center justify-center border border-white/10">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}