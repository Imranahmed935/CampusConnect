"use client";
import { useEffect, useState } from "react";
import CollegeCard from "../Components/CollegeCard";

const CollagePage = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("/colleges.json")
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((err) => console.error("Failed to load colleges:", err));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">All Colleges</h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {colleges.map((collage) => (
          <CollegeCard key={collage.id} college={collage}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default CollagePage;
