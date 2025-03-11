"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar({ color = "bg-logo-blue" }) {
  const { scrollYProgress } = useScroll();

  // Aplicamos un spring para hacer la animación más suave
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 ${color} z-50`}
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}
