import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import mothersUnionImg from "@/assets/Choir.jpeg";
import kamaImg from "@/assets/KAMA.jpeg";
import kayaImg from "@/assets/KAYA.jpeg";
import childrenImg from "@/assets/About.jpeg";
import choirImg from "@/assets/Choir.jpeg";
import worshipImg from "@/assets/Praise.jpeg";

const DepartmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const departments = [
    {
      title: "Mother's Union",
      description:
        "Dedicated to nurturing families, supporting women in faith, and promoting Christian values in homes and communities.",
      image: mothersUnionImg,
      icon: "👩‍👧‍👦",
    },
    {
      title: "K.A.M.A (Kenya Anglican Men Association)",
      description:
        "KAMA unites men to grow spiritually, provide leadership, and support community initiatives through faith-driven programs.",
      image: kamaImg,
      icon: "👨‍💼",
    },
    {
      title: "K.A.Y.A (Kenya Anglican Youth Association)",
      description:
        "KAYA empowers youth to engage in discipleship, fellowship, and service while growing in Christ and discovering their gifts.",
      image: kayaImg,
      icon: "👨‍🎓",
    },
    {
      title: "Children Ministry",
      description:
        "The Children’s Ministry builds strong foundations of faith through interactive teaching, love, and spiritual guidance.",
      image: childrenImg,
      icon: "👧",
    },
    {
      title: "Choir Department",
      description:
        "Our choir enriches worship with harmonious singing, preserving Anglican musical traditions and inspiring through song.",
      image: choirImg,
      icon: "🎵",
    },
    {
      title: "Praise & Worship Team",
      description:
        "Leads the congregation in heartfelt worship, blending contemporary and traditional music to glorify God and uplift hearts.",
      image: worshipImg,
      icon: "🙌",
    },
  ];

  return (
    <section id="departments" className="py-20 bg-gradient-to-b from-church-cream to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-church-gold/20 flex items-center justify-center">
                <span className="text-2xl">⛪</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-church-navy mb-6">
              Our Church Departments
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Six departments serve as the heartbeat of ACK St. Philip&apos;s
              Kihingo, each committed to nurturing faith, community, and service
              to God&apos;s glory.
            </p>
          </motion.div>

          {/* Alternating Layout */}
          <div className="space-y-24">
            {departments.map((dept, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex flex-col md:flex-row gap-10 items-center ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Container */}
                <motion.div
                  className="relative w-full md:w-1/2 group overflow-hidden"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-church-gold/10 to-church-navy/10 z-10 rounded-2xl"></div>
                    <img
                      src={dept.image}
                      alt={dept.title}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-church-gold rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-church-navy rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                </motion.div>

                {/* Content Container */}
                <motion.div
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 + 0.2 }}
                >
                  <div className="p-2 bg-church-gold/10 rounded-lg inline-block mb-4">
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-church-navy mb-4">
                    {dept.title}
                  </h3>
                  <div className="w-16 h-1 bg-church-gold mb-6 rounded-full"></div>
                  <p className="text-lg text-church-navy/90 leading-relaxed mb-6">
                    {dept.description}
                  </p>
                <a
  href="#donate"
  className="inline-block px-6 py-3 bg-church-gold text-white rounded-lg font-medium hover:bg-church-navy transition-colors duration-300 shadow-md hover:shadow-lg"
>
  Support This Ministry
</a>

                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-24 text-center bg-church-navy rounded-2xl p-10 text-white shadow-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join a Ministry Today</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Discover where your gifts and passions can serve our church community and glorify God.
            </p>
            <a
  href="#donate"
  className="inline-block px-6 py-3 bg-church-gold text-white rounded-lg font-medium hover:bg-church-navy transition-colors duration-300 shadow-md hover:shadow-lg"
>
  Support This Ministry
</a>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentsSection;