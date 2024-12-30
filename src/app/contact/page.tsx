import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      {/* Banner Image */}
      <div
        className="relative w-full h-[400px] sm:h-[300px] xs:h-[200px] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/contact.jpg)" }}
      ></div>

      {/* Content Section */}
      <div className="max-w-2xl mx-auto py-16 px-6 sm:px-8 lg:px-10">
        <h1 className="text-5xl sm:text-4xl xs:text-3xl font-bold text-center text-gray-700 dark:text-gray-400 mb-12">
          Get in Touch
        </h1>

        {/* Contact Form */}
        <div className="p-10 sm:p-6 xs:p-4 shadow-lg border border-gray-300 dark:border-gray-700 mb-12">
          <form className="space-y-8">
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg sm:text-base xs:text-sm font-medium text-gray-700 dark:text-slate-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-2 w-full px-6 py-4 sm:py-3 xs:py-2 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg sm:text-base xs:text-sm font-medium text-gray-700 dark:text-slate-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full px-6 py-4 sm:py-3 xs:py-2 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg sm:text-base xs:text-sm font-medium text-gray-700 dark:text-slate-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message"
                rows={6}
                className="mt-2 w-full px-6 py-4 sm:py-3 xs:py-2 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                required
              ></textarea>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-[150px] justify-center py-4 px-4 sm:py-3 sm:px-3 xs:py-2 xs:px-2 border border-black text-black dark:border-gray-700 dark:text-white dark:hover:bg-gray-600 font-semibold rounded-lg shadow-md hover:bg-black hover:text-white transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
