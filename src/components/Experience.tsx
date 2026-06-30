"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold mb-16 text-center"
      >
        Work <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
      </motion.h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="hoverable glass rounded-3xl p-8 hover:border-indigo-500/40 transition-all duration-300 border border-indigo-500/10"
          >
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-indigo-400 font-semibold">{exp.company}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-zinc-500">{exp.timeline}</span>
                <div className="mt-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-zinc-400 font-medium">{exp.type}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {exp.tech.map(t => (
                <span key={t} className="text-xs text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">{t}</span>
              ))}
            </div>

            <ul className="space-y-3">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm text-zinc-300 flex items-start gap-3 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
