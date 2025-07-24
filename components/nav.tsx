"use client";
import React, { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary p-5 mb-5">
      <div className="flex justify-between items-center">
        <h1 className="xl:text-xl text-sm">
          <a href="#">Portfolio</a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-background"></div>
          <div className="w-6 h-0.5 bg-background"></div>
          <div className="w-6 h-0.5 bg-background"></div>
        </button>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 mt-4" : "max-h-0"
        } lg:hidden`}
      >
        <ul className="flex flex-col gap-3">
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
