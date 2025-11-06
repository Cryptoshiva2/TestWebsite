/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
};


module.exports = nextConfig;


// ---------- postcss.config.js ----------
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
};


// ---------- tailwind.config.js ----------
/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./app/**/*.{js,ts,jsx,tsx}"],
theme: {
extend: {},
},
plugins: [],
};


// ---------- app/page.js ----------
import React from "react";
import "../styles/globals.css";


export default function Home() {
return (
<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 text-center p-8">
<div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-lg">
<h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome!</h1>
<p className="text-gray-700 text-lg">
This is a simple React + Next.js website ready to deploy on Vercel.
</p>
<p className="mt-4 text-gray-600">
Edit this page in <code>app/page.js</code> and watch your changes live.
</p>
</div>
</main>
);
}
