import type React from "react"
import { motion } from "framer-motion"

interface NavItemProps {
  href: string
  children: React.ReactNode
  isActive: boolean
}

export default function NavItem({ href, children, isActive }: NavItemProps) {
  return (
    <motion.li whileHover={{ scale: 1.05 }}>
      <a
        href={href}
        className={`
          text-white font-medium transition-all ease-in-out cursor-pointer px-4 py-2 rounded-md
          ${isActive ? "bg-white/20 hover:bg-white/30" : "hover:bg-white/10"}
        `}
      >
        {children}
      </a>
    </motion.li>
  )
}

