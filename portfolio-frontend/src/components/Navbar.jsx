import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Internship", to: "internship" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white">Thamotharapandi U</div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 text-gray-700 dark:text-gray-200">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-500 transform transition-transform duration-300 hover:scale-110"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 text-gray-700 dark:text-gray-200">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer transform transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
