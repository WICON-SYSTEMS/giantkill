import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface HoverCardProps {
  children: ReactNode;
  scale?: number;
  rotate?: number;
  className?: string;
  whileHover?: any;
  whileTap?: any;
}

export default function HoverCard({
  children,
  scale = 1.05,
  rotate = 0,
  className = "",
  whileHover,
  whileTap,
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const defaultWhileHover = {
    scale,
    rotate,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  };

  const defaultWhileTap = {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  };

  return (
    <motion.div
      className={className}
      whileHover={whileHover || defaultWhileHover}
      whileTap={whileTap || defaultWhileTap}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformOrigin: "center",
      }}
    >
      {children}
    </motion.div>
  );
}
