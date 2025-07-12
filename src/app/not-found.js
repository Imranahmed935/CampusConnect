"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-purple-700 via-indigo-800 to-blue-900 text-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-[10rem] font-extrabold leading-none tracking-wide select-none animate-bounce">
          404
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-6 drop-shadow-lg">
          Oops! Page Not Found
        </p>
        <p className="mb-10 text-gray-300">
          The page looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-block bg-white text-purple-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition"
        >
          Go Back Home
        </Link>
      </div>

      {/* Optional: Animated SVG or icon */}
      <svg
        className="w-48 h-48 mt-12 opacity-70 animate-spin-slow"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4v4m0 8v4m4-12h4M4 12H8m7.071 4.071l2.828 2.828M4.929 4.929l2.828 2.828M16.243 7.757l2.828-2.828M7.757 16.243l-2.828 2.828"
        />
      </svg>
    </div>
  );
};

export default NotFoundPage;
