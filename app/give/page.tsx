"use client";

import { motion } from "framer-motion";
import { Copy, CheckCircle2, Landmark, Heart, Sprout, ShieldCheck } from "lucide-react";
import { useState } from "react";

const GIVING_CHANNELS = [
  {
    id: "offering",
    title: "General Offering",
    subtitle: "Tithes & Worship Offerings",
    icon: <Landmark className="text-[#00B0F0]" />,
    account: "0123456789",
    bank: "Sovereign Kingdom Bank",
    color: "#00B0F0",
  },
  {
    id: "partnership",
    title: "Kingdom Partnership",
    subtitle: "Global Missions & Outreach",
    icon: <Heart className="text-[#E53935]" />,
    account: "9876543210",
    bank: "Sovereign Kingdom Bank",
    color: "#E53935",
  },
  {
    id: "seed",
    title: "Prophetic Seed",
    subtitle: "Special Sacrificial Sowing",
    icon: <Sprout className="text-[#FFC107]" />,
    account: "5566778899",
    bank: "Sovereign Kingdom Bank",
    color: "#FFC107",
  },
];

export default function GivePage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00B0F0]/5 blur-[120px] rounded-full -translate-y-1/2" />
      
      <section className="px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#FFC107] font-black tracking-[0.5em] uppercase text-[10px] block mb-4"
          >
            The Storehouse
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-8"
          >
            Honor God with <br />
            <span className="text-[#00B0F0]">Your Substance.</span>
          </motion.h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Every seed sown is a brick in the foundation of the Kingdom. 
            Choose a channel below to transfer your support securely.
          </p>
        </div>

        {/* Giving Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {GIVING_CHANNELS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div 
                className="absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(45deg, ${item.color}44, transparent)` }}
              />
              
              <div className="relative bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] backdrop-blur-xl h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-8">{item.subtitle}</p>

                <div className="mt-auto space-y-4">
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                    <p className="text-[10px] text-white/30 uppercase tracking-tighter mb-1">Bank Name</p>
                    <p className="text-sm font-bold text-white/80">{item.bank}</p>
                  </div>

                  <button 
                    onClick={() => copyToClipboard(item.account, item.id)}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between group/btn hover:border-white/30 transition-all"
                  >
                    <div className="text-left">
                      <p className="text-[10px] text-white/30 uppercase tracking-tighter mb-1">Account Number</p>
                      <p className="text-lg font-mono font-bold text-[#00B0F0] tracking-widest">{item.account}</p>
                    </div>
                    {copiedId === item.id ? (
                      <CheckCircle2 size={18} className="text-green-500" />
                    ) : (
                      <Copy size={18} className="text-white/20 group-hover/btn:text-white transition-colors" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Footer */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-center gap-6 justify-center">
          <div className="flex items-center gap-3 text-white/40 uppercase text-[10px] font-black tracking-[0.3em]">
            <ShieldCheck size={20} className="text-[#00B0F0]" />
            Direct Bank Transfer
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10" />
          <p className="text-white/30 text-xs text-center md:text-left italic">
            "Honor the Lord with your wealth and with the firstfruits of all your produce." — Prov 3:9
          </p>
        </div>
      </section>
    </div>
  );
}