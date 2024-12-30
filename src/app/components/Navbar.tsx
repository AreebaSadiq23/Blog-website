"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-zinc-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-700 dark:text-white">
                TechInsight
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <ThemeSwitcher />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/blog" mobile>
              Blog
            </NavLink>
            <NavLink href="/about" mobile>
              About
            </NavLink>
            <NavLink href="/contact" mobile>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
  mobile = false,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}) {
  const baseClasses =
    "text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-900 hover:text-indigo-600 dark:hover:text-white-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
  const mobileClasses = "block text-base font-medium";
  const classes = mobile ? `${baseClasses} ${mobileClasses}` : baseClasses;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
