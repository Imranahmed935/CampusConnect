import React from "react";

const CollagePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">All Colleges</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* College Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border">
          <img
            src="https://source.unsplash.com/600x400/?university"
            alt="College"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-2">
            <h2 className="text-xl font-bold text-blue-600">
              Greenfield University
            </h2>
            <p>
              <span className="font-medium">Rating:</span> 4.7 ⭐
            </p>
            <p>
              <span className="font-medium">Admission Date:</span> July 15, 2025
            </p>
            <p>
              <span className="font-medium">Research Papers:</span> 32
            </p>
            <button className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>

        {/* Repeat the above card with different data for design */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border">
          <img
            src="https://source.unsplash.com/600x400/?college"
            alt="College"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-2">
            <h2 className="text-xl font-bold text-blue-600">Hilltop College</h2>
            <p>
              <span className="font-medium">Rating:</span> 4.5 ⭐
            </p>
            <p>
              <span className="font-medium">Admission Date:</span> August 1,
              2025
            </p>
            <p>
              <span className="font-medium">Research Papers:</span> 24
            </p>
            <button className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden border">
          <img
            src="https://source.unsplash.com/600x400/?education"
            alt="College"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 space-y-2">
            <h2 className="text-xl font-bold text-blue-600">
              Sunrise Institute
            </h2>
            <p>
              <span className="font-medium">Rating:</span> 4.8 ⭐
            </p>
            <p>
              <span className="font-medium">Admission Date:</span> June 30, 2025
            </p>
            <p>
              <span className="font-medium">Research Papers:</span> 41
            </p>
            <button className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollagePage;
