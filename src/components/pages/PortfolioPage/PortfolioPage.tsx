import AboutSection from "@/components/organisms/AboutSection";
import ContactSection from "@/components/organisms/ContactSection";
import HeroSection from "@/components/organisms/HeroSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import PortfolioLayout from "@/components/templates/PortfolioLayout";

const PortfolioPage = () => (
  <PortfolioLayout>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </PortfolioLayout>
);

export default PortfolioPage;
