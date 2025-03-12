"use client";

import { motion } from "framer-motion";
import { Tractor } from "lucide-react";
import { useState, useEffect } from "react";

export function Error404Animation() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Establecer el ancho de la ventana inicial
    setWindowWidth(window.innerWidth);

    // Actualizar el ancho de la ventana cuando cambie
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcular el ancho del contenedor de animación (80% del ancho de la ventana o máximo 800px)
  const containerWidth = Math.min(windowWidth * 0.8, 800);

  // Calcular las posiciones iniciales y finales
  const startX = -100;
  const endX = containerWidth + 100;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Campo de cultivo */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-logo-blue/20 to-transparent"></div>

      {/* Tractor animado */}
      <motion.div
        className="absolute bottom-4"
        initial={{ x: startX }}
        animate={{ x: endX }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <div className="flex items-center">
          <div className="bg-logo-blue text-white p-3 rounded-full">
            <Tractor className="h-8 w-8" />
          </div>
          <motion.div
            className="h-1 w-20 bg-logo-blue/30 rounded-full ml-[-8px]"
            initial={{ width: 20, opacity: 0.3 }}
            animate={{ width: [20, 60, 20], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>

      {/* Nubes flotantes */}
      <motion.div
        className="absolute top-10 left-[10%] w-20 h-8 bg-white rounded-full"
        animate={{ x: [0, 20, 0], opacity: [0.7, 0.9, 0.7] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-4 right-[20%] w-24 h-10 bg-white rounded-full"
        animate={{ x: [0, -30, 0], opacity: [0.6, 0.8, 0.6] }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Texto de error animado */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-logo-blue/20 text-9xl font-bold"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1 }}
      >
        404
      </motion.div>
    </div>
  );
}
