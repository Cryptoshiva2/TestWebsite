"use client";
import React, { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setMessage(result.message || "Form submitted successfully!");
    } catch (err) {
      setMessage("Error submitting form. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800 p-8">
      {/* Header */}
      <header className="w-full max-w-3xl text-center mb-12 mt-8">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-2">Karltech</h1>
        <p className="text-lg text-gray-700">
          Building simple, smart, and scalable technology solutions.
        </p>
      </header>

      {/* Description */}
      <section className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-2xl w-full text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Karltech</h2>
        <p className="text-gray-700 leading-relaxed">
          At Karltech, we’re passionate about turning innovative ideas into
          real-world products. Whether you're starting a project or scaling a
          system, our goal is to make technology accessible and impactful.
        </p>
      </section>

      {/* Contact Form */}
      <section className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-8 max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Get in Touch</h3>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Name */}
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          {/* Email */}
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />

          {/* Organization */}
          <input
            name="organization"
            type="text"
            placeholder="Organization"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Priority Tier */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority Tier
            </label>
            <select
              name="priority"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select Priority
              </option>
              <option value="A">A — Urgent / Top Priority</option>
              <option value="B">B — Important / Standard</option>
              <option value="C">C — Low Priority / Flexible</option>
            </select>
          </div>

          {/* Price Tag */}
          <input
            name="price"
            type="number"
            placeholder="Estimated Price (USD)"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Documents
            </label>
            <input
              name="files"
              type="file"
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0 file:text-sm file:font-semibold
                         file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              multiple
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hopeful Deadline
            </label>
            <input
              name="deadline"
              type="date"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-3 rounded-lg transition`}
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>
        </form>

        {/* Feedback Message */}
        {message && (
          <p className="text-center text-sm text-gray-600 mt-4">{message}</p>
        )}
      </section>
    </main>
  );
}
