// app/about/page.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCheckDouble,
  faHome,
  faPhone,
  faExclamationTriangle,
  faCar,
  faVault,
  faKey,
  faLock,
  faVideo,
  faIdCard,
  faBox,
  faClock,
  faShieldAlt,
  faBolt,
  faBrain,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Navigator from "@/components/Navigator";
import MiniHeader from "@/components/MiniHeader";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import MapSection from "@/components/sections/MapSection";
import FooterSection from "@/components/sections/FooterSection";
import Icon from "@/components/Icon";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import IconLabelCard from "@/components/IconLabelCard";

export default function ContactPage() {
  return (
    <>
      {/* MINI HEADER */}
      <MiniHeader />

      {/* NAVIGATOR */}
      <Navigator />

      {/* HEADER */}
      <header>
        <div className="flex flex-col h-[50vh] text-white content-header">
          <div className="z-10 flex items-center justify-center flex-grow header">
            <div className="text-center text">
              <p className="font-bold tracking-wide text-orange-400 uppercase">
                Get in Touch
              </p>
              <h1 className="xl:text-7xl text-5xl font-bold capitalize xl:w-10/12 mx-auto md:leading-normal">
                Contact Us!
              </h1>
              <p className="pt-5 py-10 max-w-2xl xl:text-xl mx-auto text-gray-300">
                We're here to help you with any locksmith needs—day or night.
                Reach out and our team will respond promptly.
              </p>
              <div className="cta flex items-center justify-center">
                <a
                  href="tel:8556332453"
                  className="bg-red-700 font-bold rounded-lg uppercase md:text-2xl shadow-lg flex items-center"
                >
                  <div className="p-3 bg-red-800 rounded-lg ">
                    <FontAwesomeIcon icon={faPhone} className="w-7" />
                  </div>
                  <div className="p-3">Call 855-633-2453</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTACT CONTENT */}
      <div className="px-5 py-32">
        <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="text-left text-gray-700 text-lg font-light">
            <h2 className="text-3xl font-bold mb-6 text-red-700">
              Contact Information
            </h2>
            <p className="mb-4">
              Need assistance fast? Our team is available 24/7 for emergency
              locksmith services in Washington, D.C., Maryland, and Northern
              Virginia.
            </p>
            <ul className="space-y-3">
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:8556332453" className="text-red-700 font-medium">
                  855-633-2453
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@eaglelocksmith.com"
                  className="text-red-700 font-medium"
                >
                  support@eaglelocksmith.com
                </a>
              </li>
              <li>
                <strong>Service Hours:</strong> 24/7 Emergency Support
              </li>
              <li>
                <strong>Head Office:</strong> 1234 Locksmith Lane, Baltimore, MD
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Send Us a Message
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-red-700 text-white uppercase font-bold py-3 rounded hover:bg-red-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <MapSection />
      </div>

      {/* FOOTER */}
      <FooterSection />
    </>
  );
}
