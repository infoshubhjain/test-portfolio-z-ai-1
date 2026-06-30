"use client";
import { useEffect, useState } from "react";
import { Command } from "cmdk";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog 
      open={open} 
      onOpenChange={setOpen}
      className="fixed inset-0 z-[9998] flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm"
    >
      <div className="w-full max-w-xl bg-zinc-900/90 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
        <Command.Input 
          placeholder="Search projects, research, leadership..." 
          className="w-full bg-transparent border-none outline-none p-4 text-white placeholder:text-zinc-500 border-b border-white/5"
        />
        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="p-4 text-zinc-500 text-sm">No results found.</Command.Empty>
          
          <Command.Group heading="Navigation" className="text-xs text-zinc-500 px-2 pb-1">
            <Command.Item className="p-2 rounded-md hover:bg-white/5 cursor-pointer text-zinc-300" onSelect={() => { document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}); setOpen(false); }}>
              View Projects
            </Command.Item>
            <Command.Item className="p-2 rounded-md hover:bg-white/5 cursor-pointer text-zinc-300" onSelect={() => { document.getElementById('research')?.scrollIntoView({behavior:'smooth'}); setOpen(false); }}>
              Read Research
            </Command.Item>
            <Command.Item className="p-2 rounded-md hover:bg-white/5 cursor-pointer text-zinc-300" onSelect={() => { document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); setOpen(false); }}>
              Contact Me
            </Command.Item>
          </Command.Group>

          <Command.Group heading="External Links" className="text-xs text-zinc-500 px-2 pb-1">
            <Command.Item className="p-2 rounded-md hover:bg-white/5 cursor-pointer text-zinc-300" onSelect={() => { window.open('https://github.com/infoshubhjain'); setOpen(false); }}>
              GitHub Profile
            </Command.Item>
            <Command.Item className="p-2 rounded-md hover:bg-white/5 cursor-pointer text-zinc-300" onSelect={() => { window.open('https://www.linkedin.com/in/infoshubhjain/'); setOpen(false); }}>
              LinkedIn Profile
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
