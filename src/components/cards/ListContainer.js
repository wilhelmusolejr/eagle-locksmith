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
    <ul className={`${className}`}>
      {items.map((item, z) => (
        <li variants={listItemVariants} key={`list-item-${z}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
