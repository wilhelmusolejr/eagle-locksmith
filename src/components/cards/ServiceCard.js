"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export default function ServiceCard({
  image_path,
  image_alt,
  icon: Icon,
  title,
  path,
  description,
}) {
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
    <motion.a
      variants={itemVariant}
      href={`/services/${path.toLowerCase()}`}
      // CHANGE 1: Switched bg-[#003366] to bg-white for a "light feel".
      // Added a subtle border (border-gray-100) for definition against a white page background.
      className="group relative flex flex-col rounded-xl shadow-lg bg-white border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* image */}
      <div className="relative w-full h-48 overflow-hidden">
        {/* Image */}
        <Image
          src={image_path}
          fill
          alt={image_alt}
          // Added group-hover:scale to create a gentle zoom effect on the image
          className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        {/* CHANGE 2: Removed the heavy dark overlay. 
            Now using a very light gradient just to make the image look polished, not dark. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80"></div>
      </div>

      {/* text */}
      <div className="relative px-6 pb-8 pt-12">
        {/* icon */}
        {/* CHANGE 3: Kept the white box, but increased shadow so it pops against the white card body. */}
        <div className="absolute top-[-40px] left-6 flex items-center justify-center w-20 h-20 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-shadow">
          <Icon size={36} className="text-[#003366]" />
        </div>

        {/* Title */}
        {/* CHANGE 4: Text is now Navy Blue (#003366) to match the website Header. */}
        <h3 className="text-2xl font-bold uppercase tracking-wide mb-3 text-[#003366]">
          {title}
        </h3>

        {/* Description */}
        {/* CHANGE 5: Text is dark gray instead of white/light-gray. */}
        <p className="text-left text-gray-600 font-light leading-relaxed text-sm">
          {description}
        </p>

        {/* Learn More - Matches the Orange "Trusted" text from the hero */}
        <div className="mt-6 flex items-center text-orange-500 text-sm font-bold uppercase tracking-wider group-hover:text-orange-600 transition-colors">
          Learn More{" "}
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
