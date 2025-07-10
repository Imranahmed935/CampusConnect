"use client";

import { useAuth } from "@/Context/AuthProvider";
import { useState } from "react";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import auth from "@/firebase/firebase.config";

const SignUpPage = () => {
  const { createUser } = useAuth();
  const [uploading, setUploading] = useState(false);

  const handleSighUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const file = e.target.image.files[0];


    setUploading(true);

    try {
      // ✅ Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );

      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const response = await axios.post(uploadUrl, formData);
      const imageUrl = response.data.secure_url;


      // ✅ Call createUser from context
      createUser(email, password).then((result) => {
        console.log(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: imageUrl,
        });
      });
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center to-blue-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSighUp}>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Profile Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            {uploading ? "Uploading..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/signIn"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
