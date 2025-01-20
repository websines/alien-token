"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const navigationMenuTriggerStyle = () => {
  return "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground  focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50";
};

const AlienNavbar = () => {
  const pathname = usePathname();
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOverlayOpen]);

  useEffect(() => {
    setOverlayOpen(false);
  }, [pathname]);

  const handleOverlayToggle = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  return (
    <nav className="w-full fixed top-0 p-4 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm z-50">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="flex flex-row justify-center items-center space-x-2 ml-4 z-50">
          <motion.div
            className="rounded-full p-4 bg-purple-900/50 cursor-pointer relative hover:scale-105 hover:bg-purple-800/50 z-50 border border-purple-500/30"
            onClick={handleOverlayToggle}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-purple-200"
            >
              {isOverlayOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              )}
            </svg>
          </motion.div>
          {!isOverlayOpen && (
            <Link href="/">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">$ALIEN</span>
            </Link>
          )}
        </div>
        <div className="w-[50%] justify-center items-center mx-auto">
          <ul className="hidden md:flex flex-row justify-evenly items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavItem href="/">Home</NavItem>
                <NavItem href="#about">About</NavItem>
                <NavItem href="#faq">Why $ALIEN</NavItem>
                <NavItem href="#tokenomics">Tokenomics</NavItem>
                <NavItem href="#roadmap">Roadmap</NavItem>
                <NavItem href="https://raydium.io/swap">
                  Trade on Raydium
                </NavItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ul>
        </div>
        <Link
          target="_blank"
          href="https://raydium.io/swap"
          className="px-8 w-[70%] sm:w-auto py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 rounded-xl text-white font-semibold transition duration-200 ease-in-out hover:scale-105 flex flex-row items-center justify-center shadow-lg shadow-purple-500/20"
        >
          Buy $ALIEN
        </Link>
      </div>

      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            className="fixed inset-0 bg-teal-900 bg-opacity-95 flex items-center justify-center z-40"
            style={{ maxHeight: "100vh" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col w-full p-16 items-start justify-start h-full text-white">
              <div className="h-[10%] sm:h-[20%] bg-transparent" />
              <div className="flex flex-col sm:mt-4 justify-start items-start p-4 w-full sm:w-[40%]">
                <ul className="text-xl font-semibold w-full">
                  <OverlayNavItem
                    href="/"
                    number="01"
                    onClick={() => setOverlayOpen(false)}
                  >
                    Home
                  </OverlayNavItem>
                  <OverlayNavItem
                    href="#about"
                    number="02"
                    onClick={() => setOverlayOpen(false)}
                  >
                    About
                  </OverlayNavItem>
                  <OverlayNavItem
                    href="#faq"
                    number="03"
                    onClick={() => setOverlayOpen(false)}
                  >
                    Why $ALIEN
                  </OverlayNavItem>
                  <OverlayNavItem
                    href="#tokenomics   "
                    number="04"
                    onClick={() => setOverlayOpen(false)}
                  >
                    Tokenomics
                  </OverlayNavItem>
                  <OverlayNavItem
                    href="#roadmap"
                    number="05"
                    onClick={() => setOverlayOpen(false)}
                  >
                    Roadmap
                  </OverlayNavItem>
                  <OverlayNavItem
                    href="https://raydium.io/swap"
                    number="06"
                    onClick={() => setOverlayOpen(false)}
                  >
                    Trade on Raydium
                  </OverlayNavItem>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <NavigationMenuItem className="bg-transparent rounded-[10px] hover:bg-opacity-20 text-teal-100">
    <Link href={href}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {children}
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);

const OverlayNavItem = ({
  href,
  number,
  children,
  onClick,
}: {
  href: string;
  number: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link href={href} onClick={onClick}>
    <li className="p-4 hover:bg-green-500 hover:bg-opacity-25 rounded-xl w-full flex flex-row items-baseline space-x-3">
      <span className="text-sm font-semibold">{number}. </span>
      <span className="font-bold tracking-wide">{children}</span>
    </li>
  </Link>
);

export default AlienNavbar;
