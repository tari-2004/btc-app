"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, CalendarDays } from "lucide-react";

const EVENTS = [
  {
    day: "14",
    month: "JAN",
    title: "Apostolic Leaders Summit",
    time: "09:00 AM - 02:00 PM",
    location: "Main Sanctuary",
    category: "Special Event",
    accent: "#E53935"
  },
  {
    day: "21",
    month: "JAN",
    title: "Night of Sovereign Worship",
    time: "07:00 PM - Late",
    location: "Plaza Arena",
    category: "Community",
    accent: "#00B0F0"
  },
  {
    day: "28",
    month: "JAN",
    title: "Youth Tech & Faith Seminar",
    time: "04:00 PM",
    location: "Innovation Hub",
    category: "Workshop",
    accent: "#FFC107"
  }
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="relative py-24 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#E53935]/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <CalendarDays size={18} className="text-[#00B0F0]" />
              <span className="text-[#00B0F0] font-sans text-xs font-black tracking-[0.5em] uppercase">Mark Your Calendar</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white">
              Upcoming <span className="text-[#E53935]">Gatherings</span>
            </h2>
          </motion.div>

          <motion.button 
            whileHover={{ x: 5 }}
            className="text-white/40 hover:text-white flex items-center gap-2 font-bold tracking-[0.2em] text-xs uppercase transition-colors"
          >
            View Full Calendar <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Events Grid */}
        <div className="space-y-6">
          {EVENTS.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col md:flex-row items-center gap-8 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-[#00B0F0]/30 transition-all duration-500"
            >
              {/* Date Block */}
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-[#E53935] flex flex-col items-center justify-center text-white shadow-[0_10px_30px_-10px_rgba(229,57,53,0.5)] group-hover:scale-105 transition-transform duration-500">
                <span className="text-sm font-black tracking-widest">{event.month}</span>
                <span className="text-4xl md:text-5xl font-serif font-bold">{event.day}</span>
              </div>

              {/* Info Block */}
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-3">
                  <span className="text-[10px] font-black tracking-widest uppercase text-[#FFC107] border border-[#FFC107]/30 px-2 py-1 rounded">
                    {event.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 group-hover:text-[#00B0F0] transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-6 text-white/40 text-sm font-sans">
                  <span className="flex items-center gap-2"><Clock size={16} className="text-[#00B0F0]" /> {event.time}</span>
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-[#00B0F0]" /> {event.location}</span>
                </div>
              </div>

              {/* Action */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-8 py-4 rounded-xl border border-[#00B0F0] text-[#00B0F0] font-bold tracking-widest uppercase hover:bg-[#00B0F0] hover:text-black transition-all"
                >
                  Register
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}