/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
experimental: {
appDir: true,
},
};


export default nextConfig;


// ---------- postcss.config.mjs ----------
export default {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
};


// ---------- tailwind.config.mjs ----------
/** @type {import('tailwindcss').Config} */
export default {
content: ["./app/**/*.{js,jsx,ts,tsx}"],
theme: {
extend: {},
},
plugins: [],
};


// ---------- app/page.jsx ----------
import React from "react";
import "../styles/globals.css";


export default function Page() {
return (
<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-center p-8">
<div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-lg">
<h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome!</h1>
<p className="text-gray-700 text-lg">
This is a simple Next.js app ready to deploy on Vercel.
</p>
<p className="mt-4 text-gray-600">
Edit this page in <code>app/page.jsx</code> and watch your changes live.
</p>
</div>
</main>
);
}
