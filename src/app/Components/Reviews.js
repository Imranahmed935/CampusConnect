const Reviews = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Student Reviews</h2>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-md shadow">
          <p className="font-medium">⭐⭐⭐⭐⭐ - Greenfield University</p>
          <p className="text-gray-700">Amazing learning environment and modern labs!</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md shadow">
          <p className="font-medium">⭐⭐⭐⭐ - Hilltop College</p>
          <p className="text-gray-700">Great faculty but library needs improvement.</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
