"use client";
import { motion } from "framer-motion";
import { research } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="relative py-24 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
      >
        Research & <span className="text-indigo-400">Publications</span>
      </motion.h2>

      <div className="space-y-6">
        {research.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="hoverable glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {item.type}
              </span>
              <span className="text-sm text-zinc-500">{item.date}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-indigo-400 mb-3">{item.venue}</p>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.abstract}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
