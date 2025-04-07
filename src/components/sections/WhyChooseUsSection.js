import React from "react";
import SectionHeading from "../SectionHeading";
import WhyCard from "../WhyCard";

import {
  faClock,
  faStar,
  faWallet,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUsSection() {
  return (
    <div className="px-5 py-32 parent bg-blue">
      <div className="container text-white max-w-xl mx-auto lg:max-w-7xl">
        {/* text */}
        <div className="text-center text">
          <SectionHeading>Why choose Eagle Locksmith Services?</SectionHeading>

          <p className="pt-5 text-gray-300 w-10/12 mx-auto lg:w-7/12">
            Whether you need a quick lock repair, a full security upgrade, or
            new lock installations, Eagle Locksmith Services has you covered.
            Protect your home today with our expert locksmith solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 font-light">
          {/* card */}
          <WhyCard
            icon={faClock}
            title="Fast response time"
            description="We understand the urgency of lock-related issues, which is why we offer prompt, 24/7 emergency services."
          />

          {/* card */}
          <WhyCard
            icon={faWallet}
            title="Affordable rates"
            description="Get high-quality locksmith services without breaking the bank. We provide transparent pricing with no hidden fees."
          />

          {/* card */}
          <WhyCard
            icon={faUserCheck}
            title="Certified Locksmiths"
            description="We understand the urgency of lock-related issues, which is why we offer prompt, 24/7 emergency services."
          />

          {/* card */}
          <WhyCard
            icon={faStar}
            title="Customer Satisfaction"
            description={`Get high-quality locksmith services without breaking the bank. We provide transparent pricing with no hidden fees.`}
          />

          {/* card */}
          <div className="px-5 py-10 flex justify-center items-center text-center border border-gray-700 card rounded-xl min-h-48 md:col-span-2 lg:col-span-2 max-w-80 mx-auto md:mx-0 md:max-w-full">
            <p className="text-left text-2xl text-gray-300 md:w-10/12 ">
              Call us now at{" "}
              <span className="text-orange-400 underline font-medium">
                855-633-2453
              </span>{" "}
              for a free quote or to schedule your service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
