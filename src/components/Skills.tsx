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
    <section id="skills" className="relative py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl font-bold mb-16 text-center"
      >
        Technical <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup, i) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="hoverable glass rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 border border-indigo-500/10 hover:border-indigo-500/30"
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map(skill => (
                <span key={skill} className="px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 text-indigo-300 border border-indigo-500/20 font-medium">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
