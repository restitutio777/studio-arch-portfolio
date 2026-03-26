import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ShowreelSection from "@/components/home/ShowreelSection";
import AboutTeaser from "@/components/home/AboutTeaser";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ShowreelSection />
      <AboutTeaser />
    </>
  );
}
