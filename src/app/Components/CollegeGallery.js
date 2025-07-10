const CollegeGallery = () => {
  return (
    <section className="mb-40">
      <h2 className="text-2xl font-semibold mb-6">College Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <img
            key={i}
            src={`https://source.unsplash.com/400x300/?students,graduation,group,${i}`}
            alt="Graduate Group"
            className="rounded-lg shadow-md object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default CollegeGallery;
