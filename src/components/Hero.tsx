"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";

function NeuralParticles() {
  const ref = useRef<THREE.Points>(null);
  const count = 5000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 15;
      pos[i3 + 1] = (Math.random() - 0.5) * 15;
      pos[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });
  
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial 
        transparent 
        color="#6366F1" 
        size={0.03} 
        sizeAttenuation={true} 
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <NeuralParticles />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />

      <div className="z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 px-5 py-2 rounded-full glass flex items-center gap-3 text-sm text-zinc-300 border border-indigo-500/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Available for Research & SWE Internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent"
        >
          Shubh Jain
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl text-zinc-300 max-w-4xl mb-10 font-light leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="hoverable px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="hoverable px-8 py-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 font-semibold text-lg border border-indigo-500/30"
          >
            Connect With Me
          </a>
          <a 
            href={personalInfo.resumeUrl} 
            className="hoverable px-8 py-4 rounded-xl glass hover:bg-white/10 transition-all duration-300 font-semibold text-lg border border-indigo-500/30 flex items-center gap-2"
          >
            <FileDown size={20} /> Resume
          </a>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center p-4 rounded-xl glass border border-indigo-500/20">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.value}</span>
              <span className="text-sm text-zinc-400 font-medium">{stat.label}</span>
              <span className="text-xs text-zinc-500 mt-1">{stat.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="animate-bounce text-indigo-400" size={32} />
      </motion.div>
    </section>
  );
}
