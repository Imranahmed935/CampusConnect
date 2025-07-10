import React from 'react';

const ProfilePage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">My Profile</h1>

      {/* Profile Display */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span> Imran Ahmed</p>
          <p><span className="font-medium">Email:</span> imran@example.com</p>
          <p><span className="font-medium">University:</span> Greenfield University</p>
          <p><span className="font-medium">Address:</span> Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Edit Profile Form */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Edit Profile</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              defaultValue="Imran Ahmed"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              defaultValue="imran@example.com"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">University</label>
            <input
              type="text"
              defaultValue="Greenfield University"
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              defaultValue="Dhaka, Bangladesh"
              className="w-full border p-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
