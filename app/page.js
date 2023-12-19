import SelectedProjectsSection from "./components/SelectedProjectsSection";
import CompanyOverviewSection from "./components/CompanyOverviewSection";
import PartnersSection from "./components/PartnersSection";
import FinalCTASection from "./components/FinalCTASection";
import CategoriesSlider from "./components/CategoriesSlider";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-screen">
      <HeroBanner />

      <CategoriesSlider />

      <SelectedProjectsSection />

      <CompanyOverviewSection />

      <PartnersSection />

      <FinalCTASection />
    </div>
  );
}
