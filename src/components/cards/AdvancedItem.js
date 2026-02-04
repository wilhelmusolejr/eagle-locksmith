"use client";

import { motion } from "framer-motion";

import Icon from "./Icon";

export default function AdvancedItem({ icon, paragraph }) {
  const itemVariant = {
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

  return (
    <motion.div
      variants={itemVariant}
      className="flex items-center w-10/12 gap-3 mx-auto list-card"
    >
      {/* icon */}
      <div className="">
        <Icon icon={icon} className="w-5 text-orange" />
      </div>

      {/* paragraph */}
      <p className="text-left text-gray-500">{paragraph}</p>
    </motion.div>
  );
}
