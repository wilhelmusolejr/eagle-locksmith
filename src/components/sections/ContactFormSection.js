import React from "react";
import LabelInput from "../LabelInput";
import Icon from "../Icon";
import SectionHeading from "../SectionHeading";

import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactFormSection() {
  return (
    <div className="px-5 py-24 parent bg-blue">
      <div className="container text-white max-w-xl mx-auto lg:max-w-4xl">
        {/* text */}
        <div className="text-center text">
          <SectionHeading>Get in touch with us</SectionHeading>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
          {/* text */}
          <div className="pt-10 text-left">
            <h3 className="text-2xl font-semibold text-orange-400 capitalized color-primary">
              We&apos;re here to help you!
            </h3>
            <p className="pt-5 text-gray-300">
              Whether you need a quick lock repair, a full security upgrade, or
              new lock installations, Eagle Locksmith Services has you covered.
              Protect your home today with our expert locksmith solutions.
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
          <form className="flex flex-col gap-5 mt-10 w-full max-w-96 mx-auto">
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

            <button className="p-5 font-bold uppercase bg-red-700 rounded-md btn btn-primary ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
