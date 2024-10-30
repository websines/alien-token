"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AlienAbout = () => {
  return (
    <section className="py-4 bg-black relative" id="about">
      <div className="absolute inset-0">
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
      <div className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
              <Image
                src="/img02.png"
                alt="$ALIEN"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="w-full md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-teal-400">
              About $ALIEN
            </h2>
            <p className="text-gray-300 mb-6">
              $ALIEN is not just another memecoin – it's an intergalactic
              journey into the world of decentralized finance. Born from the
              cosmic depths of the Kaspa blockchain, $ALIEN represents the
              fusion of cutting-edge technology and the timeless allure of
              extraterrestrial mysteries.
            </p>
            <p className="text-gray-300 mb-6">
              Our mission is to create a community-driven token that's as fun as
              it is functional. With $ALIEN, you're not just holding a token;
              you're part of a movement that's redefining the boundaries of
              what's possible in the crypto universe.
            </p>
            {/* <Link
              href="https://t.me/kspr_home_bot?start=WdRcvw"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Join the Alien Nation
            </Link> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AlienAbout;
