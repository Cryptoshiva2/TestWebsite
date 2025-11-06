"use client";
import React, { useEffect, useState } from "react";

export default function AdminPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        const res = await fetch("/api/submit", { method: "GET" });
        const result = await res.json();
        setSubmissions(result.data || []);
      } catch (error) {
        console.error("Error fetching submissions:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSubmissions();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Admin Panel
      </h1>
      <p className="text-center text-gray-600 mb-10">
        View and manage form submissions from your website.
      </p>

      {loading ? (
        <div className="text-center text-gray-500">Loading submissions...</div>
      ) : submissions.length === 0 ? (
        <div className="text-center text-gray-500">No submissions yet.</div>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {submissions.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                Submission #{i + 1}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <p>
                  <strong>Name:</strong> {s.name}
                </p>
                <p>
                  <strong>Email:</strong> {s.email}
                </p>
                <p>
                  <strong>Organization:</strong> {s.organization || "—"}
                </p>
                <p>
                  <strong>Priority:</strong> {s.priority || "—"}
                </p>
                <p>
                  <strong>Price:</strong> {s.price ? `$${s.price}` : "—"}
                </p>
                <p>
                  <strong>Deadline:</strong> {s.deadline || "—"}
                </p>
              </div>
              <div className="mt-4">
                <strong>Message:</strong>
                <p className="text-gray-600 mt-1">
                  {s.message || "(No message provided)"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
