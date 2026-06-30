"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          Get in <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">
          I'm always open to discussing research collaborations, internship opportunities, or interesting projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hoverable glass rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group border border-indigo-500/10 hover:border-indigo-500/30"
          >
            <Mail className="text-indigo-400 mx-auto mb-4" size={36} />
            <h3 className="font-semibold mb-2 text-white">Email</h3>
            <p className="text-sm text-zinc-400">{personalInfo.email}</p>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="hoverable glass rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group border border-indigo-500/10 hover:border-indigo-500/30"
          >
            <Phone className="text-indigo-400 mx-auto mb-4" size={36} />
            <h3 className="font-semibold mb-2 text-white">Phone</h3>
            <p className="text-sm text-zinc-400">{personalInfo.phone}</p>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable glass rounded-3xl p-8 hover:bg-white/5 transition-all duration-300 group border border-indigo-500/10 hover:border-indigo-500/30"
          >
            <ExternalLink className="text-indigo-400 mx-auto mb-4" size={36} />
            <h3 className="font-semibold mb-2 text-white">LinkedIn</h3>
            <p className="text-sm text-zinc-400">Connect with me</p>
          </a>
        </div>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
        >
          Send me a message
        </motion.a>
      </motion.div>
    </section>
  );
}
