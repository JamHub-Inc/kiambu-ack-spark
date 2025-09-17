import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import LiveStreamSection from "@/components/LiveStreamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <LiveStreamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
