import React from "react";
import yourImage from "../assets/your-image.jpg";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Home = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-indigo-100 dark:bg-gray-900 p-8 relative"
    >
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm Thamotharapandi!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Aspiring Full-Stack Developer | React + Spring Boot + MySQL
        </p>

        <a
          href="/Thamotharapandi_Full-Stack_Developer.pdf"
          download
          className="inline-block px-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Profile Image with Orbiting Sparkles & Glow */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
        {/* Particles */}
        <Particles
          id="orbit-sparkles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            particles: {
              number: { value: 20 },
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

        {/* Glowing Ring */}
        <div className="relative z-10">
          <div className="w-48 h-48 rounded-full relative flex justify-center items-center">
            <div className="absolute w-full h-full rounded-full animate-pulse-glow" style={{
              boxShadow: "0 0 40px 10px rgba(99,102,241,0.5)"
            }}></div>
            <img
              src={yourImage}
              alt="Thamotharapandi"
              className="w-48 h-48 rounded-full object-cover relative z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
