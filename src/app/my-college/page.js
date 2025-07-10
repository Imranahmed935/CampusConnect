'use client'



const MyCollegePage = () => {
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">My College</h1>

      {/* College Info */}
      <div className="bg-white p-6 rounded-md shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Greenfield University</h2>
        <p><span className="font-medium">Subject:</span> Computer Science</p>
        <p><span className="font-medium">Admission Date:</span> July 15, 2025</p>
        <p><span className="font-medium">Candidate Name:</span> Imran Ahmed</p>
        <p><span className="font-medium">Email:</span> imran@example.com</p>
        <p><span className="font-medium">Phone:</span> +8801XXXXXXX</p>
      </div>

      {/* Add Review */}
      <div className="bg-gray-50 p-6 rounded-md shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Rating</label>
            <select className="w-full border p-2 rounded-md">
              <option value="">Select Rating</option>
              <option>1 - Poor</option>
              <option>2 - Fair</option>
              <option>3 - Good</option>
              <option>4 - Very Good</option>
              <option>5 - Excellent</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Review</label>
            <textarea
              rows="4"
              placeholder="Write your feedback..."
              className="w-full border p-2 rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Review Display Section */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">Your Reviews</h3>
        <div className="space-y-3">
          <div className="border-b pb-3">
            <p className="text-gray-700">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-800">Amazing college! Great faculty and facilities.</p>
          </div>
          <div className="border-b pb-3">
            <p className="text-gray-700">⭐⭐⭐⭐</p>
            <p className="text-gray-800">Good experience overall. Could improve events organization.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollegePage;
