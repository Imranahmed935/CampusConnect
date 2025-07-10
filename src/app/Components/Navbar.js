"use client";
import { useAuth } from "@/Context/AuthProvider";
import Link from "next/link";

export default function Navbar() {
  const { logOut, user, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      console.log("Sign-out successful");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="bg-blue-600 text-white rounded mt-4 p-4 flex items-center justify-between max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">
        <Link href="/">CampusConnect</Link>
      </h1>

      <div className="flex gap-6 text-lg items-center">
        <Link href="/">Home</Link>
        <Link href="/colleges">Colleges</Link>
        <Link href="/admission">Admission</Link>
        <Link href="/my-college">My College</Link>

        {!loading &&
          (user ? (
            <>
              <Link href="/profile">
                <span className="hidden sm:inline border border-white px-2 rounded">
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
    </nav>
  );
}
