"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaTwitter, FaTelegram, FaGithub } from "react-icons/fa";

const AlienFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-3xl font-bold text-teal-400">
                $ALIEN
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-sm"
            >
              Redefining the crypto universe, one meme at a time.
            </motion.p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-4 text-teal-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="hover:text-teal-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#tokenomics"
                  className="hover:text-teal-400 transition-colors"
                >
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link
                  href="#roadmap"
                  className="hover:text-teal-400 transition-colors"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-teal-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-4 text-teal-400">
              Connect with Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                <FaTelegram size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-700 text-center"
        >
          <p>
            &copy; {currentYear} $ALIEN. All rights reserved. To the moon and
            beyond! 🚀👽
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default AlienFooter;
