import React from "react";

const Finder = () => {
  return (
    <section className="text-center py-24 ">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Find Your College
      </h2>
      <input
        type="text"
        placeholder="Search college by name..."
        className="w-full max-w-lg px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </section>
  );
};

export default Finder;
