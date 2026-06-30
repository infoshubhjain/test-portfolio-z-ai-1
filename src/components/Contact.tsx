"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Mail, Phone, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Get in <span className="text-indigo-400">Touch</span>
        </h2>
        
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          I'm always open to discussing research collaborations, internship opportunities, or interesting projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hoverable glass rounded-2xl p-6 hover:bg-white/5 transition-all group"
          >
            <Mail className="text-indigo-400 mx-auto mb-4" size={32} />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-zinc-400">{personalInfo.email}</p>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="hoverable glass rounded-2xl p-6 hover:bg-white/5 transition-all group"
          >
            <Phone className="text-indigo-400 mx-auto mb-4" size={32} />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-zinc-400">{personalInfo.phone}</p>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hoverable glass rounded-2xl p-6 hover:bg-white/5 transition-all group"
          >
            <ExternalLink className="text-indigo-400 mx-auto mb-4" size={32} />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-zinc-400">Connect with me</p>
          </a>
        </div>

        <motion.a
          href={`mailto:${personalInfo.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium text-lg"
        >
          Send me a message
        </motion.a>
      </motion.div>
    </section>
  );
}
