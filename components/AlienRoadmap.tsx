"use client";

import React from "react";
import { motion } from "framer-motion";

const AlienRoadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch Preparation",
      items: [
        "Smart Contract Development",
        "Contract Audit",
        "Website Launch",
        "Social Media Setup",
        "Community Building",
      ],
      color: "from-purple-400 to-fuchsia-500",
    },
    {
      phase: "Phase 2",
      title: "Token Launch",
      items: [
        "Raydium Pool Creation",
        "Initial Marketing Push",
        "CoinGecko Listing",
        "Community Events",
        "NFT Collection Teaser",
      ],
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      items: [
        "NFT Collection Launch",
        "CEX Listings",
        "Staking Platform",
        "Partnerships",
        "Ecosystem Growth",
      ],
      color: "from-purple-600 to-fuchsia-700",
    },
    {
      phase: "Phase 4",
      title: "Utility Development",
      items: [
        "Alien DAO Launch",
        "Community Governance",
        "DeFi Integration",
        "Game Development",
        "Cross-Chain Expansion",
      ],
      color: "from-fuchsia-700 to-purple-800",
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-black relative overflow-hidden">
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
            Roadmap
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our journey to conquer the Solana ecosystem and beyond
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                  {phase.phase}
                </h3>
                <h4 className="text-xl font-semibold text-white">{phase.title}</h4>
              </div>
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color}`} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlienRoadmap;
