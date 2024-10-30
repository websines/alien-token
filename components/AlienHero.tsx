"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const AlienHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Animated star background */}
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

      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:order-2 order-1 flex justify-center items-center"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative w-[240px] h-[240px] md:w-[300px] md:h-[300px]"
          >
            <Image
              src="/img01.png"
              alt="Ancient Alien Emblem"
              fill
              className="object-contain py-4"
              priority
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Welcome to $ALIEN
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Embark on an intergalactic journey with the most cosmic memecoin in
            the universe. $ALIEN is here to take your portfolio to new
            dimensions!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              <Link href="#buy">Buy $ALIEN</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-teal-600 text-teal-400 hover:bg-teal-900"
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating UFO */}
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 15 L12 20 L16 15"
            fill="none"
            stroke="#4FD1C5"
            stroke-width="0.5"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.5;0;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>

          <ellipse
            cx="12"
            cy="7"
            rx="2.5"
            ry="2"
            fill="#4FD1C5"
            fill-opacity="0.3"
          >
            <animate
              attributeName="fill-opacity"
              values="0.3;0.5;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </ellipse>
          <path
            d="M9.5 7 C9.5 5.5 10.5 4.5 12 4.5 C13.5 4.5 14.5 5.5 14.5 7"
            stroke="#4FD1C5"
            stroke-width="1.5"
            fill="none"
          />

          <path
            d="M4 9 C4 7 7.5 5.5 12 5.5 C16.5 5.5 20 7 20 9 C20 11 16.5 12.5 12 12.5 C7.5 12.5 4 11 4 9"
            fill="#4FD1C5"
            fill-opacity="0.2"
            stroke="#4FD1C5"
            stroke-width="1.5"
          >
            <animate
              attributeName="fill-opacity"
              values="0.2;0.3;0.2"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>

          <circle cx="6.5" cy="9" r="0.5" fill="#4FD1C5">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="0.7s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="9.5" cy="9.5" r="0.5" fill="#4FD1C5">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="12" cy="9.7" r="0.5" fill="#4FD1C5">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1.1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="14.5" cy="9.5" r="0.5" fill="#4FD1C5">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="17.5" cy="9" r="0.5" fill="#4FD1C5">
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="3" cy="3" r="0.2" fill="#4FD1C5">
            <animate
              attributeName="opacity"
              values="1;0.2;1"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="21" cy="5" r="0.2" fill="#4FD1C5">
            <animate
              attributeName="opacity"
              values="1;0.2;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="18" cy="2" r="0.2" fill="#4FD1C5">
            <animate
              attributeName="opacity"
              values="1;0.2;1"
              dur="1.7s"
              repeatCount="indefinite"
            />
          </circle>

          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -0.5; 0 0"
            dur="2s"
            repeatCount="indefinite"
            additive="sum"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default AlienHero;
