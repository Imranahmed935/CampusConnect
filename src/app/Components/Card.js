
const Card = ({ college }) => {
  const {
    CandidateName,
    address,
    date,
    email,
    image,
    number,
    selectedCollege,
    subject,
  } = college;

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-6 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <img
          className="w-24 h-24 object-cover rounded-full border-2 border-blue-500"
          src={image}
          alt={CandidateName}
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{CandidateName}</h2>
          <p className="text-sm text-gray-500">{email}</p>
          <p className="text-sm text-gray-500">{number}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <p><span className="font-medium">Subject:</span> {subject}</p>
        <p><span className="font-medium">College:</span> {selectedCollege}</p>
        <p><span className="font-medium">Address:</span> {address}</p>
        <p><span className="font-medium">Admission Date:</span> {date}</p>
      </div>
    </div>
  );
};

export default Card;
