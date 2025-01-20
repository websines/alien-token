"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";
import { SiSolana } from "react-icons/si";

const AlienSocial = () => {
  const socialLinks = [
    {
      name: "Discord",
      icon: <FaDiscord className="w-8 h-8" />,
      href: "#",
      color: "from-purple-400 to-fuchsia-500",
      description: "Join our alien community",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-8 h-8" />,
      href: "#",
      color: "from-fuchsia-500 to-purple-600",
      description: "Follow for updates",
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="w-8 h-8" />,
      href: "t.me/alientokensolana",
      color: "from-purple-600 to-fuchsia-700",
      description: "Chat with aliens",
    },
    {
      name: "Solana",
      icon: <SiSolana className="w-8 h-8" />,
      href: "https://raydium.io/swap",
      color: "from-fuchsia-700 to-purple-800",
      description: "Trade on Raydium",
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-fuchsia-900/30" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-500"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
            Join Our Community
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Connect with fellow aliens across the galaxy and stay updated on the latest $ALIEN news
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="text-center">
                <motion.div
                  className={`inline-block p-4 rounded-full bg-gradient-to-r ${link.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {link.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{link.name}</h3>
                <p className="text-gray-400">{link.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlienSocial;
