"use client";

import { useAuth } from "@/Context/AuthProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    CandidateName: "",
    email: "",
    selectedCollege: "",
    address: ""
  });

  useEffect(() => {
    const fetchCollege = async () => {
      if (!user?.email) return;

      try {
        const res = await axios.get(
          `http://localhost:5000/api/admission/${user.email}`
        );
        const data = res.data.data;
        setFormData({
          CandidateName: data?.CandidateName || "",
          email: data?.email || "",
          selectedCollege: data?.selectedCollege || "",
          address: data?.address || ""
        });
      } catch (error) {
        console.error("Failed to fetch college data:", error);
      }
    };

    fetchCollege();
  }, [user?.email]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/admission/${user.email}`,
        formData
      );
      if (res.status === 200) {
        toast.success("✅ Profile updated successfully!");
      }
    } catch (error) {
      console.error("Update failed:", error);
      alert("❌ Failed to update profile");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-14 text-blue-600">
        My Profile
      </h1>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.name || "User Avatar"}
              className="w-28 h-28 rounded-full object-cover mb-5 shadow-md"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-blue-500 flex items-center justify-center mb-5 shadow-md text-white text-5xl font-bold">
              {formData.CandidateName?.charAt(0) || "U"}
            </div>
          )}

          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            {formData.CandidateName || "Imran Ahmed"}
          </h2>
          <p className="text-gray-600 mb-1">{formData.email || "imran@example.com"}</p>
          <p className="text-gray-600 mb-1">{formData.selectedCollege || "College"}</p>
          <p className="text-gray-600">{formData.address || "Address"}</p>
        </div>

        {/* Edit Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-8 border-b pb-3">
            Edit Profile
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="CandidateName"
                value={formData.CandidateName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">University</label>
              <input
                type="text"
                name="selectedCollege"
                value={formData.selectedCollege}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
