"use client";

import React from "react";
import { motion } from "framer-motion";

const AlienTokenomics = () => {
  const tokenomicsData = [
    {
      title: "Public Sale",
      percentage: "40%",
      description: "Available for public trading on Raydium",
      color: "from-purple-400 to-fuchsia-500",
    },
    {
      title: "Liquidity Pool",
      percentage: "30%",
      description: "Locked for 1 year to ensure trading stability",
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      title: "Marketing & Development",
      percentage: "20%",
      description: "For continued growth and development",
      color: "from-purple-600 to-fuchsia-700",
    },
    {
      title: "Team",
      percentage: "10%",
      description: "Locked for 6 months, vested linearly",
      color: "from-fuchsia-700 to-purple-800",
    },
  ];

  return (
    <section id="tokenomics" className="py-20 bg-black relative overflow-hidden">
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
            Tokenomics
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Total Supply: 1,000,000,000,000 $ALIEN
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="text-center">
                <h3 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.percentage}
                </h3>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg">
            Smart contract will be audited and liquidity will be locked for 1 year to ensure
            maximum security for our community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AlienTokenomics;
