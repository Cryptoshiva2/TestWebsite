import React from "react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800 p-8">
      {/* Header */}
      <header className="w-full max-w-3xl text-center mb-12 mt-8">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-2">Karltech</h1>
        <p className="text-lg text-gray-700">
          Building simple, smart, and scalable technology solutions.
        </p>
      </header>

      {/* Description Section */}
      <section className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-2xl w-full text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Karltech</h2>
        <p className="text-gray-700 leading-relaxed">
          At Karltech, we’re passionate about turning innovative ideas into real-world products.
          Whether you're starting a project or scaling a system, our goal is to make technology
          accessible and impactful.
        </p>
      </section>

      {/* Contact Form (placeholder for now) */}
      <section className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-8 max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Get in Touch</h3>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
