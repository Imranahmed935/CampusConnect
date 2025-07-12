"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PrivateRoute from "@/app/Components/PrivateRoute";

const DetailsPage = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCollege = async () => {
      try {
        const res = await fetch("/colleges.json");
        const data = await res.json();
        const found = data.find((item) => item.id === parseInt(id));
        if (found) {
          setCollege(found);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to load college data:", err);
        setError(true);
      }
    };

    fetchCollege();
  }, [id]);

  if (error || !college) {
    return (
      <div className="text-center py-20 text-red-600 text-xl">
        College not found.
      </div>
    );
  }

  return (
    <PrivateRoute>
      <div className="max-w-5xl mx-auto p-6 md:p-10 bg-white rounded-3xl mt-10">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-[300px] md:h-[400px] object-cover rounded-xl transition-transform hover:scale-105 duration-300"
        />

        <div className="mt-8 space-y-4 text-gray-800">
          <h1 className="text-4xl font-bold text-blue-700">{college.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <p className="text-lg font-medium text-yellow-600">
              {college.rating} / 5
            </p>
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(college.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.16 3.574a1 1 0 00.95.69h3.764c.969 0 1.371 1.24.588 1.81l-3.044 2.212a1 1 0 00-.364 1.118l1.16 3.574c.3.921-.755 1.688-1.54 1.118l-3.044-2.212a1 1 0 00-1.176 0L5.538 17.023c-.784.57-1.838-.197-1.539-1.118l1.16-3.574a1 1 0 00-.364-1.118L1.75 9.001c-.784-.57-.38-1.81.588-1.81h3.765a1 1 0 00.95-.69l1.16-3.574z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Details grid */}
          <div className="grid md:grid-cols-2 gap-6 text-[17px]">
            <p>
              <span className="font-semibold">📅 Admission Date:</span>{" "}
              {college.admissionDate}
            </p>
            <p>
              <span className="font-semibold">📖 Research Papers:</span>{" "}
              {college.researchCount}
            </p>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mt-6">About</h2>
            <p className="mt-2 text-gray-600 leading-relaxed">
              {college.description}
            </p>
          </div>

          {/* Events */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">🎉 Events</h2>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              {college.events.map((event, idx) => (
                <li key={idx}>{event}</li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-700">⚽ Sports</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {college.sports.map((sport, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {sport}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
              Apply for Admission
            </button>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default DetailsPage;
