"use client";
import React, { useEffect, useState } from "react";

export default function AdminPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch from a database here.
    // For now, we’ll mock it.
    const stored = JSON.parse(localStorage.getItem("submissions") || "[]");
    setSubmissions(stored);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <p className="mb-8 text-gray-600">View incoming form submissions below:</p>

      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <ul className="space-y-4">
          {submissions.map((s, i) => (
            <li key={i} className="bg-white p-4 rounded-lg shadow">
              <p><strong>Name:</strong> {s.name}</p>
              <p><strong>Email:</strong> {s.email}</p>
              <p><strong>Organization:</strong> {s.organization}</p>
              <p><strong>Priority:</strong> {s.priority}</p>
              <p><strong>Price:</strong> ${s.price}</p>
              <p><strong>Deadline:</strong> {s.deadline}</p>
              <p><strong>Message:</strong> {s.message}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
