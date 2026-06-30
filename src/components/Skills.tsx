"use client";
import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "Rust", "JavaScript", "SQL"] },
  { category: "AI/ML", items: ["PyTorch", "TensorFlow", "HuggingFace", "Scikit-learn", "OpenAI API"] },
  { category: "Web", items: ["Next.js", "React", "Node.js", "FastAPI", "Docker"] },
  { category: "Tools", items: ["Git", "Linux", "PostgreSQL", "MongoDB", "AWS"] }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
      >
        Technical <span className="text-indigo-400">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, i) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="hoverable glass rounded-2xl p-6 hover:bg-white/5 transition-all"
          >
            <h3 className="text-lg font-bold mb-4 text-indigo-400">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map(skill => (
                <span key={skill} className="px-3 py-1 text-sm rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
