"use client";

import Logo from "./Logo";
import Icon from "./Icon";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigator() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Locations", path: "/locations" },
    { name: "Blog", path: "#" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <nav className="z-20 navigator text-white shadow-lg sticky top-0">
      <div className="flex items-center justify-between px-5 xl:px-10 py-7 ">
        <div className="flex gap-10">
          {/* LOGO */}
          <Logo size={70} className="w-fit" />

          <ul className="capitalize font-light items-center gap-5 hidden lg:flex text-xl">
            <li
              className={`${
                pathname === "/" ? "font-bold" : ""
              } hover:underline transition-all duration-300`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${
                pathname === "/about" ? "font-bold" : ""
              } hover:underline transition-all duration-300`}
            >
              <Link href="/about">About us</Link>
            </li>

            {/* drop down */}
            <li className="relative group">
              <button className="focus:outline-none">
                Services
                <Icon icon={faAngleDown} className="w-4 inline-block ml-2" />
              </button>
              <ul className="absolute top-full left-0 w-40 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                <li className="px-4 py-2 text-lg hover:bg-gray-100">
                  <Link href="/services/commercial-locksmith">
                    Commercial Locksmith
                  </Link>
                </li>
                <li className="px-4 py-2 text-lg hover:bg-gray-100">
                  <Link href="/services/residential-locksmith">
                    Residential Locksmith
                  </Link>
                </li>
                <li className="px-4 py-2 text-lg hover:bg-gray-100">
                  <Link href="/services/emergency-locksmith">
                    Emergency Locksmith
                  </Link>
                </li>
                <li className="px-4 py-2 text-lg hover:bg-gray-100">
                  <Link href="/services/automotive-locksmith">
                    Automotive Locksmith
                  </Link>
                </li>
                <li className="px-4 py-2 text-lg hover:bg-gray-100">
                  <Link href="/services/safe-locksmith">Safe Locksmith</Link>
                </li>
              </ul>
            </li>

            <li
              className={`${
                pathname === "/locations" ? "font-bold" : ""
              } hover:underline transition-all duration-300`}
            >
              <Link href="/locations">Locations</Link>
            </li>
            <li
              className={`${
                pathname === "/blog" ? "font-bold" : ""
              } hover:underline transition-all duration-300`}
            >
              <a href="/blog">Blog</a>
            </li>
            <li
              className={`${
                pathname === "/contact" ? "font-bold" : ""
              } hover:underline transition-all duration-300`}
            >
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center flex-row gap-5">
          {/* CTA */}
          <div className="cta">
            <button className="p-3 md:text-2xl shadow-2xl cursor-pointer font-bold uppercase bg-red-700 rounded-md btn btn-primary hover:bg-red-800 hover:shadow-xl transition-all duration-300">
              Get A Quote
            </button>
          </div>

          {/* BAR */}
          <Icon icon={faBars} className="w-7 custom-nav-toggle" />
        </div>
      </div>
    </nav>
  );
}
