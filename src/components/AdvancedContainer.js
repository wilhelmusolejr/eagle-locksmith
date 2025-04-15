"use client";

import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import AdvancedItem from "./AdvancedItem";

export default function AdvancedContainer() {
  let advancedSecurityList = [
    "24 hour emergency locksmith services & advanced security solutions.",
    "24 Hour Locksmith Service for Commercial and Residential properties and Automobiles.",
    "Locked out? Lost a key? Skilled locksmith technicians available 24 hours a day.",
    "100% satisfaction guarantee.",
    "Our dedicated staff of dispatchers & locksmiths are committed to providing the highest quality service possible.",
  ];

  let containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-5 mt-10"
    >
      {advancedSecurityList.map((item, index) => (
        <AdvancedItem key={index} icon={faCheckDouble} paragraph={item} />
      ))}
    </motion.div>
  );
}
