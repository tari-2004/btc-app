"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Twitter, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const SOCIALS = [
    { Icon: Facebook, href: "https://facebook.com/yourpage" },
    { Icon: Instagram, href: "https://instagram.com/yourpage" },
    { Icon: Youtube, href: "https://youtube.com/yourchannel" },
    { Icon: Twitter, href: "https://twitter.com/yourhandle" },
  ];

  const NAV_LINKS = [
    { name: "About Our Vision", href: "#about" },
    { name: "Sermon Archive", href: "#sermons" },
    { name: "Upcoming Events", href: "#events" },
    { name: "Giving", href: "#give" },
  ];

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-[#00B0F0]/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#00B0F0] flex items-center justify-center">
                <span className="text-black font-black text-xl">B</span>
              </div>
              <span className="text-2xl font-serif font-bold text-[#00B0F0]">
                Believers Tribe <span className="text-white font-sans font-light">Church</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Built on apostolic foundations and driven by modern excellence. Join us in our mission to recalibrate the modern soul.
            </p>
            <div className="flex gap-4">
              {SOCIALS.map(({ Icon, href }, i) => (
                <motion.a 
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#FFC107", backgroundColor: "rgba(255, 193, 7, 0.1)" }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 border border-white/10 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <motion.a 
                    href={link.href} 
                    whileHover={{ x: 5 }}
                    className="text-white/40 hover:text-[#00B0F0] text-sm transition-colors block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/40 text-sm">
                <MapPin size={18} className="text-[#00B0F0] shrink-0" />
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  17 School Road, Okutukutu <br />Yenagoa, Bayelsa State
                </a>
              </li>
              <li className="flex items-center gap-4 text-white/40 text-sm">
                <Phone size={18} className="text-[#00B0F0] shrink-0" />
                <a href="tel:+15550001234" className="hover:text-white transition-colors">+1 (555) 000-1234</a>
              </li>
              <li className="flex items-center gap-4 text-white/40 text-sm">
                <Mail size={18} className="text-[#00B0F0] shrink-0" />
                <a href="mailto:believerstribechurch@gmail.com" className="hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          {/* LIVE STATUS */}
          <div className="p-8 rounded-3xl bg-[#E53935]/5 border border-[#E53935]/20 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
              <span className="text-[#E53935] text-[10px] font-black uppercase tracking-[0.3em]">Live Status</span>
            </div>
            <h5 className="text-white font-serif font-bold text-lg mb-6">Next Service Starts In:</h5>
            <div className="flex gap-4 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">02</p>
                <p className="text-[8px] text-white/30 uppercase">Days</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">14</p>
                <p className="text-[8px] text-white/30 uppercase">Hrs</p>
              </div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-[#E53935] text-white text-[10px] font-black tracking-widest uppercase rounded-lg shadow-[0_10px_20px_-10px_rgba(229,57,53,0.5)]"
            >
              Set Reminder
            </motion.button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            © 2026 Believers Tribe Church. All Rights Reserved.
          </p>
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: "#00B0F0", color: "#000" }}
            className="w-12 h-12 rounded-full border border-[#00B0F0]/40 flex items-center justify-center text-[#00B0F0] transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}