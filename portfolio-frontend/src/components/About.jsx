import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-800 p-8"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        About Me
      </h2>
      <p className="max-w-3xl text-center text-gray-600 dark:text-gray-300 text-lg">
        I’m a detail-oriented Computer Science undergraduate specializing in <b>AI and Data Science</b>, with hands-on experience in <b>full-stack web development</b>. I work with <b>Python, Django, Spring Boot, MySQL</b>, and frontend technologies like <b>HTML, CSS, Bootstrap, and React</b>.
        
        During my internships at <b>Accent Techno Soft</b> and <b>Evolve Solutions</b>, I gained real-world experience in <b>software design, problem-solving, and collaborative development</b>. I have developed projects, including <b>an Employee Management System</b> – a Full-stack web application for storing and managing employee data,

        <b> and a Heart Disease Prediction System</b> – a Machine learning-powered web app predicting heart disease risk.

        I also hold a <b>Selenium Testing certification</b>, giving me expertise in automated testing and software quality assurance.

        I’m passionate about building innovative applications and eager to contribute and grow in a <b>software or web development role</b>.
      </p>
    </section>
  );
};

export default About;
