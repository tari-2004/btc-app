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
    image: "images/shift.jpeg" 
  },
  {
    day: "21",
    month: "JAN",
    title: "Night of Sovereign Worship",
    time: "07:00 PM - Late",
    location: "Plaza Arena",
    category: "Community",
    image: "images/shift.jpeg"
  },
  {
    day: "28",
    month: "JAN",
    title: "Youth Tech & Faith Seminar",
    time: "04:00 PM",
    location: "Innovation Hub",
    category: "Workshop",
    image: "images/shift.jpeg"
  }
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays size={18} className="text-[#00B0F0]" />
              <span className="text-[#00B0F0] font-sans text-[10px] font-black tracking-[0.4em] uppercase">Events</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Upcoming <span className="text-[#E53935]">Gatherings</span>
            </h2>
          </motion.div>

          <motion.button 
            whileHover={{ x: 5 }}
            className="group text-white/40 hover:text-white flex items-center gap-2 font-bold tracking-[0.2em] text-[10px] uppercase transition-colors"
          >
            View Full Calendar <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* 3-Card Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-[#111111] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#00B0F0]/30 transition-all duration-500 shadow-2xl"
            >
              {/* Image Section - Shows Full within the top half */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 flex flex-col items-center">
                   <span className="text-[10px] font-black uppercase text-[#00B0F0]">{event.month}</span>
                   <span className="text-xl font-bold text-white">{event.day}</span>
                </div>
              </div>

              {/* Text Area - Designed to Stand Out */}
              <div className="p-8 space-y-4 bg-gradient-to-b from-[#1A1A1A] to-[#111111] flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-[#FFC107] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-[#FFC107]/10 border border-[#FFC107]/20">
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#00B0F0] transition-colors leading-tight min-h-[3.5rem]">
                  {event.title}
                </h3>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <div className="p-2 rounded-lg bg-white/5">
                      <Clock size={14} className="text-[#00B0F0]" />
                    </div>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <div className="p-2 rounded-lg bg-white/5">
                      <MapPin size={14} className="text-[#E53935]" />
                    </div>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}