"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center">
          About <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="glass rounded-3xl p-10 md:p-16 border border-indigo-500/10">
          <p className="text-xl text-zinc-300 leading-relaxed mb-10">
            {personalInfo.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Contact</h3>
              <p className="text-zinc-300 text-lg">{personalInfo.email}</p>
              <p className="text-zinc-300 text-lg">{personalInfo.phone}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Social</h3>
              <a href={personalInfo.github} className="text-zinc-300 hover:text-white transition-colors block text-lg">GitHub</a>
              <a href={personalInfo.linkedin} className="text-zinc-300 hover:text-white transition-colors block text-lg">LinkedIn</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
