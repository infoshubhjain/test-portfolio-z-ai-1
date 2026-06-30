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
    <section id="leadership" className="relative py-24 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Leadership & <span className="text-indigo-400">Impact</span></h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">Engineering leadership extends beyond code. It requires strategic planning, operational execution, and community transformation.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {leadership.map((role, i) => {
          const Icon = iconMap[role.org] || Users;
          return (
            <motion.div
              key={role.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="hoverable glass rounded-2xl p-6 hover:bg-white/5 transition-all relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl group-hover:bg-indigo-600/20 transition-all"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <Icon className="text-indigo-400" size={20} />
                </div>
                <span className="text-xs text-zinc-500">{role.timeline}</span>
              </div>

              <h3 className="text-lg font-bold mb-1">{role.role}</h3>
              <p className="text-sm text-indigo-400 mb-4">{role.org}</p>

              <ul className="space-y-2">
                {role.points.map((point, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
