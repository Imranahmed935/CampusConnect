"use client";

import { useState } from "react";
import { useAuth } from "@/Context/AuthProvider";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Navbar() {
  const { logOut, user, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Sign-out successful");
    } catch (error) {
      toast.error("Logout error:", error);
    }
  };

  return (
    <nav className="bg-blue-600 text-white rounded mt-4 p-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Link href="/">CampusConnect</Link>
        </h1>

        {/* Hamburger Button */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-lg items-center">
          <Link href="/">Home</Link>
          <Link href="/colleges">Colleges</Link>
          <Link href="/admission">Admission</Link>
          <Link href="/my-college">My College</Link>

          {!loading &&
            (user ? (
              <>
                <Link href="/profile">
                  <span className="border border-white px-2 rounded">
                    {user?.displayName || "User"}
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/signUp">Sign Up</Link>
                <Link href="/signIn">Sign In</Link>
              </>
            ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-3 text-lg">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/colleges" onClick={() => setMenuOpen(false)}>
            Colleges
          </Link>
          <Link href="/admission" onClick={() => setMenuOpen(false)}>
            Admission
          </Link>
          <Link href="/my-college" onClick={() => setMenuOpen(false)}>
            My College
          </Link>

          {!loading &&
            (user ? (
              <>
                <Link href="/profile" onClick={() => setMenuOpen(false)}>
                  <span className="border border-white px-2 rounded inline-block">
                    {user?.displayName || "User"}
                  </span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition mt-2"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/signUp" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </Link>
                <Link href="/signIn" onClick={() => setMenuOpen(false)}>
                  Sign In
                </Link>
              </>
            ))}
        </div>
      )}
    </nav>
  );
}
