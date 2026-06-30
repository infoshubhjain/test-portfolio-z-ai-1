"use client";
import { motion } from "framer-motion";
import { research } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="relative py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold mb-16 text-center"
      >
        Research & <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Publications</span>
      </motion.h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {research.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="hoverable glass rounded-3xl p-8 hover:border-indigo-500/40 transition-all duration-300 border border-indigo-500/10"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 text-xs rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
                {item.type}
              </span>
              <span className="text-sm text-zinc-500">{item.date}</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-sm text-indigo-400 mb-4 font-semibold">{item.venue}</p>
            <p className="text-zinc-300 text-sm leading-relaxed">{item.abstract}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
