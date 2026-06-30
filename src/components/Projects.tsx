"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, personalInfo } from "@/lib/data";
import { ExternalLink, ChevronDown } from "lucide-react";

const allTags = ["All", "AI", "Full Stack", "Machine Learning", "Research", "Production", "Leadership", "Automation", "NLP"];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = activeTag === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(activeTag));

  return (
    <section id="projects" className="relative min-h-screen py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold mb-16 text-center"
      >
        Featured <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
      </motion.h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`hoverable px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTag === tag 
                ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/25" 
                : "glass text-zinc-400 hover:text-white hover:bg-white/10 border border-indigo-500/20"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="hoverable glass rounded-3xl p-8 relative group hover:border-indigo-500/40 transition-all duration-300 border border-indigo-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-sm text-zinc-400">{project.timeline}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={personalInfo.github} className="hoverable px-4 py-2 rounded-xl hover:bg-white/10 text-sm font-medium border border-indigo-500/20">GitHub</a>
                    {project.url && <a href={project.url} className="hoverable p-2.5 rounded-xl hover:bg-white/10 border border-indigo-500/20"><ExternalLink size={18} /></a>}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 text-indigo-300 border border-indigo-500/20 font-medium">{tag}</span>
                  ))}
                </div>

                <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
                  <span className="text-indigo-400 font-semibold">Problem:</span> {project.problem}
                </p>

                <button
                  onClick={() => setExpandedId(expandedId === project.title ? null : project.title)}
                  className="hoverable flex items-center gap-2 text-sm text-indigo-400 font-semibold mt-4 group-hover:text-indigo-300 transition-colors"
                >
                  View Details <ChevronDown size={16} className={`transition-transform ${expandedId === project.title ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {expandedId === project.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-6 space-y-4 border-t border-indigo-500/20 pt-6"
                    >
                      <p className="text-zinc-300 text-sm leading-relaxed"><span className="text-indigo-400 font-semibold">Solution:</span> {project.solution}</p>
                      <p className="text-zinc-300 text-sm leading-relaxed"><span className="text-indigo-400 font-semibold">Impact:</span> {project.impact}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map(t => <span key={t} className="text-xs text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">{t}</span>)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
