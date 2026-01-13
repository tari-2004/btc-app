"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, BookOpen, Users, Star, ArrowRight } from "lucide-react";

const STEPS = [
  {
    title: "Level 01: The DNA",
    desc: "Understand our apostolic roots, our vision for the city, and our global mandate.",
    icon: <BookOpen className="text-[#00B0F0]" />,
  },
  {
    title: "Level 02: The Doctrine",
    desc: "Dive deep into the pillars of Sovereign Grace and our core theological beliefs.",
    icon: <Star className="text-[#FFC107]" />,
  },
  {
    title: "Level 03: The Deployment",
    desc: "Discover your spiritual gifts and find where you fit within the family of God.",
    icon: <Users className="text-[#E53935]" />,
  },
];

export default function MembershipPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      
      {/* HERO SECTION */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00B0F0]/30 bg-[#00B0F0]/5 mb-6"
        >
          <CheckCircle2 size={14} className="text-[#00B0F0]" />
          <span className="text-[#00B0F0] text-[10px] font-black uppercase tracking-[0.4em]">Become a Member</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
          Membership <span className="text-[#00B0F0]">Class</span>
        </h1>
        <p className="text-white/50 text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Move beyond the pews. Discover your purpose, understand our mandate, and officially join the Sovereign Grace family.
        </p>
      </section>

      {/* THE ROADMAP */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00B0F0]/20 to-transparent -z-10" />
          
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[2rem] backdrop-blur-xl hover:border-[#00B0F0]/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REGISTRATION CALL TO ACTION */}
      <section className="px-6 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#00B0F0]/10 to-[#E53935]/10 border border-white/10 p-12 md:p-20 text-center">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00B0F0]/20 blur-[100px] -z-10" />

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-white/60 mb-10 text-lg">
            Our next membership class starts soon. Click below to register via WhatsApp and speak with our coordination team.
          </p>

          <motion.a
            href="https://wa.me/09121729936?text=Hello! I would like to register for the next Membership Class."
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-10 py-5 bg-[#25D366] text-white rounded-full font-black tracking-widest uppercase text-xs shadow-[0_20px_40px_-10px_rgba(37,211,102,0.3)] transition-all"
          >
            Register via WhatsApp <MessageCircle size={20} />
          </motion.a>

          <p className="mt-8 text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">
            Next Intake: Sunday, 1st February 2026
          </p>
        </div>
      </section>

    </div>
  );
}