"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is $ALIEN?",
    answer:
      "$ALIEN is a community-driven memecoin launched on the Kaspa blockchain. It's designed to bring fun, engagement, and potential value to crypto enthusiasts who believe in the power of decentralized finance and have a fascination with extraterrestrial themes.",
  },
  {
    question: "How can I buy $ALIEN tokens?",
    answer:
      "You can acquire $ALIEN tokens through decentralized exchanges that support Kaspa-based tokens. Make sure you have a compatible wallet, such as a Kaspa wallet, and some KAS for transaction fees. Always do your own research and invest responsibly!",
  },
  {
    question: "Is $ALIEN safe to invest in?",
    answer:
      "Like all cryptocurrencies, investing in $ALIEN carries risks. While we strive for transparency and community-driven growth, the crypto market is highly volatile. Never invest more than you can afford to lose, and always do your own due diligence before investing.",
  },
  {
    question: "What makes $ALIEN different from other memecoins?",
    answer:
      "$ALIEN stands out with its unique blend of extraterrestrial themes, community focus, and being one of the first memecoins on the Kaspa blockchain. We're not just about hype; we're building a passionate community of crypto enthusiasts and alien believers!",
  },
  {
    question: "Are the aliens really coming?",
    answer:
      "While we can't confirm or deny extraterrestrial visitations, we can assure you that the $ALIEN community is out of this world! Whether you're a believer or a skeptic, you're welcome to join our intergalactic journey through the crypto universe.",
  },
];

const AlienFAQ = () => {
  return (
    <section className="py-16 bg-black relative" id="faq">
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
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-teal-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-teal-400 hover:text-teal-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default AlienFAQ;
