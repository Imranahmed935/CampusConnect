import Reviews from "../app/Components/Reviews";
import TopColleges from "../app/Components/TopColleges";
import CollegeGallery from "../app/Components/CollegeGallery";
import ResearchPapers from "./Components/ResearchPagers";
import Finder from "../app/Components/Finder";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="max-w-7xl mx-auto">
        <Finder />
        <TopColleges />
        <CollegeGallery />
        <ResearchPapers />
        <Reviews />
      </main>
      <footer className="row-start-3 mt-20 bg-gray-100 py-10 px-6 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 items-start justify-center sm:justify-between">
          {/* Logo + Intro */}
          <div className="max-w-xs text-left">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              CampusConnect
            </h2>
            <p className="text-gray-600">
              Connecting students to their dream colleges. Trusted reviews, easy
              applications, and secure admission experience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-blue-600">
                  Colleges
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-blue-600">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-blue-600">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Contact
            </h3>
            <p className="text-gray-600 text-sm">
              Email: support@campusconnect.com
            </p>
            <p className="text-gray-600 text-sm">Phone: +880 1234 567890</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 mt-20 text-gray-500 text-center text-sm border-t pt-4">
          &copy; {new Date().getFullYear()} CampusConnect. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
