import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Book, Cross, DollarSign } from "lucide-react";

const WelcomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "Called to love God and love our neighbors as ourselves.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We build strong relationships and support one another in faith.",
    },
    {
      icon: Book,
      title: "Scripture",
      description: "We are grounded in biblical truth and committed to growth.",
    },
    {
      icon: Cross,
      title: "Faith",
      description: "Christ is the center of all we do — our foundation and hope.",
    },
  ];

  return (
    <section id="about" className="py-8 bg-gradient-divine relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Welcome Header */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Left Image */}
            <div className="relative">
              <img
                src="/images/Hero1.png"
                alt="ACK St Philip's Church"
                className="rounded-xl shadow-lg object-cover w-full h-[400px]"
              />
              <div className="absolute bottom-6 left-6 bg-black text-white px-6 py-4 rounded-md shadow-lg max-w-xs">
                <p className="text-lg font-semibold leading-snug">
                  Rooted in Christ, Serving in Love
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="uppercase tracking-wide text-sm font-semibold text-church-gold mb-3">
                About Our Church
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-church-navy mb-6 leading-snug">
                Welcome to ACK St. Philip&apos;s Kihingo
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are a family of believers in Kiambu committed to worship,
                discipleship, fellowship, and service. Whether you&apos;re new to faith
                or have walked with Christ for years, you&apos;ll find a warm welcome here.
              </p>

              {/* Quote */}
              <blockquote className="border-l-4 border-church-gold pl-4 italic text-muted-foreground mb-6">
                “To know Christ and make Him known through worship, fellowship,
                discipleship, and service to our community and the world.”
              </blockquote>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4"
              >
                <a
                  href="#services"
                  className="inline-block px-8 py-3 bg-church-gold text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 transition-colors"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div variants={itemVariants} className="church-card mb-16">
            <div className="text-center px-6 py-10">
              <h3 className="text-2xl md:text-3xl font-bold text-church-navy mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6 italic">
                "To know Christ and make Him known through worship, fellowship,
                discipleship, and service to our community and the world."
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-church-gold to-yellow-500 mx-auto rounded-full" />
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-church-navy text-center mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="church-card text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-tr from-yellow-400 to-church-gold rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300">
                    <value.icon className="w-9 h-9 text-church-navy" />
                  </div>
                  <h4 className="text-xl font-semibold text-church-navy mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="church-card bg-church-navy text-white p-10 shadow-xl">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Our Vision
                </h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                  "To be a thriving, Christ-centered community that transforms
                  lives and makes disciples who impact Kiambu and beyond for
                  God&apos;s glory."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Giving Info */}
          <motion.div variants={itemVariants} className="mt-20">
            <div className="church-card bg-gradient-hero grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left Column - Info */}
              <div id="donate" className="text-white p-10 ">
                <div className="flex flex-col items-start text-left">
                  <DollarSign className="w-10 h-10 mb-4 text-church-gold" />
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Support God&apos;s Work
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Give your <span className="font-semibold">offering, tithe</span>, or{" "}
                    <span className="font-semibold">donation</span> via:
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="text-xl font-semibold">
                      Paybill: <span className="text-church-gold">869060</span>
                    </p>
                    <p className="italic">Account: Donation / Offering / Tithes</p>
                  </div>
                  <div className="w-24 h-1 bg-church-gold rounded-full" />
                </div>
              </div>

              {/* Right Column - Poster Image */}
              <div className="flex justify-center md:justify-end">
                <motion.img
                  src="/images/Payment.png"
                  alt="Church Giving Poster"
                  className="rounded-xl shadow-xl w-full max-w-md object-cover"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;
