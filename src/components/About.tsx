"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          About <span className="text-indigo-400">Me</span>
        </h2>
        
        <div className="glass rounded-2xl p-8 md:p-12">
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            {personalInfo.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-400">Contact</h3>
              <p className="text-zinc-400">{personalInfo.email}</p>
              <p className="text-zinc-400">{personalInfo.phone}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-400">Social</h3>
              <a href={personalInfo.github} className="text-zinc-400 hover:text-white transition-colors block">GitHub</a>
              <a href={personalInfo.linkedin} className="text-zinc-400 hover:text-white transition-colors block">LinkedIn</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
