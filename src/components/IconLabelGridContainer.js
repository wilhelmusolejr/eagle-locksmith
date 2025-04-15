"use client";

import React from "react";
import IconLabelCard from "./IconLabelCard";

import { motion } from "framer-motion";

export default function IconLabelGridContainer({ items }) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 gap-6 my-5 text-gray-800 md:grid-cols-2"
    >
      {items.map((item, index) => (
        <IconLabelCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </motion.div>
  );
}
