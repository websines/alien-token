"use client";
import React from "react";
import { motion } from "framer-motion";
import { BarChart2, DollarSign } from "lucide-react";
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";

const socialLinks = [
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "https://x.com/alien_krc20",
    color: "bg-blue-400",
  },
  {
    name: "Telegram",
    icon: FaTelegramPlane,
    href: "https://t.me/alien_krc20",
    color: "bg-blue-500",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "https://discord.gg/xDFM2utmcY",
    color: "bg-blue-500",
  },
  {
    name: "KSPR Bot",
    icon: DollarSign,
    href: "https://t.me/kspr_home_bot?start=WdRcvw",
    color: "bg-green-500",
  },
  // { name: "Chart", icon: BarChart2, href: "#", color: "bg-yellow-400" },
];

const GuacSocial = () => {
  return (
    <section className="py-8 relative bg-black">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img04.jpeg')", // Update this path to your image
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          opacity: 0.3, // Adjust this value to make the background more/less visible
        }}
      /> */}

      {/* Stars animation overlay */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-trnsparent backdrop-blur-2xl bg-opacity-25 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex flex-wrap justify-center items-center py-4 px-2 sm:px-6 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`flex items-center justify-center ${link.color} text-white rounded-full w-12 h-12 m-2 transition-transform duration-200 ease-in-out hover:scale-110`}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-4 text-teal-400"
        >
          Join the $ALIEN community and stay updated!
        </motion.p>
      </div>
    </section>
  );
};

export default GuacSocial;
