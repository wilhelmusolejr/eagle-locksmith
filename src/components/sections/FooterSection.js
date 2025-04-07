import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faLinkedinIn,
  faTumblr,
  faTwitter,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import SocialItem from "../SocialItem";
import Image from "next/image";
import Icon from "../Icon";

export default function FooterSection() {
  return (
    <footer className="px-5 py-24 text-white border-t-8 border-red-600 bg-blue">
      <div className="container max-w-xl mx-auto lg:max-w-7xl flex flex-wrap lg:flex-nowrap justify-center lg:justify-between mb-24 gap-10">
        {/* LOGO */}
        <div className="flex flex-col justify-center gap-5 text-center">
          {/* logo */}
          <div className="p-2 mx-auto bg-white rounded-full w-fit">
            <Image
              src="/images/logo.png"
              width={70}
              height={70}
              alt="Example"
            />
          </div>
          <h2 className="text-4xl font-bold capitalize">Eagle Locksmith</h2>
        </div>

        <div className="flex flex-wrap justify-end items-start gap-10">
          {/* Service Section */}
          <div className=" lg:basis-60 basis-full sm:basis-[calc(50%-20px)]">
            <h3 className="text-3xl font-semibold">Service</h3>
            <ul className="flex flex-col gap-2 mt-5 text-gray-300">
              <li>Residential Locksmith</li>
              <li>Commercial Locksmith</li>
              <li>Automotive Locksmith</li>
              <li>Emergency Locksmith</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className=" lg:basis-0 basis-full sm:basis-[calc(50%-20px)]">
            <ul className="flex flex-col gap-5 text-gray-300">
              <li className="flex flex-row items-center gap-3">
                <div className="w-10">
                  <Icon icon={faPhone} className={"w-7"} />
                </div>
                <p>+1 (844) 411-5625</p>
              </li>
              <li className="flex flex-row items-center gap-3">
                <div className="w-10">
                  <Icon icon={faEnvelope} className={"w-7"} />
                </div>
                <p>office@eagleservices.com</p>
              </li>
              <li className="flex flex-row items-center gap-3">
                <div className="w-10">
                  <Icon icon={faLocationPin} className={"w-7"} />
                </div>
                <p>
                  10606 Baltimore Ave Unit B, Beltsville, MD 20705, United
                  States.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="">
        <div className="w-6/12  mx-auto my-10 border-b-2 border-gray-500"></div>

        <div className="">
          <ul className="flex justify-center items-center flex-col lg:flex-row w-10/12 gap-5 mx-auto  ">
            <SocialItem
              icon={faFacebook}
              social="Facebook"
              color="bg-blue-600"
            />
            <SocialItem icon={faTwitter} social="Twitter" color="bg-sky-400" />
            <SocialItem icon={faYelp} social="Yelp" color="bg-red-500" />
            <SocialItem
              icon={faLinkedinIn}
              social="Commercial"
              color="bg-blue-500"
            />
            <SocialItem
              icon={faTumblr}
              social="Residential"
              color="bg-gray-500"
            />
          </ul>
        </div>
      </div>
    </footer>
  );
}
