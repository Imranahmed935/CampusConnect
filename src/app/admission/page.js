"use client";
import { useAuth } from "@/Context/AuthProvider";
import axios from "axios";
import { useState } from "react";

const AdmissionPage = () => {
  const [selectedCollege, setSelectedCollege] = useState("");
  const { user } = useAuth();

  const selectCollegeHandle = (e) => {
    setSelectedCollege(e.target.value);
  };

  const handleAdmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const CandidateName = form.name.value;
    const subject = form.subject.value;
    const email = form.email.value;
    const number = form.number.value;
    const address = form.address.value;
    const date = form.date.value;
    const file = form.image.files[0];

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
      alert("Image upload failed. Please try again.");
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
    console.log(admissionData);

    const res = await axios.post(
      "http://localhost:5000/api/admission",
      admissionData
    );
    console.log(res.data);
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        New Admission
      </h1>

      {/* Admission Form */}
      <form
        className="bg-white p-6 shadow-md rounded-lg space-y-4"
        onSubmit={handleAdmission}
      >
        {/* College Selection */}
        <div className="mb-8">
          <label className="block mb-2 text-lg font-medium">
            Select College
          </label>
          <select
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
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject you want to study"
            className="w-full border p-2 rounded-md"
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
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            name="number"
            placeholder="Your phone number"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Your address"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            name="date"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input type="file" name="image" className="w-full" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Submit Admission
        </button>
      </form>
    </div>
  );
};

export default AdmissionPage;
