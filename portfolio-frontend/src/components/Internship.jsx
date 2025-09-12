import React from "react";

const internshipData = [
  {
    title: "Full-Stack Developer[Java Spring Boot]",
    company: "Evolve It Solutions",
    duration: "May 2025 - July 2025",
    link: "https://evolveitsolution.com/",
  },
  {
    title: "Full-Stack Developer[Python]",
    company: "Accent Techno Soft",
    duration: "Sep 2023 - Oct 2023",
    link: "https://accenttechnosoft.com/",
  },
];

const Internship = () => {
  return (
    <section
      id="internship"
      className="min-h-screen bg-indigo-100 dark:bg-gray-900 py-12 px-4"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Internship Experience
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {internshipData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h4 className="text-lg font-bold mb-1 text-gray-800 dark:text-white">
              {item.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-1">{item.company}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">{item.duration}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                View Company
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Common Button for Certifications */}
      <div className="text-center mt-12">
        <a
          href="https://drive.google.com/drive/u/0/folders/13U2mseArxY4wVoSilGr22PVzqunkTAjD" // or link to a certifications section/page
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          View Certifications
        </a>
      </div>
    </section>
  );
};

export default Internship;
