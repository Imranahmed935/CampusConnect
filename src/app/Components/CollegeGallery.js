const CollegeGallery = () => {
  
  const galleryImages = [
    'g1.jpg',
    'g2.jpg',
    'g2.jpg',
    'g4.jpg',
    'g3.jpg',
    'g3.jpg',
    'g5.jpg',
    'g6.jpg',
    'g6.jpg',
    'g7.jpg',
  ];

  return (
    <section className="mb-20 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
        🎓 College Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={`/asset/${img}`}
            alt={`Gallery ${index + 1}`}
            className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-xl shadow hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default CollegeGallery;
