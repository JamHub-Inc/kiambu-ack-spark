import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Book, Cross } from "lucide-react";

const WelcomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  };

  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We are called to love God and love our neighbors as ourselves.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships and supporting one another in faith.",
    },
    {
      icon: Book,
      title: "Scripture",
      description: "Grounded in biblical truth and committed to spiritual growth.",
    },
    {
      icon: Cross,
      title: "Faith",
      description: "Centered on Christ and His message of salvation and grace.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-divine">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Welcome Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-church-navy mb-6">
              Welcome to Our Church Family
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Kiambu ACK Church, we are a community of believers committed to growing 
              in faith, serving our community, and spreading God's love. Whether you're 
              taking your first steps in faith or have been walking with Christ for years, 
              you'll find a warm welcome here.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div variants={itemVariants} className="church-card mb-16">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-church-navy mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                "To know Christ and make Him known through worship, fellowship, 
                discipleship, and service to our community and the world."
              </p>
              <div className="w-20 h-1 bg-gradient-warm mx-auto rounded-full"></div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-church-navy text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="church-card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-warm rounded-full flex items-center justify-center group-hover:shadow-golden transition-all duration-300">
                    <value.icon className="w-8 h-8 text-church-navy" />
                  </div>
                  <h4 className="text-xl font-semibold text-church-navy mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="church-card bg-gradient-hero text-white">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Vision
                </h3>
                <p className="text-lg opacity-90">
                  "To be a thriving, Christ-centered community that transforms lives 
                  and makes disciples who impact Kiambu and beyond for God's glory."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;