"use client";

import {
  faBuilding,
  faHome,
  faExclamationTriangle,
  faCar,
  faVault,
} from "@fortawesome/free-solid-svg-icons";

import ServiceCard from "./ServiceCard";

import { motion } from "framer-motion";

export default function ServicesContainer() {
  let servicesList = [
    // COMMERCIAL
    {
      image_path: "/images/services/commercial.jpg",
      image_alt: "Commercial image",
      icon: faBuilding,
      path: "commercial-locksmith",
      page: {
        header: "Commercial Locksmith Services For Businesses and Offices",
        title: "Commercial locksmith",
        description:
          "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
      },
    },
    // RESIDENTIAL
    {
      image_path: "/images/services/residential.jpg",
      image_alt: "Residential image",
      icon: faHome,
      path: "residential-locksmith",
      page: {
        header: "Commercial Locksmith Services For Businesses and Offices",
        title: "Residential locksmith",
        description:
          "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
      },
    },
    // EMERGENCY
    {
      image_path: "/images/services/emergency.jpg",
      image_alt: "Emergency image",
      icon: faExclamationTriangle,
      path: "emergency-locksmith",
      page: {
        header: "Commercial Locksmith Services For Businesses and Offices",
        title: "Emergency Locksmith",
        description:
          "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
      },
    },
    // AUTOMOTIVE
    {
      image_path: "/images/services/automotive.jpg",
      image_alt: "Automotive image",
      icon: faCar,
      path: "automotive-locksmith",
      page: {
        header: "Commercial Locksmith Services For Businesses and Offices",
        title: "Automotive Locksmith",
        description:
          "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
      },
    },
    // SAFE
    {
      image_path: "/images/services/safe.jpg",
      image_alt: "Safe image",
      icon: faVault,
      path: "safe-locksmith",
      page: {
        header: "Commercial Locksmith Services For Businesses and Offices",
        title: "Safe Locksmith",
        description:
          "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
      },
    },
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
      viewport={{ once: true, amount: 0 }}
      className="flex flex-wrap justify-center gap-7 "
    >
      {/* card */}
      {servicesList.map((service, index) => (
        <ServiceCard
          key={index}
          image_path={service.image_path}
          image_alt={service.image_alt}
          icon={service.icon}
          path={service.path}
          title={service.page.title}
          description={service.page.description}
        />
      ))}
    </motion.div>
  );
}
