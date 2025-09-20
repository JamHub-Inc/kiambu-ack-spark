import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Clock, Users, Baby } from "lucide-react";

const ServiceSection = () => {
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

  const services = [
    {
      icon: Clock,
      title: "English Service",
      time: "8:30am – 10:30am",
      description:
        "Join us for an uplifting English service with worship, prayer, and biblical teaching.",
    },
    {
      icon: Clock,
      title: "Kikuyu Service",
      time: "10:30am – 12:30pm",
      description:
        "A powerful Kikuyu service focused on community, faith, and the Word of God.",
    },
    {
      icon: Baby,
      title: "Children Ministry",
      time: "8:30am – 10:30am & 10:30am – 12:30pm",
      description:
        "Nurturing children in faith through engaging Bible lessons, songs, and activities.",
    },
    {
      icon: Users,
      title: "Teens Ministry",
      time: "8:30am – 10:30am",
      description:
        "Empowering teenagers to live out their faith with joy, purpose, and resilience.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-church-cream relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-church-navy mb-6">
              Our Sunday Services & Ministries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At ACK St. Philip&apos;s Kihingo, we gather as one body in Christ
              across all ages — children, teens, and adults — to worship, grow,
              and serve together.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute top-0 left-6 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-church-gold"></div>

            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`mb-12 flex w-full md:mb-16 ${
                  idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-1/2 pl-16 md:px-6 relative">
                  <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition-shadow border border-gray-100">
                    <p className="text-sm font-semibold text-church-gold">
                      {service.time}
                    </p>
                    <h4 className="text-xl font-bold text-church-navy mt-2">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div
                  className={`
                    absolute 
                    left-6 md:left-1/2 
                    transform md:-translate-x-1/2 
                    w-10 h-10 
                    bg-church-gold rounded-full 
                    flex items-center justify-center 
                    shadow-lg
                  `}
                >
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
