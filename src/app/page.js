import Reviews from "../app/Components/Reviews";
import TopColleges from "../app/Components/TopColleges";
import CollegeGallery from "../app/Components/CollegeGallery";
import ResearchPapers from "./Components/ResearchPagers";
import Finder from "../app/Components/Finder";

export default function Home() {
  return (
    <div>
      <main className="max-w-7xl mx-auto">
        <Finder />
        <TopColleges />
        <CollegeGallery />
        <ResearchPapers />
        <Reviews />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* Footer content */}
      </footer>
    </div>
  );
}
