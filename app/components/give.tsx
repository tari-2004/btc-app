"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Globe, Zap, ArrowRight, Users, Landmark } from "lucide-react";
import Link from "next/link"; // Imported Link for navigation

const IMPACT_STATS = [
  { label: "Global Missions", icon: <Globe size={18} />, color: "#00B0F0" },
  { label: "Community Outreach", icon: <Users size={18} />, color: "#FFC107" },
  { label: "Digital Ministry", icon: <Zap size={18} />, color: "#FF8F00" },
];

export default function GiveSection() {
  return (
    <section id="give" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Decorative Brand Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#E53935]/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00B0F0]/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: The Vision of Partnership */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E53935]/30 bg-[#E53935]/5 mb-8">
              <Heart size={14} className="text-[#E53935]" fill="currentColor" />
              <span className="text-[#E53935] text-[10px] font-black uppercase tracking-[0.4em]">Kingdom Partnership</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              Fuel the <br />
              <span className="text-[#00B0F0] drop-shadow-[0_0_15px_rgba(0,176,240,0.3)]">Divine Mission.</span>
            </h2>

            <p className="text-white/50 text-lg font-sans leading-relaxed mb-10 max-w-xl">
              Your generosity powers our ability to reach the world with uncompromised truth. We are building a legacy of sovereignty and grace together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {IMPACT_STATS.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-[#00B0F0]/40 transition-colors">
                  <div style={{ color: stat.color }} className="group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: The Portal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Blueprint Decorative Frame */}
            <div className="absolute -inset-4 border border-[#00B0F0]/10 rounded-[2rem] z-0" />
            
            <div className="relative z-10 bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl overflow-hidden">
              {/* Internal Accent Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFC107]/10 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <Landmark size={40} className="text-[#FFC107] mb-6" />
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Support the Vision</h3>
                <p className="text-white/40 text-sm mb-10 leading-relaxed">
                  Click below to access our secure giving portal where you can set up recurring tithes, one-time offerings, or support specific mission projects.
                </p>
                
                <div className="space-y-4">
                  {/* WRAPPED IN LINK COMPONENT */}
                  <Link href="/give">
                    <motion.button
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-6 bg-[#E53935] text-white font-black tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 shadow-[0_15px_40px_-10px_rgba(229,57,53,0.5)] uppercase transition-all"
                    >
                      Enter Giving Portal <ArrowRight size={20} />
                    </motion.button>
                  </Link>

                  <button className="w-full py-4 text-white/40 hover:text-[#00B0F0] font-bold uppercase text-[10px] tracking-[0.3em] transition-colors">
                    View Annual Impact Report
                  </button>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between gap-3 text-white/30 text-[9px] font-bold tracking-widest uppercase">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#00B0F0]" />
                    Encrypted Portal
                  </div>
                  <span>Global Coverage</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}