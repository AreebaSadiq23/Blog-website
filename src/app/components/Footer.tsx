import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-zinc-700 shadow-inner">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <Link
              href="/"
              className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/blog"
              className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Blog
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/about"
              className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/contact"
              className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Contact
            </Link>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/areeba-sadiq-05a499315"
            className="text-gray-600 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedinIn className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/AreebaSadiq23"
            className="text-gray-600 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-400 dark:text-white">
          &copy; 2024 TechInsight Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
