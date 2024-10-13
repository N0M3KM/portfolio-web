import React from 'react';
import EducationSection from "./components/sections/education-section"
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import SkillSection from "./components/sections/skills-section";
import ContactSection from "./components/sections/contact-section";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mt-8 bg-dot-white/[0.2]"> {/* Adjust mt based on navbar height */}
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
};

export default Home;
