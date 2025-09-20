import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Phone, Mail, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";

const ContactSection = () => {
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contacts = [
    {
      title: "WhatsApp",
      description: "Chat with us instantly on WhatsApp.",
      icon: MessageCircle,
      link: "https://wa.me/254796219542?text=Hello%20ACK%20St.%20Philip's%20Kihingo,%20I'd%20like%20to%20make%20an%20inquiry.",
    },
    {
      title: "Email",
      description: "Send us an email and we’ll respond promptly.",
      icon: Mail,
      link: "mailto:info@kiambuack.org",
    },
    {
      title: "Direct Inquiries",
      description: "Call our office during working hours.",
      icon: Phone,
      link: "tel:+254700000000",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-church-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-church-navy mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We’d love to hear from you. Whether you have questions, prayer requests, or need information, feel free to contact us anytime.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contacts.map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-church-gold/10 flex items-center justify-center group-hover:bg-church-gold transition">
                  <contact.icon className="w-8 h-8 text-church-gold group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-church-navy mb-2">{contact.title}</h3>
                <p className="text-muted-foreground">{contact.description}</p>
              </motion.a>
            ))}
          </div>

          {/* Social Media */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-church-navy mb-6">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">Follow us on social media and subscribe to our updates.</p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-church-navy rounded-full hover:bg-church-gold transition"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-church-navy rounded-full hover:bg-church-gold transition"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-church-navy rounded-full hover:bg-church-gold transition"
              >
                <Youtube className="w-6 h-6 text-white" />
              </a>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-church-gold text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 transition"
              >
                Feel Free to Contact Us
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
