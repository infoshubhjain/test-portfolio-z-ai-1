"use client";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
      >
        Key <span className="text-indigo-400">Achievements</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="hoverable glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all"
          >
            <div className="text-4xl font-bold text-indigo-400 mb-2">{stat.value}</div>
            <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
            <div className="text-sm text-zinc-500">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
