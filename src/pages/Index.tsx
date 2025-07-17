import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TypingTest } from "@/components/TypingTest";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TypingTest />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
