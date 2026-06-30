"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
      >
        Work <span className="text-indigo-400">Experience</span>
      </motion.h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="hoverable glass rounded-2xl p-6 hover:border-indigo-500/30 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-indigo-400">{exp.company}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-zinc-500">{exp.timeline}</span>
                <div className="mt-1">
                  <span className="px-2 py-1 text-xs rounded-full bg-white/5 text-zinc-400">{exp.type}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {exp.tech.map(t => (
                <span key={t} className="text-xs text-zinc-500 bg-white/5 px-2 py-1 rounded">{t}</span>
              ))}
            </div>

            <ul className="space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
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
