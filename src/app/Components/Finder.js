"use client";

import React, { useEffect, useState } from "react";

const Finder = () => {
  const [colleges, setColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch data from public/colleges.json
  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const res = await fetch("/colleges.json");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setColleges(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchColleges();
  }, []);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-8">Loading colleges...</p>;
  if (error) return <p className="text-center mt-8 text-red-600">Failed to load colleges.</p>;

  return (
    <section className="text-center py-24 px-4">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Find Your College</h2>

      <input
        type="text"
        placeholder="Search college by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-lg px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Show results ONLY when user types */}
      {searchTerm && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredColleges.length > 0 ? (
            filteredColleges.map((college) => (
              <div
                key={college.id}
                className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-md"
              >
                <img
                  src={college.image}
                  alt={college.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 text-left space-y-2">
                  <h3 className="text-2xl font-semibold text-blue-700">{college.name}</h3>
                  <p className="text-gray-700 text-sm">
                    📅 <strong>Admission Date:</strong> {college.admissionDate}
                  </p>
                  <p className="text-gray-700 text-sm">
                    📖 <strong>Research Papers:</strong> {college.researchCount}
                  </p>
                  <p className="text-gray-700 text-sm">
                    ⭐ <strong>Rating:</strong> {college.rating} / 5
                  </p>
                  <div className="mt-2">
                    <h4 className="font-medium text-gray-800">Events:</h4>
                    <ul className="list-disc ml-6 text-sm text-gray-600">
                      {college.events?.map((event, idx) => (
                        <li key={idx}>{event}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h4 className="font-medium text-gray-800">Sports:</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {college.sports?.map((sport, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                        >
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full mt-8">No colleges found.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Finder;
