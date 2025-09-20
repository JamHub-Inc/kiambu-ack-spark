import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import LiveStreamSection from "@/components/LiveStreamSection";
import VicarSection from "@/components/VicarSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import ServiceSection from "@/components/ServiceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <ServiceSection/>
        <LiveStreamSection />
        <VicarSection />
        <DepartmentsSection/>
        
      </main>
      <Footer />
    </div>
  );
};

export default Index;
