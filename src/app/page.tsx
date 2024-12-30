import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredPosts = [
  {
    id: "1",
    title: "The Future of AI in Web Development",
    excerpt:
      "Artificial Intelligence is revolutionizing industries, from healthcare to finance. By mimicking human intelligence, AI is enhancing decision-making processes, automating tasks, and offering insights that were previously unimaginable. Explore how AI is reshaping the world we live in, and discover the endless possibilities it presents for the future.",
    imageUrl: "/images/Ai.jpg",
    category: "Artificial Intelligence",
    date: "Dec 15, 2024",
  },
  {
    id: "2",
    title: "Mastering React Hooks",
    excerpt:
      "React, one of the most popular JavaScript libraries, is transforming the way developers build user interfaces. With its component-based architecture and efficient rendering system, React enables developers to create dynamic, responsive web applications. Dive into React and learn how it makes development faster, easier, and more scalable.",
    imageUrl: "/images/react.png",
    category: "React",
    date: "Dec 10, 2024",
  },
];

const latestPosts = [
  {
    id: "3",
    title: "The Power of Tailwind CSS",
    excerpt:
      "Discover how Tailwind CSS can revolutionize your workflow and help you build beautiful, responsive designs faster than ever.",
    imageUrl: "/images/tail.png",
    category: "CSS",
    date: "Dec 5, 2024",
  },
  {
    id: "4",
    title: "Next.js 15: What's New and Why It Matters",
    excerpt:
      "Explore the latest features in Next.js 15 and how they can enhance your web development projects.",
    imageUrl: "/images/nextjs.png",
    category: "Next.js",
    date: "Dec 20, 2024",
  },
  {
    id: "5",
    title: "The Power of TypeScript",
    excerpt:
      "TypeScript enhances JavaScript by adding static typing, improving code quality, and enabling better tooling for scalable, maintainable applications.",
    imageUrl: "/images/typescript.jpg",
    category: "Typescript",
    date: "Dec 25, 2024",
  },
  {
    id: "6",
    title: "GraphQL vs REST: Choosing the Right API",
    excerpt:
      "Compare GraphQL and REST APIs to understand which one is best suited for your next project",
    imageUrl: "/images/api.jpg",
    category: "API",
    date: "Dec 20, 2024",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-700">
      {/* Hero Section */}
      <header className="relative h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute w-[400px] h-[400px] bg-gray-400 rounded-full blur-3xl opacity-20 top-10 left-20 animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] bg-zinc-600 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 animate-gradient">
            Welcome to TechInsights
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-2xl opacity-90">
            Explore the latest trends, tutorials, and insights in web
            development, design, and technology.
          </p>
          <div className="mt-8 flex gap-6">
            <Link
              href="/blog"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-black text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gray-800 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Explore
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Posts */}
      <section className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">
          Featured Posts
        </h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col  shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="flex-shrink-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {post.category}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex space-x-1 text-sm text-black dark:text-gray-400">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">
          Latest Posts
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="flex-shrink-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {post.category}
                  </p>
                  <Link href={`/blog/${post.id}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {post.title}
                    </p>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
                      {post.excerpt}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex space-x-1 text-sm font-semibold text-teal-900 dark:text-gray-400">
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-teal-900 dark:text-indigo-400 text-sm font-semibold hover:underline ml-16"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-black text-base font-medium rounded-md text-black  hover:bg-black hover:text-white transition duration-150 ease-in-out"
          >
            View all posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
