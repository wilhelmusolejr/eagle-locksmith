"use client";

import Icon from "./Icon";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ButtonCallUsWithNum({ color = "red" }) {
  let className = `flex items-center font-bold uppercase rounded-lg shadow-lg md:text-2xl`;

  if (color === "red") {
    return (
      <div className="flex items-center justify-center text-white cta">
        <motion.a
          href="tel:8556332453"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`${className} bg-red-700`}
        >
          <div className="p-3 bg-red-800 rounded-lg ">
            <Icon icon={faPhone} className="text-2xl" />
          </div>
          <div className="p-3">Call 855-633-2453</div>
        </motion.a>
      </div>
    );
  }

  if (color === "blue") {
    return (
      <div className="flex items-center text-white cta">
        <motion.a
          href="tel:8556332453"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`${className} bg-blue-700`}
        >
          <div className="p-3 bg-blue-800 rounded-lg ">
            <Icon icon={faPhone} className="text-2xl" />
          </div>
          <div className="p-3">Call 855-633-2453</div>
        </motion.a>
      </div>
    );
  }
}
