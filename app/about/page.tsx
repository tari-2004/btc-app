"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users, Landmark, Facebook, MessageCircle } from "lucide-react";

const VALUES = [
  { icon: <Shield />, title: "Integrity", desc: "Walking blameless in an age of compromise." },
  { icon: <Target />, title: "Vision", desc: "Apostolic focus on the global mandate." },
  { icon: <Users />, title: "Family", desc: "A covenant community bound by grace." },
  { icon: <Landmark />, title: "Legacy", desc: "Building a foundation for generations to come." },
];

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      {/* HERO HEADER */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#00B0F0] font-black tracking-[0.5em] uppercase text-xs block mb-4"
        >
          Our Sacred Journeyj
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-serif font-bold mb-8"
        >
          Built on <span className="text-[#FFC107]">Truth</span>. <br />
          Driven by <span className="text-[#00B0F0]">Grace</span>.
        </motion.h1>
      </section>

      {/* THE STORY */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=1974&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Foundation"
          />
        </div>
        <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
          <h2 className="text-3xl font-serif font-bold text-white">Our Foundation</h2>
          <p>
            Established in 2010, Sovereign Grace began as a small gathering of believers hungry for the unfiltered Word of God. What started in a living room has grown into a global community of modern reformers.
          </p>
          <p>
            Our architecture isn't just about buildings; it's about the souls we equip to govern their lives through spiritual intelligence and apostolic authority.
          </p>
        </div>
      </section>

      {/* CORE PILLARS GRID */}
      <section className="bg-white/5 py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {VALUES.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-black border border-[#00B0F0]/30 rounded-2xl flex items-center justify-center text-[#00B0F0] group-hover:bg-[#00B0F0] group-hover:text-black transition-all">
                  {val.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">{val.title}</h4>
                <p className="text-sm text-white/40">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION - UPDATED FOR SINGLE PASTOR */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Pastor Image */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              <div className="absolute -inset-4 border border-[#00B0F0]/20 rounded-[2rem] z-0" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl">
                <img 
                  src="images/pastor.png" 
                  className="w-full h-full object-cover transition-all duration-700" 
                  alt="Lead Pastor" 
                />
              </div>
            </motion.div>
          </div>

          {/* Pastor Bio & Socials */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[#FFC107] text-[10px] font-black uppercase tracking-[0.5em] block mb-4"
              >
                Our Lead Shepherd
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">PST. Clinton Dukeh</h2>
              <p className="text-[#00B0F0] font-sans font-bold uppercase tracking-widest text-sm">Senior Pastor & Visionary</p>
            </div>

            <div className="space-y-6 text-white/50 text-lg font-light leading-relaxed">
              <p>
                Dr. Elias Thorne is a transformational leader and apostolic voice dedicated to empowering believers to walk in their divine sovereignty. With over 20 years of ministry experience, his teachings bridge the gap between ancient biblical wisdom and modern practical living.
              </p>
              <p>
                He believes that the church is not just a place of refuge, but a laboratory for leadership and spiritual growth. Under his guidance, Sovereign Grace has become a beacon for those seeking deeper doctrinal truth and radical spiritual encounters.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00B0F0] hover:bg-[#00B0F0]/10 transition-all group"
              >
                <Facebook size={20} className="text-[#00B0F0]" />
                <span className="text-sm font-bold uppercase tracking-widest">Follow on Facebook</span>
              </a>
              
              <a 
                href="https://wa.me/yournumber" 
                target="_blank" 
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all group"
              >
                <MessageCircle size={20} className="text-[#25D366]" />
                <span className="text-sm font-bold uppercase tracking-widest">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}