"use client";
import { motion } from "framer-motion";
import { leadership } from "@/lib/data";
import { Users, TreePine, Microscope, Trophy, Briefcase } from "lucide-react";

const iconMap: Record<string, any> = {
  "Project Uthaan": Users,
  "AI and STEM Club": Microscope,
  "SBI Sustainability Drive": TreePine,
  "UI-CON | UIUC": Briefcase,
  "IGSA Diwali on the Quad": Users,
  "Model United Nations": Trophy
};

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Leadership & <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Impact</span></h2>
        <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">Engineering leadership extends beyond code. It requires strategic planning, operational execution, and community transformation.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leadership.map((role, i) => {
          const Icon = iconMap[role.org] || Users;
          return (
            <motion.div
              key={`${role.role}-${role.org}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="hoverable glass rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 relative overflow-hidden group border border-indigo-500/10 hover:border-indigo-500/30"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl group-hover:from-indigo-500/20 group-hover:to-cyan-500/20 transition-all duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 flex items-center justify-center border border-indigo-500/20">
                    <Icon className="text-indigo-400" size={24} />
                  </div>
                  <span className="text-xs text-zinc-500 font-medium px-3 py-1 rounded-full bg-white/5">{role.timeline}</span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">{role.role}</h3>
                <p className="text-sm text-indigo-400 mb-6 font-semibold">{role.org}</p>

                <ul className="space-y-3">
                  {role.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-zinc-300 flex items-start gap-3 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
