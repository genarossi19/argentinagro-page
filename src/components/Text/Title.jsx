import { motion } from "framer-motion";

export default function Title() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="flex-1 "
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.h1
        className="text-6xl font-semibold text-white text-center text-balance mt-40"
        variants={item}
      >
        La solución ideal para{" "}
        <motion.span
          className="text-logo-blue font-bold"
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          proteger
        </motion.span>{" "}
        tus{" "}
        <motion.span
          className="text-logo-blue font-bold"
          variants={item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          cultivos
        </motion.span>
        .
      </motion.h1>

      <motion.p
        className="text-2xl text-white text-center font-medium mt-6"
        variants={item}
      >
        Desde 1976 al servicio de la agricultura regional.
      </motion.p>
    </motion.div>
  );
}
