const CollegeCard = ({ college }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={college.image} alt={college.name} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-blue-600">{college.name}</h3>
        <p><strong>Admission:</strong> {college.admission}</p>
        <p><strong>Events:</strong> {college.events}</p>
        <p><strong>Research:</strong> {college.research}</p>
        <p><strong>Sports:</strong> {college.sports}</p>
        <button className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;
