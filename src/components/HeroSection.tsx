import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import churchInterior from "@/assets/church-interior.jpg";
import churchExterior from "@/assets/church-exterior.jpg";
import communityPrayer from "@/assets/community-prayer.jpg";

const slides = [
  {
    image: churchInterior,
    title: "Welcome to Kiambu ACK Church",
    subtitle: "A Place of Worship, Community, and Faith",
    description: "Join us in celebrating God's love and building a stronger community together.",
    cta: "Join Our Service"
  },
  {
    image: churchExterior,
    title: "Growing in Faith Together",
    subtitle: "Building Community Through Christ",
    description: "Experience meaningful worship and connect with fellow believers in our welcoming church family.",
    cta: "Learn More"
  },
  {
    image: communityPrayer,
    title: "Live Sunday Services",
    subtitle: "Worship With Us Online",
    description: "Can't make it in person? Join our live stream every Sunday at 9:00 AM and 11:30 AM.",
    cta: "Watch Live"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow-soft">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-church-gold">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="church-button text-lg px-8 py-3">
              {slides[currentSlide].cta}
            </Button>
            <Button size="lg" variant="outline" className="church-button-outline text-lg px-8 py-3">
              <Play className="w-5 h-5 mr-2" />
              Watch Live
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-church-gold" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;