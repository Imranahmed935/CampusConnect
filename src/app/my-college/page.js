"use client";

import { useAuth } from "@/Context/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyCollegePage = () => {
  const { user } = useAuth();
  const [myCollege, setMyCollege] = useState({});
  const [review, setReview] = useState({
    rating: "",
    feedback: "",
  });
  // Fetch admission info
  useEffect(() => {
    const fetchCollege = async () => {
      if (!user?.email) return;

      try {
        const res = await axios.get(
          `http://localhost:5000/api/admission/${user.email}`
        );
        setMyCollege(res.data.data);
      } catch (error) {
        console.error("Failed to fetch college data:", error);
      }
    };

    fetchCollege();
  }, [user?.email]);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!review.rating || !review.feedback) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      // Convert rating to a number (in case it's from a select dropdown)
      const reviewData = {
        ...review,
        rating: Number(review.rating),
      };

      const res = await axios.post(
        "http://localhost:5000/api/reviews",
        reviewData
      );

      if (res.data?.success) {
        toast.success("Review submitted successfully!");
        setReview({ rating: "", feedback: "" }); // Reset form
      } else {
        toast.error("Something went wrong while submitting the review.");
      }
    } catch (error) {
      console.error("Review submission failed:", error);
      toast.error("Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        My College
      </h1>

      {/* Profile Card */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center gap-4">
            <img
              className="w-24 h-24 object-cover rounded-full border-2 border-blue-500"
              src={myCollege?.image || "https://via.placeholder.com/150"}
              alt={myCollege?.CandidateName || "Candidate"}
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {myCollege?.CandidateName || "Candidate Name"}
              </h2>
              <p className="text-sm text-gray-500">{myCollege?.email}</p>
              <p className="text-sm text-gray-500">{myCollege?.number}</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <p>
              <span className="font-medium">Subject:</span> {myCollege?.subject}
            </p>
            <p>
              <span className="font-medium">College:</span>{" "}
              {myCollege?.selectedCollege}
            </p>
            <p>
              <span className="font-medium">Address:</span> {myCollege?.address}
            </p>
            <p>
              <span className="font-medium">Admission Date:</span>{" "}
              {myCollege?.date}
            </p>
          </div>
        </div>
      </div>

      {/* Review Form */}
      <div className="bg-gray-50 p-6 rounded-md shadow-md my-10">
        <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
        <form onSubmit={handleReviewSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Rating</label>
            <select
              name="rating"
              value={review.rating}
              onChange={handleReviewChange}
              className="w-full border p-2 rounded-md"
            >
              <option value="">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Review</label>
            <textarea
              name="feedback"
              rows="4"
              value={review.feedback}
              onChange={handleReviewChange}
              placeholder="Write your feedback..."
              className="w-full border p-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Review Display (Static for Now) */}
      {/* <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">Your Reviews</h3>
        <div className="space-y-3">
          <div className="border-b pb-3">
            <p className="text-gray-700">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-800">
              Amazing college! Great faculty and facilities.
            </p>
          </div>
          <div className="border-b pb-3">
            <p className="text-gray-700">⭐⭐⭐⭐</p>
            <p className="text-gray-800">
              Good experience overall. Could improve events organization.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MyCollegePage;
