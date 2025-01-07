"use client";
import { useState } from "react";
// import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed z-10 w-full p-4 md:px-12 shadow-lg bg-white">
      <div className="flex flex-row justify-between items-center">
        <div>
          <p>ABC Inc.</p>
        </div>
        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
        <ul
          className={`absolute md:relative md:flex md:items-center md:gap-5 bg-white md:bg-transparent transition-all ${
            isOpen ? "top-12 left-0 w-full md:w-auto p-4" : "hidden md:flex"
          }`}
        >
          <li className="group">
            <Link
              href="/"
              className="relative group-hover:text-lg transition-all"
              onClick={handleLinkClick}
            >
              Home
              <span className="absolute bottom-0 h-[2px] bg-blue-500 left-0 w-0 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/about"
              className="relative group-hover:text-lg transition-all"
              onClick={handleLinkClick}
            >
              About
              <span className="absolute bottom-0 h-[2px] bg-blue-500 left-0 w-0 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/service"
              className="relative group-hover:text-lg transition-all"
              onClick={handleLinkClick}
            >
              Service
              <span className="absolute bottom-0 h-[2px] bg-blue-500 left-0 w-0 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/teams"
              className="relative group-hover:text-lg transition-all"
              onClick={handleLinkClick}
            >
              Teams
              <span className="absolute bottom-0 h-[2px] bg-blue-500 left-0 w-0 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="#contact"
              className="relative group-hover:text-lg transition-all"
              onClick={handleLinkClick}
            >
              Contact
              <span className="absolute bottom-0 h-[2px] bg-blue-500 left-0 w-0 group-hover:w-full transition-all"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
