"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AlienTokenomics = () => {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      id="tokenomics"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img03.jpeg')", // Update this path to your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto mt-20 px-4 pt-60 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-teal-500/30"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-lg">
            Tokenomics
          </h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg"
            >
              1,000,000,000 $ALIEN
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-teal-200 drop-shadow-md"
            >
              Fully minted with fair launch
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-blue-300 font-semibold drop-shadow-md"
            >
              No pre-allocation • Fair distribution
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-900 to-transparent" />
    </section>
  );
};

export default AlienTokenomics;
