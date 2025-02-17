"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlignRight, X, MessageCircle } from "lucide-react";
import NavItem from "./NavBarItemWhite";

const menuItems = [
  { href: "/", text: "Inicio" },
  { href: "/servicios", text: "Servicios" },
  { href: "/nosotros", text: "Sobre nosotros" },
  { href: "/galeria", text: "Galería" },
];

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "auto";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex justify-between py-2 px-4 md:px-16 gap-4 items-center relative z-50"
      >
        <a className="flex items-center gap-2" href="/">
          <img
            src="/logoBN.png"
            alt="logo"
            className="w-[150px] md:w-[200px]"
          />
        </a>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMobileMenu}
          className="md:hidden z-50 text-white"
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <AlignRight className="w-8 h-8" />
          )}
        </motion.button>

        <div className="hidden md:flex items-center gap-8">
          <motion.ul
            className="flex gap-8 items-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {menuItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                isActive={currentPath === item.href}
              >
                {item.text}
              </NavItem>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="bg-white text-black rounded-md px-6 py-2  "
          >
            <div className="flex items-center gap-4">
              <a target="_blank" href="https://wa.link/r80kjj">
                Contáctanos
              </a>
              <MessageCircle size={16} />
            </div>
          </motion.button>
          {/* <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="text-white"
          ></motion.button> */}
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-black/90 z-40 flex flex-col justify-center items-center"
          >
            <motion.ul
              className="text-center"
              variants={{
                open: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {menuItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    closed: { opacity: 0, y: 20 },
                    open: { opacity: 1, y: 0 },
                  }}
                  className="my-6"
                >
                  <a
                    href={item.href}
                    className="text-white text-2xl font-bold hover:text-gray-300 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    {item.text}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
