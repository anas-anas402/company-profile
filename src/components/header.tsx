"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed z-10 w-full p-4 md:px-12 shadow-lg bg-white">
      <div className="flex flex-row justify-between">
        <div className="w-[100px] h-[30px] relative">
          <Link href="/">
            <Image
              src="/faithco-logo.svg"
              alt="Faith Company Logo"
              fill
              className="object-cover"
            />
          </Link>
        </div>
        <ul className="flex flex-row gap-5">
          <li className="group">
            <Link
              href="/"
              className="relative group-hover:text-lg transition-all"
            >
              Home
              <span className="absolute bottom-0 h-[2px] bg-blue-500 left-0 w-0 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/about"
              className="relative group-hover:text-lg transition-all"
            >
              About
              <span className="absolute bottom-0 h-[2px] bg-blue-500 left-0 w-0 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/service"
              className="relative group-hover:text-lg transition-all"
            >
              Service
              <span className="absolute bottom-0 h-[2px] bg-blue-500 left-0 w-0 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="/teams"
              className="relative group-hover:text-lg transition-all"
            >
              Teams
              <span className="absolute bottom-0 h-[2px] bg-blue-500 left-0 w-0 group-hover:w-full transition-all"></span>
            </Link>
          </li>
          <li className="group">
            <Link
              href="#contact"
              className="relative group-hover:text-lg transition-all"
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
