"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Twitter, Mail, MapPin, Phone, ArrowUp } from "lucide-react";

// --- SEPARATE COMPONENT FOR THE TIMER ---
function LiveCountdownBox() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // TARGET DATE: Sunday, Jan 18, 2026 at 7:30 AM
    const targetDate = new Date("2026-01-18T07:30:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Define the function HERE (inside the component but outside the effect)
  const handleSetReminder = () => {
    const title = "Believers Tribe Church Service";
    const details = "Join us for our weekly service. Recalibrate your soul!";
    const location = "17 School Road, Okutukutu, Yenagoa";
    
    // Format: YYYYMMDDTHHMMSSZ (UTC time)
    // 08:00 UTC is 09:00 WAT (Nigeria Time)
    const startTime = "20260118T073000Z"; 
    const endTime = "20260118T110000Z";

    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;

    window.open(googleUrl, '_blank');
  };

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="p-8 rounded-3xl bg-[#E53935]/5 border border-[#E53935]/20 flex flex-col items-center text-center">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-[#E53935] animate-pulse" />
        <span className="text-[#E53935] text-[10px] font-black uppercase tracking-[0.3em]">Live Status</span>
      </div>
      <h5 className="text-white font-serif font-bold text-lg mb-6">Next Service Starts In:</h5>
      
      <div className="flex gap-4 mb-8">
        <div className="text-center">
          <p className="text-2xl font-bold text-white">{formatNum(timeLeft.days)}</p>
          <p className="text-[8px] text-white/30 uppercase">Days</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">{formatNum(timeLeft.hours)}</p>
          <p className="text-[8px] text-white/30 uppercase">Hrs</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">{formatNum(timeLeft.minutes)}</p>
          <p className="text-[8px] text-white/30 uppercase">Min</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">{formatNum(timeLeft.seconds)}</p>
          <p className="text-[8px] text-white/30 uppercase">Sec</p>
        </div>
      </div>

      <motion.button 
        onClick={handleSetReminder} // <--- LINKED HERE
        whileHover={{ scale: 1.05, backgroundColor: "#E53935", color: "#fff" }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-[#E53935] text-white text-[10px] font-black tracking-widest uppercase rounded-lg shadow-[0_10px_20px_-10px_rgba(229,57,53,0.5)]"
      >
        Set Reminder
      </motion.button>
    </div>
  );
}

// --- MAIN FOOTER COMPONENT ---
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
                  href="https://www.google.com/maps/search/?api=1&query=17+School+Road+Okutukutu+Yenagoa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  17 School Road, Okutukutu <br />Yenagoa, Bayelsa State
                </a>
              </li>
              <li className="flex items-center gap-4 text-white/40 text-sm">
                <Phone size={18} className="text-[#00B0F0] shrink-0" />
                <a href="tel:+2340000000000" className="hover:text-white transition-colors">+234 (000) 000-0000</a>
              </li>
              <li className="flex items-center gap-4 text-white/40 text-sm">
                <Mail size={18} className="text-[#00B0F0] shrink-0" />
                <a href="mailto:believerstribechurch@gmail.com" className="hover:text-white transition-colors uppercase text-[10px] tracking-widest font-bold">
                  Email Us
                </a>
              </li>
            </ul>
          </div>

          {/* LIVE STATUS - Functional Countdown */}
          <LiveCountdownBox />

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