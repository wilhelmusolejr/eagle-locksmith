"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function TestPage() {
  const paragraphs = [
    "This is the first paragraph. It fades in with animation.",
    "This is the second paragraph. It fades in with animation.",
    "This is the third paragraph. It fades in with animation.",
    "This is the fourth paragraph. It fades in with animation.",
    "This is the fifth paragraph. It fades in with animation.",
  ];

  return (
    <motion.div
      className="flex flex-col items-center mt-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // 0.3 = trigger when 30% is visible
    >
      {paragraphs.map((text, index) => (
        <motion.p
          key={index}
          variants={paragraphVariants}
          className="mb-4 text-lg text-gray-700"
        >
          {text}
        </motion.p>
      ))}
    </motion.div>
  );
}
