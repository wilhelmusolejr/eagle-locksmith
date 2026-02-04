"use client";

import Logo from "./Logo";
import Icon from "./Icon";
import {
  faAngleDown,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigator() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggleDropdown, setIsToggleDropdown] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Locations", path: "/locations" },
    { name: "Blog", path: "#" },
    { name: "Contact us", path: "/contact" },
  ];

  const handleToggleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleDropdownClick = () => {
    setIsToggleDropdown((prev) => !prev);
  };

  const serviceLinks = [
    {
      label: "Commercial Locksmith",
      href: "/services/commercial-locksmith",
    },
    {
      label: "Residential Locksmith",
      href: "/services/residential-locksmith",
    },
    {
      label: "Emergency Locksmith",
      href: "/services/emergency-locksmith",
    },
    {
      label: "Automotive Locksmith",
      href: "/services/automotive-locksmith",
    },
    {
      label: "Safe Locksmith",
      href: "/services/safe-locksmith",
    },
  ];

  return (
    <nav className="sticky top-0 z-20 text-white shadow-lg navigator">
      <div className="flex items-center justify-between px-5 xl:px-10 py-7 ">
        <div className="flex gap-10">
          {/* LOGO */}
          <Logo size={70} className="w-fit" />

          <ul className="items-center hidden gap-5 text-xl font-light capitalize lg:flex">
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
                <Icon icon={faAngleDown} className="inline-block w-4 ml-2" />
              </button>
              <ul className="absolute left-0 z-50 invisible w-40 text-black transition-all duration-300 bg-white rounded-md shadow-lg opacity-0 top-full group-hover:opacity-100 group-hover:visible">
                {serviceLinks.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-lg hover:bg-gray-100"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
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

        <div className="flex flex-row items-center gap-5">
          {/* CTA */}
          <div className="cta">
            <button className="p-3 font-bold uppercase transition-all duration-300 bg-red-700 rounded-md shadow-2xl cursor-pointer md:text-2xl btn btn-primary hover:bg-red-800 hover:shadow-xl">
              Get A Quote
            </button>
          </div>

          {/* BAR */}
          <button
            onClick={handleToggleClick}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <Icon icon={faBars} className="w-7 custom-nav-toggle" />
          </button>
        </div>

        {/* Example: Conditional menu */}
        {isMenuOpen && (
          <nav className="fixed inset-0 z-20 text-white bg-blue-800">
            <div className="flex flex-col items-center justify-center h-screen px-5 gap-15 xl:px-10 py-7">
              <div className="flex flex-col gap-10">
                {/* LOGO */}
                <Logo size={70} className="mx-auto w-fit" />

                <ul className="flex flex-col items-center gap-5 text-xl font-light capitalize ">
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

                  <li className="relative">
                    <button
                      onClick={handleDropdownClick} // use your existing toggle
                      className="flex items-center justify-between w-full px-4 py-2 text-left focus:outline-none"
                    >
                      Services
                      <Icon icon={faAngleDown} className="w-4 ml-2" />
                    </button>
                    <ul
                      className={`mt-2 space-y-2 bg-white rounded-md shadow-md text-black ${
                        isToggleDropdown ? "block" : "hidden"
                      }`}
                    >
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
                        <Link href="/services/safe-locksmith">
                          Safe Locksmith
                        </Link>
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

              <div className="flex flex-row items-center gap-5 ">
                {/* CTA */}
                <div className="cta">
                  <button className="p-3 font-bold uppercase transition-all duration-300 bg-red-700 rounded-md shadow-2xl cursor-pointer md:text-2xl btn btn-primary hover:bg-red-800 hover:shadow-xl">
                    Get A Quote
                  </button>
                </div>

                {/* BAR */}
                <button
                  onClick={handleToggleClick}
                  className="absolute lg:hidden top-10 right-10"
                  aria-label="Toggle menu"
                >
                  <Icon icon={faClose} className="w-7 custom-nav-toggle" />
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </nav>
  );
}
