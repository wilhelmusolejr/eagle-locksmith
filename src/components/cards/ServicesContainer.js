"use client";

import { Building2, House, TriangleAlert, Car, Lock } from "lucide-react";

import ServiceCard from "./ServiceCard";

import { motion } from "framer-motion";

export default function ServicesContainer() {
  let servicesList = [
    // COMMERCIAL
    {
      image_path: "/images/services/commercial.jpg",
      image_alt: "Commercial image",
      icon: Building2,
      path: "commercial-locksmith",
      page: {
        header: "Commercial Locksmith Services For Businesses and Offices",
        title: "Commercial Locksmith",
        description:
          "Secure your office or business with high-grade locks, access control systems, master key setups, and 24/7 commercial locksmith support.",
      },
    },
    // RESIDENTIAL
    {
      image_path: "/images/services/residential.jpg",
      image_alt: "Residential image",
      icon: House,
      path: "residential-locksmith",
      page: {
        header: "Residential Locksmith Services For Your Home Security",
        title: "Residential Locksmith",
        description:
          "Protect your home with professional lock installation, rekeying, smart lock solutions, and prompt residential lockout assistance.",
      },
    },
    // EMERGENCY
    {
      image_path: "/images/services/emergency.jpg",
      image_alt: "Emergency image",
      icon: TriangleAlert,
      path: "emergency-locksmith",
      page: {
        header: "Fast Emergency Locksmith Services Anytime, Anywhere",
        title: "Emergency Locksmith",
        description:
          "Locked out? Lost keys? We’re available 24/7 to respond to urgent lock issues—quick, reliable, and just a call away.",
      },
    },
    // AUTOMOTIVE
    {
      image_path: "/images/services/automotive.jpg",
      image_alt: "Automotive image",
      icon: Car,
      path: "automotive-locksmith",
      page: {
        header: "Automotive Locksmith Services for Cars, Trucks, and More",
        title: "Automotive Locksmith",
        description:
          "From car lockouts to key duplication and ignition repair, we handle all types of automotive locksmith needs efficiently and damage-free.",
      },
    },
    // SAFE
    {
      image_path: "/images/services/safe.jpg",
      image_alt: "Safe image",
      icon: Lock,
      path: "safe-locksmith",
      page: {
        header: "Professional Safe Locksmith Services for Homes and Offices",
        title: "Safe Locksmith",
        description:
          "We offer safe opening, combination changes, repair, and installation services to keep your valuables secure and accessible only to you.",
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
      className="grid grid-cols-3 gap-10"
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
