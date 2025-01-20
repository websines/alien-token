"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";
import { SiSolana } from "react-icons/si";

const Footer = () => {
  const links = {
    social: [
      { name: "Discord", href: "#", icon: FaDiscord },
      { name: "Twitter", href: "#", icon: FaTwitter },
      { name: "Telegram", href: "#", icon: FaTelegram },
    ],
    resources: [
      { name: "Whitepaper", href: "#" },
      { name: "Audit Report", href: "#" },
      { name: "Token Contract", href: "#" },
    ],
    quickLinks: [
      { name: "Buy $ALIEN", href: "https://raydium.io/swap" },
      { name: "NFT Collection", href: "#" },
      { name: "Staking", href: "#" },
    ],
  };

  return (
    <footer className="bg-black relative overflow-hidden">
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

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
                $ALIEN
              </h3>
            </Link>
            <p className="text-gray-400 mb-4">
              The fastest alien in the Solana galaxy. Join our intergalactic community!
            </p>
            <div className="flex space-x-4">
              {links.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <item.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-purple-900/20 border border-purple-500/20 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 $ALIEN. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Built on</span>
              <SiSolana className="w-5 h-5" />
              <span>Solana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
