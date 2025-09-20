import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import churchInterior from "@/assets/Hero.png";
import churchExterior from "@/assets/Hero1.png";
import communityPrayer from "@/assets/KAYA.jpeg";

const slides = [
  {
    image: churchInterior,
    title: "Welcome to ACK St. Philip's Kihingo",
    subtitle: "A Place of Worship, Community, and Faith",
    description:
      "Join us in celebrating God's love and building a stronger community together.",
    cta: "Offering",
  },
  {
    image: churchExterior,
    title: "Growing in Faith Together",
    subtitle: "Building Community Through Christ",
    description:
      "Experience meaningful worship and connect with fellow believers in our welcoming church family.",
    cta: "Offering",
  },
  {
    image: communityPrayer,
    title: "Live Sunday Services",
    subtitle: "Worship With Us Online",
    description:
      "Can't make it in person? Join our live stream every Sunday at 8:30 AM and 10:30 AM.",
    cta: "Offering",
  },
];
const verses = [
  "“For where two or three gather in my name, there am I with them.” – Matthew 18:20",
  "“Let everything that has breath praise the Lord.” – Psalm 150:6",
  "“The Lord is my shepherd; I shall not want.” – Psalm 23:1",
  "“I can do all this through him who gives me strength.” – Philippians 4:13",
  "“God is spirit, and his worshipers must worship in the Spirit and in truth.” – John 4:24",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVerse, setCurrentVerse] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const verseTimer = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
    }, 6000);
    return () => clearInterval(verseTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          key={slides[currentSlide].title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
        >
          {slides[currentSlide].title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-church-gold"
        >
          {slides[currentSlide].subtitle}
        </motion.h2>

        {/* Independent Rotating Verse */}
        <AnimatePresence mode="wait">
          <motion.p
            key={verses[currentVerse]}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8 }}
            className="italic text-md md:text-lg lg:text-xl mb-6 text-white/90"
          >
            {verses[currentVerse]}
          </motion.p>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90"
        >
          {slides[currentSlide].description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-church-gold hover:bg-yellow-600 text-lg px-8 py-4 rounded-full shadow-md transition-all"
          >
             <a href="#donate">{slides[currentSlide].cta}</a>
            
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-primary hover:bg-white/20 text-lg px-8 py-4 rounded-full"
          >
            <Play className="w-5 h-5 mr-2" />
             <a href="#live-stream"> Watch Live</a>
           
          </Button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-church-gold scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-church-gold opacity-80" />
      </div>
    </section>
  );
};

export default HeroSection;
