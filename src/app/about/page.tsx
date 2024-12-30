import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <Layout>
      {/* Banner Image */}
      <div
        className="relative w-full h-[400px] sm:h-[300px] xs:h-[200px] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/about.jpeg)" }}
      ></div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl sm:text-4xl xs:text-3xl font-bold mb-8 text-center text-gray-700 dark:text-white mt-10">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image Section */}
          <Image
            src="/images/about.jpg"
            alt="Team"
            width={300}
            height={300}
            className="rounded-lg shadow-md h-[250] w-[500]"
            priority={true}
          />
          {/* Content Section */}
          <div className="prose lg:prose-xl dark:text-gray-400">
            <p>
              I&apos;m passionate about sharing knowledge and insights on web
              development, design, and technology. The goal of this blog is to
              provide you with valuable information, guidance, and the latest
              trends in the tech world.
            </p>
            <p className="mt-4">
              Whether you&apos;re here to learn development, stay updated on
              industry news, or explore creative solutions to everyday challenges,
              there&apos;s something here for you. My aim is to inspire and inform
              through engaging and insightful content that adds value to your
              journey.
            </p>
            <p className="mt-4">
              Thank you for visiting! If you have any suggestions, feedback, or
              topics you&apos;d like me to cover, feel free to reach out. Let&apos;s
              learn and grow together.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
