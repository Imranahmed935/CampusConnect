"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("https://college-server-lyart.vercel.app/reviews");
        setReviews(res?.data?.data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  if (reviews.length === 0) {
    return (
      <section className="p-8 text-center bg-gray-50 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Student Reviews</h2>
        <p className="text-gray-500 italic">No reviews yet. Be the first to leave one!</p>
      </section>
    );
  }

  return (
    <section className="p-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Student Reviews</h2>

      <Marquee gradient={false} speed={50} pauseOnHover className="py-4">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="min-w-[300px] max-w-xs bg-white border border-blue-100 rounded-2xl shadow-lg mx-4 p-6 transition-transform hover:scale-105"
          >
            <div className="mb-3">
              <p className="text-yellow-500 text-lg">
                {"⭐".repeat(review.rating)}{" "}
                <span className="text-sm text-gray-500">({review.rating}/5)</span>
              </p>
            </div>

            <p className="text-gray-700 italic mb-4">{review.feedback}</p>

            {review.name && (
              <p className="text-sm font-semibold text-gray-600">— {review.name}</p>
            )}
            {review.college && (
              <p className="text-xs text-gray-400">College: {review.college}</p>
            )}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Reviews;
