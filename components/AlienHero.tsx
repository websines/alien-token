"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const AlienHero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      try {
        const launchDate = new Date('2025-01-23T00:00:00+05:30');
        const now = new Date();
        
        console.log('Launch date:', launchDate.toISOString());
        console.log('Current date:', now.toISOString());
        
        const difference = Math.max(0, launchDate.getTime() - now.getTime());
        console.log('Time difference (ms):', difference);

        if (difference > 0) {
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);

          console.log('Calculated time:', { days, hours, minutes, seconds });

          setTimeLeft({
            days,
            hours,
            minutes,
            seconds
          });
        } else {
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
          });
        }
      } catch (error) {
        console.error('Error calculating time:', error);
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 via-black to-black text-white">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-300"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
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
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
          >
            <Image
              src="/img01.png"
              alt="Solana Alien Logo"
              fill
              className="object-contain py-4 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]"
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
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-500">
            $ALIEN on Solana
          </h1>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-4">
              Building Alien-esque AI Tech
            </h2>
            <p className="text-xl text-purple-200 mb-6">
              First utility dropping January 23rd, 2025
            </p>
            <div className="bg-purple-900/20 border border-purple-500/20 rounded-xl p-6 mb-8 max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-fuchsia-300 mb-4">
                🚀 Coming Soon:
              </h3>
              <ul className="space-y-3 text-lg text-gray-200">
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">1.</span>
                  AI Voice Agents with unique alien personalities and capabilities
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">2.</span>
                  Advanced image generation powered by alien intelligence
                </li>
                <li className="flex items-center">
                  <span className="text-purple-400 mr-2">3.</span>
                  Interactive NFT gallery featuring AI-generated artwork
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
              {[
                { label: 'days', value: timeLeft.days },
                { label: 'hours', value: timeLeft.hours },
                { label: 'minutes', value: timeLeft.minutes },
                { label: 'seconds', value: timeLeft.seconds }
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 p-4 rounded-xl backdrop-blur-sm border border-purple-500/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-purple-300 capitalize">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join us in creating the first-ever alien-inspired AI agents on Solana! Our agents will revolutionize 
              how you interact with blockchain technology, starting with our unique image generation system. More 
              groundbreaking features coming soon! 👽🤖
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white text-lg px-8 py-6 rounded-xl transform transition-all hover:scale-105"
            >
              <Link href="#buy">Buy on Raydium</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-900/30 text-lg px-8 py-6 rounded-xl transform transition-all hover:scale-105"
            >
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [-20, 20],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-20 right-20 w-20 h-20 md:w-32 md:h-32 opacity-50"
      >
        <Image
          src="/solana-sol-logo.png"
          alt="Solana Logo"
          width={100}
          height={100}
          className="object-contain"
        />
      </motion.div>

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
