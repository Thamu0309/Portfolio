import React from "react";
import { FaReact, FaDatabase, FaHtml5, FaCss3Alt, FaPython, FaFigma } from "react-icons/fa";
import { SiDjango, SiSpringboot, SiC, SiSelenium } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: "75%", icon: <FaPython className="text-yellow-500" /> },
  { name: "C", level: "75%", icon: <SiC className="text-blue-600" /> },
  { name: "HTML/CSS", level: "80%", icon: <><FaHtml5 className="text-orange-500" /> <FaCss3Alt className="text-blue-600" /></> },
  { name: "React", level: "70%", icon: <FaReact className="text-blue-400" /> },
  { name: "Django", level: "70%", icon: <SiDjango className="text-green-700" /> },
  { name: "Spring Boot", level: "75%", icon: <SiSpringboot className="text-green-600" /> },
  { name: "Figma", level: "70%", icon: <FaFigma className="text-pink-500" /> },
  { name: "MySQL", level: "75%", icon: <FaDatabase className="text-indigo-600" /> },
  { name: "Selenium", level: "70%", icon: <SiSelenium className="text-purple-600" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-indigo-100 dark:bg-gray-900 p-8"
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
        Skills
      </h2>
      <div className="w-full max-w-3xl space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between items-center text-gray-700 dark:text-gray-200 mb-1">
              <div className="flex items-center space-x-2">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
              <span>{skill.level}</span>
            </div>
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-5 overflow-hidden">
              <motion.div
                className="bg-indigo-500 h-5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
