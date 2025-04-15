"use client";

import { motion } from "framer-motion";

export default function ListContainer({ items, className }) {
  // Container variant
  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Item variant
  const listItemVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`${className}`}
    >
      {items.map((item, z) => (
        <motion.li variants={listItemVariants} key={`list-item-${z}`}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
