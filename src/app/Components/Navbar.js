import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white rounded mt-4 p-4 flex items-center justify-between max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">
        <Link href="/">CampusConnect</Link>
      </h1>
      <div className="flex gap-6 text-lg">
        <Link href="/">Home</Link>
        <Link href="/colleges">Colleges</Link>
        <Link href="/admission">Admission</Link>
        <Link href="/my-college">My College</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/signUp">SignUp</Link>
        <Link href="/signIn">SignIn</Link>
      </div>
    </nav>
  );
}
