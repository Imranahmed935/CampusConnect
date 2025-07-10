import CollegeCard from "./CollegeCard";

const sampleColleges = [
  {
    id: 1,
    name: "Greenfield University",
    image: "https://source.unsplash.com/600x400/?college,1",
    admission: "July 10, 2025",
    events: "Tech Fest, Sports Week",
    research: "20+ projects",
    sports: "Cricket, Football",
  },
  {
    id: 2,
    name: "Hilltop College",
    image: "https://source.unsplash.com/600x400/?college,2",
    admission: "July 11, 2025",
    events: "Cultural Fest, Hackathon",
    research: "15+ papers",
    sports: "Basketball, Swimming",
  },
  {
    id: 3,
    name: "Sunrise Institute",
    image: "https://source.unsplash.com/600x400/?college,3",
    admission: "July 12, 2025",
    events: "Career Fair, Sports Meet",
    research: "30+ projects",
    sports: "Volleyball, Chess",
  },
];

const TopColleges = () => {
  return (
    <section className="mb-40">
      <h2 className="text-2xl font-semibold mb-6">Top Colleges</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {sampleColleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </section>
  );
};

export default TopColleges;
