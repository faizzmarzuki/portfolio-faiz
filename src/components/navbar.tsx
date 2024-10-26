"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex gap-3 items-center">
            <p className="text-black dark:text-white text-xl font-semibold [family-name:var(--font-geist-sans)]">
              Faiz
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-xl font-normal [family-name:var(--font-geist-sans)]">
              Software Engineer
            </p>
          </Link>
          <div className="flex items-center space-x-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="text-black dark:text-white focus:outline-none"
                aria-label={`Switch to ${
                  theme === "dark" ? "light" : "dark"
                } mode`}>
                {theme === "dark" ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white text-xl focus:outline-none">
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white dark:bg-black z-40 flex items-center justify-center">
            <motion.ul
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              className="text-black dark:text-white text-4xl space-y-6">
              {menuItems.map((item) => (
                <motion.li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
