"use client";

import { useAuth } from "@/Context/AuthProvider";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const AdmissionPage = () => {
  const [selectedCollege, setSelectedCollege] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const selectCollegeHandle = (e) => {
    setSelectedCollege(e.target.value);
  };

  const handleAdmission = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const CandidateName = form.name.value;
    const subject = form.subject.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const date = form.date.value;
    const file = form.image.files[0];

    // Image validation
    if (!file?.type.startsWith("image/")) {
      toast.error("Only image files are allowed");
      setLoading(false);
      return;
    }

    if (file?.size > 2 * 1024 * 1024) {
      toast.error("Image size must be under 2MB");
      setLoading(false);
      return;
    }

    let imageUrl = "";

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const response = await axios.post(uploadUrl, formData);
      imageUrl = response.data.secure_url;
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Image upload failed. Please try again.");
      setLoading(false);
      return;
    }

    const admissionData = {
      selectedCollege,
      CandidateName,
      subject,
      email,
      number,
      address,
      date,
      image: imageUrl,
    };

    try {
      const res = await axios.post('https://college-server-lyart.vercel.app/admission',
        admissionData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res?.data?.success) {
        toast.success("Admission successful!");
        form.reset();
        setSelectedCollege("");
      } else {
        toast.error("Admission failed.");
        console.log("Response:", res.data);
      }
    } catch (error) {
      console.error("Admission submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        New Admission
      </h1>

      <form
        className="bg-white p-6 shadow-md rounded-lg space-y-4"
        onSubmit={handleAdmission}
      >
        <div className="mb-8">
          <label className="block mb-2 text-lg font-medium">Select College</label>
          <select
            required
            value={selectedCollege}
            onChange={selectCollegeHandle}
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose a College --</option>
            <option>Greenfield University</option>
            <option>Hilltop College</option>
            <option>Sunrise Institute</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Candidate Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject you want to study"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            defaultValue={user?.email}
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            name="number"
            placeholder="Your phone number"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Your address"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            name="date"
            className="w-full border p-2 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input type="file" name="image" className="w-full" required />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-md transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {loading ? "Submitting..." : "Submit Admission"}
        </button>
      </form>
    </div>
  );
};

export default AdmissionPage;
