'use client'
import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";


const TopColleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("/colleges.json")
      .then((res) => res.json())
      .then((data) => setColleges(data.slice(3)))
      .catch((err) => console.error("Failed to load colleges:", err));
  }, []);
  return (
    <section className="mb-40">
      <h2 className="text-2xl font-semibold mb-6">Top Colleges</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {colleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </section>
  );
};

export default TopColleges;
