"use client";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-zinc-400 mb-4">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a href={personalInfo.github} className="text-zinc-500 hover:text-white transition-colors">
            GitHub
          </a>
          <a href={personalInfo.linkedin} className="text-zinc-500 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-zinc-500 hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
