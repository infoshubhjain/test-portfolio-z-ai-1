"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovering(target.tagName === "A" || target.tagName === "BUTTON" || target.classList.contains("hoverable"));
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{ x: position.x - 16, y: position.y - 16 }}
    >
      <motion.div
        animate={{ scale: isHovering ? 1.5 : 1, opacity: isHovering ? 1 : 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-8 h-8 rounded-full border border-indigo-500/50 bg-indigo-500/10 backdrop-blur-sm"
      />
    </motion.div>
  );
}
