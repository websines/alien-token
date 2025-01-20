"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AlienFAQ = () => {
  const faqs = [
    {
      question: "What is $ALIEN?",
      answer:
        "$ALIEN is a community-driven memecoin built on the Solana blockchain. We combine the speed and efficiency of Solana with the viral potential of memes to create a unique and engaging crypto experience.",
    },
    {
      question: "Why Solana?",
      answer:
        "Solana offers lightning-fast transactions, minimal fees, and a robust DeFi ecosystem. This makes it the perfect blockchain for $ALIEN to thrive and provide the best experience for our community.",
    },
    {
      question: "How can I buy $ALIEN?",
      answer:
        "You can buy $ALIEN on Raydium, Solana's leading DEX. Simply connect your Solana wallet (like Phantom), swap SOL for $ALIEN, and join our intergalactic community!",
    },
    {
      question: "Is the contract audited?",
      answer:
        "Yes, our smart contract will be audited by a reputable security firm before launch. The audit report will be made public to ensure transparency and trust.",
    },
    {
      question: "What makes $ALIEN unique?",
      answer:
        "We combine meme culture with real utility, including NFTs, staking, and DAO governance. Our strong community focus and Solana's capabilities make us stand out in the memecoin space.",
    },
    {
      question: "How can I get involved?",
      answer:
        "Join our Discord and Twitter communities, participate in discussions, and help spread the word! Active community members will be rewarded through various initiatives.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-black relative overflow-hidden">
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
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about $ALIEN on Solana
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-br from-purple-900/20 to-fuchsia-900/20 rounded-2xl backdrop-blur-sm border border-purple-500/20 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-white hover:text-purple-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
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
