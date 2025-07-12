"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { useAuth } from "@/Context/AuthProvider";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/reviews");
        setReviews(res.data.data); 
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  if (reviews.length === 0) {
    return (
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Student Reviews</h2>
        <p className="text-gray-500 italic">No reviews yet.</p>
      </section>
    );
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Student Reviews</h2>
      
      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="min-w-[280px] max-w-xs mx-4 p-6 bg-white rounded-xl shadow-md border border-gray-200"
          >
            <div className="mb-3">
              <p className="text-yellow-500 font-semibold text-lg">
                {"⭐".repeat(review.rating)}
              </p>
            </div>

            <p className="text-gray-800 mb-4">{review.feedback}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Reviews;
