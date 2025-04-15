"use client";

import React from "react";
import Icon from "./Icon";

import { motion } from "framer-motion";

export default function IconLabelCard({ icon, title, description }) {
  const itemVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className="flex items-start gap-4">
      <span className="mt-1 text-red-700">
        <Icon icon={icon} className="w-7" />
      </span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
