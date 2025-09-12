import React from "react";

const projects = [
  {
    name: "Employee Management System",
    description: "A Full-stack web application for storing and managing employee data CRUD operations using Django, Bootstrap, and MySQL.",
    github: "https://github.com/Thamu0309/employee-management-system",
    live: "https://taskmanager.com",
  },
  {
    name: "Heart Disease Prediction System",
    description: "Machine learning-powered web app predicting heart disease risk using Flask, Machine learning, bootstrap.",
    github: "https://github.com/Thamu0309/heart-disease-prediction-system",
    live: "https://heart-disease-prediction-system-2.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-800 p-8 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
