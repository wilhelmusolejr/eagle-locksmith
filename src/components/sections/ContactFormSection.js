"use client";

import React, { useState } from "react";
import LabelInput from "../LabelInput";
import Icon from "../Icon";
import SectionHeading from "../SectionHeading";

import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

export default function ContactFormSection() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmitForm() {
    setIsLoading(true);
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="px-5 py-24 parent bg-blue">
      {!isFormSubmitted && (
        <div className="container max-w-xl mx-auto text-white lg:max-w-4xl">
          {/* text */}
          <div className="text-center text">
            <SectionHeading>Get in touch with us</SectionHeading>
          </div>

          <div className="flex flex-col items-center gap-10 lg:flex-row-reverse">
            {/* text */}
            <div className="pt-10 text-left">
              <h3 className="text-2xl font-semibold text-orange-400 capitalized color-primary">
                We&apos;re here to help you!
              </h3>
              <p className="pt-5 text-gray-300">
                Whether you need a quick lock repair, a full security upgrade,
                or new lock installations, Eagle Locksmith Services has you
                covered. Protect your home today with our expert locksmith
                solutions.
              </p>

              <div className="mt-10 basis-full sm:basis-[calc(50%-20px)]">
                <ul className="flex flex-col gap-5 mt-5 text-gray-300">
                  <li className="flex flex-row items-center gap-3">
                    <Icon icon={faPhone} className={"w-7"} />
                    <p>+1 (844) 411-5625</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <Icon icon={faEnvelope} className={"w-7"} />
                    <p>office@eagleservices.com</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <Icon icon={faLocationPin} className={"w-7"} />
                    <p>
                      10606 Baltimore Ave Unit B, Beltsville, MD 20705, United
                      States.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* form */}
            <form className="flex flex-col w-full gap-5 mx-auto mt-10 max-w-96">
              {/* FULL NAME */}
              <LabelInput
                type="text"
                placeholder="John Doe"
                label="Full name"
                id="full_name"
              />

              {/* EMAIL */}
              <LabelInput
                type="email"
                placeholder="john.doe@gmail.com"
                label="Email"
                id="email"
              />

              {/* PHONE */}
              <LabelInput
                type="text"
                placeholder="01-234-5678"
                label="Phone Number"
                id="phone"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="p-3 text-gray-900 bg-white rounded-md textarea"
              ></textarea>

              <button
                onClick={function (e) {
                  e.preventDefault();
                  handleSubmitForm();
                }}
                className="p-5 font-bold uppercase bg-red-700 rounded-md cursor-pointer btn btn-primary "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {isFormSubmitted && isLoading && (
        <div className="container relative flex items-center justify-center max-w-xl mx-auto text-white min-h-60 lg:max-w-4xl">
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="w-16 h-16 border-4 border-red-700 rounded-full border-t-transparent animate-spin"></div>
          </div>
        </div>
      )}

      {isFormSubmitted && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="container flex items-center justify-center max-w-2xl mx-auto text-white md:px-6 md:py-12 min-h-60 lg:max-w-4xl rounded-2xl"
        >
          <div className="text-center">
            <SectionHeading>Thank you!</SectionHeading>

            <p className="mt-6 text-lg leading-relaxed text-white">
              Hi <span className="font-semibold">Jefferson</span>! Your contact
              information has been successfully submitted. Please hang tight —
              one of our agents will reach out to assist you shortly.
            </p>

            <p className="mt-4 text-sm text-orange-100">
              In the meantime, feel free to explore more of our services or
              reach out directly through our support line.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
