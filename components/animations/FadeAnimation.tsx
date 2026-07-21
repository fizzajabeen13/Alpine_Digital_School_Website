"use client";

import { motion } from "framer-motion";

type FadeAnimationProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeAnimation({
  children,
  delay = 0,
  className,
}: FadeAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}