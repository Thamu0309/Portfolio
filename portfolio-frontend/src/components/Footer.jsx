import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <div className="flex space-x-4">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">Home</Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">About</Link>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">Skills</Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">Projects</Link>
            <Link to="internship" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">Internship</Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-400">Contact</Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://www.linkedin.com/in/thamotharapandi39/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com/thamotharapandi___39"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Thamotharapandi U. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
