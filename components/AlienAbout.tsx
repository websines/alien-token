"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AlienAbout = () => {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built on Solana for instant transactions and minimal fees",
      icon: "⚡",
      color: "from-purple-400 to-fuchsia-500",
    },
    {
      title: "Community Driven",
      description: "Governed by our passionate alien community",
      icon: "👥",
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      title: "NFT Integration",
      description: "Exclusive NFT collection for holders",
      icon: "🎨",
      color: "from-purple-600 to-fuchsia-700",
    },
    {
      title: "Staking Rewards",
      description: "Earn rewards by staking your $ALIEN tokens",
      icon: "💎",
      color: "from-fuchsia-700 to-purple-800",
    },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              About $ALIEN
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              $ALIEN is more than just another memecoin - we're building a vibrant ecosystem
              on Solana's lightning-fast blockchain. Our mission is to create a fun,
              engaging, and rewarding experience for our community while leveraging
              the power of Solana's technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className={`text-3xl mb-4 bg-gradient-to-r ${feature.color} rounded-full w-12 h-12 flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[500px]">
              <Image
                src="/img01.png"
                alt="Alien Logo"
                fill
                className="object-contain drop-shadow-[0_0_25px_rgba(147,51,234,0.5)]"
                priority
              />
            </div>
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AlienAbout;
