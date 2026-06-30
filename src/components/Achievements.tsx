"use client";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold mb-16 text-center"
      >
        Key <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="hoverable glass rounded-3xl p-8 text-center hover:bg-white/5 transition-all duration-300 border border-indigo-500/10 hover:border-indigo-500/30"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-3">{stat.value}</div>
            <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
            <div className="text-sm text-zinc-500">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
