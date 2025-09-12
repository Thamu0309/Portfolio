import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Intro = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // hide intro after 3s
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-indigo-600 flex flex-col justify-center items-center z-50"
      >
        {/* Sparkle Particles */}
        <Particles
          id="intro-sparkles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            particles: {
              number: { value: 30 },
              color: { value: ["#ffffff", "#facc15", "#3b82f6"] },
              shape: { type: "circle" },
              size: { value: { min: 2, max: 4 } },
              move: { enable: true, speed: 1, outModes: "out" },
              opacity: { value: 1 },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" } },
            },
          }}
          className="absolute w-full h-full"
        />

        {/* Welcome Text */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4 z-10"
        >
          👋 Welcome to My Portfolio!
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-white z-10"
        >
          Thamotharapandi — Aspiring Full-Stack Developer
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Intro;
