"use client";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-indigo-500/10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-zinc-400 mb-6 text-lg">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex justify-center gap-8">
          <a href={personalInfo.github} className="text-zinc-500 hover:text-white transition-colors text-lg">
            GitHub
          </a>
          <a href={personalInfo.linkedin} className="text-zinc-500 hover:text-white transition-colors text-lg">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-zinc-500 hover:text-white transition-colors text-lg">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
