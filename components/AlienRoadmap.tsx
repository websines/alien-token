"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Meteors } from "./ui/meteors";

const roadmapData = [
  {
    phase: "Phase 1: Launch Token",
    steps: [
      "Step 1: Deploy ALIEN token on the Kaspa KRC20 platform.",
      "Step 2: 🎉 Yay! Token exists now!",
    ],
  },
  {
    phase: "Phase 2: Spread the Word",
    steps: [
      "Step 1: Tell your friends, family, and that one conspiracy theorist neighbor.",
      "Step 2: 📢 Shout into the void (a.k.a. the internet).",
    ],
  },
  {
    phase: "Phase 3: Await the Mothership",
    steps: [
      "Step 1: Keep an eye on the night sky.",
      "Step 2: 🔭 Invest in a telescope (optional but fashionable).",
    ],
  },
  {
    phase: "Phase 4: First Contact",
    steps: [
      "Step 1: Aliens finally arrive because they heard about our cool token.",
      'Step 2: 👽 "Take us to your token leader!"',
    ],
  },
  {
    phase: "Phase 5: To the Moon!",
    steps: [
      "Step 1: ALIEN token skyrockets in value.",
      "Step 2: 🚀 Literally to the moon. No, really, we're going there.",
    ],
  },
  {
    phase: "Phase 6: Profit",
    steps: [
      "Step 1: Enjoy intergalactic wealth.",
      "Step 2: 💰 Buy a space mansion with a view of Saturn's rings.",
    ],
  },
];

const AlienRoadmap = () => {
  const [activePhase, setActivePhase] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const phases = containerRef.current.querySelectorAll(".roadmap-phase");
        phases.forEach((phase, index) => {
          const rect = phase.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActivePhase(index);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-16 bg-black overflow-hidden mx-auto w-full"
    >
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
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 text-teal-400">
          ALIEN Token Meme Roadmap
        </h2>
        <div className="relative mx-auto justify-center">
          {/* Light beam tracing element */}
          <motion.div
            className="absolute left-0 md:left-12 w-2 md:w-4"
            style={{
              height: beamHeight,
              top: 0,
              background:
                "linear-gradient(to bottom, rgba(45, 212, 191, 0.1), rgba(45, 212, 191, 0.5))",
              boxShadow: "0 0 20px 5px rgba(45, 212, 191, 0.3)",
              borderRadius: "4px",
            }}
          />
          {roadmapData.map((phase, index) => (
            <motion.div
              key={index}
              className="roadmap-phase mb-24 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                style={{
                  y: useTransform(scrollYProgress, [0, 1], [0, index * -100]),
                }}
              >
                <Card
                  className={`max-w-2xl mx-auto md:ml-24 bg-neutral-800 border-teal-400 transition-all duration-300 ${
                    activePhase === index
                      ? "scale-105 border-2"
                      : "scale-100 border"
                  }`}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-teal-400">
                      {phase.phase}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {phase.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-gray-300">
                          {step}
                        </li>
                      ))}
                    </ul>
                    <Meteors number={5} />
                  </CardContent>
                </Card>
              </motion.div>
              {/* Alien emoji with enhanced parallax effect */}
              <motion.div
                className="absolute top-1/2 left-4 md:left-8 text-4xl"
                style={{
                  y: useTransform(scrollYProgress, [0, 1], [0, index * -150]),
                }}
              >
                👽
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* <p className="text-center text-gray-400 mt-8 italic">
          Note: This roadmap is 100% scientifically accurate if you believe hard
          enough.
        </p> */}
      </div>
    </section>
  );
};

export default AlienRoadmap;
