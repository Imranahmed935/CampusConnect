import React from 'react';

const AdmissionPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">New Admission</h1>

      {/* College Selection */}
      <div className="mb-8">
        <label className="block mb-2 text-lg font-medium">Select College</label>
        <select className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">-- Choose a College --</option>
          <option>Greenfield University</option>
          <option>Hilltop College</option>
          <option>Sunrise Institute</option>
        </select>
      </div>

      {/* Admission Form */}
      <form className="bg-white p-6 shadow-md rounded-lg space-y-4">
        <div>
          <label className="block mb-1 font-medium">Candidate Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <input
            type="text"
            placeholder="Subject you want to study"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            placeholder="Your phone number"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            placeholder="Your address"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            className="w-full border p-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            className="w-full"
          />
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
