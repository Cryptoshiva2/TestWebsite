import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Welcome Website",
  description: "A simple Next.js site ready for Vercel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
