import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
function NavbarButtons() {
  return (
    <ul className="flex gap-4 items-center pl-4">
      <li>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="bg-logo-blue/80 text-white rounded-md px-6 py-2  "
        >
          <div className="flex items-center gap-4">
            <a target="_blank" href="https://wa.link/r80kjj">
              Contáctanos
            </a>
            <MessageCircle size={16} />
          </div>
        </motion.button>
      </li>
    </ul>
  );
}

export default NavbarButtons;
