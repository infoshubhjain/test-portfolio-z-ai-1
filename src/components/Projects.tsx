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
    <section id="projects" className="relative min-h-screen py-24 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
      >
        Featured <span className="text-indigo-400">Projects</span>
      </motion.h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`hoverable px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTag === tag ? "bg-indigo-600 text-white" : "glass text-zinc-400 hover:text-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="hoverable glass rounded-2xl p-6 relative group hover:border-indigo-500/30 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-zinc-500">{project.timeline}</p>
                </div>
                <div className="flex gap-2">
                  <a href={personalInfo.github} className="hoverable px-3 py-2 rounded-full hover:bg-white/10 text-sm font-medium">GitHub</a>
                  {project.url && <a href={project.url} className="hoverable p-2 rounded-full hover:bg-white/10"><ExternalLink size={18} /></a>}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">{tag}</span>
                ))}
              </div>

              <p className="text-zinc-400 text-sm mb-4">
                <span className="text-zinc-300 font-medium">Problem:</span> {project.problem}
              </p>

              <button
                onClick={() => setExpandedId(expandedId === project.title ? null : project.title)}
                className="hoverable flex items-center gap-1 text-sm text-indigo-400 mt-4"
              >
                Details <ChevronDown size={14} className={`transition-transform ${expandedId === project.title ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {expandedId === project.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-4 space-y-3 border-t border-white/5 pt-4"
                  >
                    <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Solution:</span> {project.solution}</p>
                    <p className="text-zinc-400 text-sm"><span className="text-zinc-300 font-medium">Impact:</span> {project.impact}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map(t => <span key={t} className="text-xs text-zinc-500 bg-white/5 px-2 py-1 rounded">{t}</span>)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
