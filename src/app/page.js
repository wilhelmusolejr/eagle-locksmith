import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBuilding,
  faCheck,
  faCheckDouble,
  faClock,
  faEnvelope,
  faHome,
  faLocationPin,
  faPhone,
  faStar,
  faExclamationTriangle,
  faWallet,
  faCar,
  faVault,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import AdvancedItem from "@/components/AdvancedItem";
import SectionHeading from "@/components/SectionHeading";
import BannerItem from "@/components/BannerItem";
import LabelInput from "@/components/LabelInput";
import SocialItem from "@/components/SocialItem";

export default function Home() {
  let servicesList = [
    {
      image_path: "/images/services/commercial.jpg",
      image_alt: "Commercial image",
      icon: faBuilding,
      title: "Commercial",
      description:
        "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
    },
    {
      image_path: "/images/services/residential.jpg",
      image_alt: "Residential image",
      icon: faHome,
      title: "Residential",
      description:
        "Lockout service, lock repair and installation, rekeying, security audits, and more.",
    },
    {
      image_path: "/images/services/emergency.jpg",
      image_alt: "Emergency image",
      icon: faExclamationTriangle,
      title: "Emergency",
      description:
        "Lockout service, lock repair and installation, rekeying, security audits, and more.",
    },
    {
      image_path: "/images/services/automotive.jpg",
      image_alt: "Automotive image",
      icon: faCar,
      title: "Automotive",
      description:
        "We provide a wide range of automotive locksmith services, including lock repairs, installations, and security upgrades.",
    },
    {
      image_path: "/images/services/safe.jpg",
      image_alt: "Safe image",
      icon: faVault,
      title: "Safe",
      description:
        "We provide a wide range of safe locksmith services, including lock repairs, installations, and security upgrades.",
    },
    {
      image_path: "/images/services/commercial.jpg",
      image_alt: "Commercial image",
      icon: faBuilding,
      title: "Commercial",
      description:
        "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
    },
  ];

  let advancedSecurityList = [
    "24 hour emergency locksmith services & advanced security solutions.",
    "24 Hour Locksmith Service for Commercial and Residential properties and Automobiles.",
    "Locked out? Lost a key? Skilled locksmith technicians available 24 hours a day.",
    "100% satisfaction guarantee.",
    "Our dedicated staff of dispatchers & locksmiths are committed to providing the highest quality service possible.",
  ];

  return (
    <>
      <header>
        {/* mini header */}
        <div className="p-5 xl:px-10 mini-header">
          <div className="flex flex-col lg:flex-row justify-between items-center ">
            {/* left */}
            <div className="flex flex-wrap gap-5 uppercase text-blue">
              <div className="flex items-center justify-center lg:justify-start gap-2 ">
                <Icon icon={faPhone} className="w-7 text-orange-400" />
                <p className="font-medium">+1 (844) 411-5625</p>
              </div>

              <div className="w-0.5 h-6 bg-gray-400 hidden md:block " />

              <div className=" items-center hidden md:flex justify-center lg:justify-start gap-2 ">
                <div className="flex items-center justify-center ">
                  <Icon icon={faClock} className="w-7 text-orange-400" />
                </div>
                <p className="font-medium">24 / 7 Emergency lockout services</p>
              </div>
            </div>

            {/* right */}
            <div className="flex items-center justify-center text-center">
              <p className="font-semibold uppercase text-blue">
                We Provide fast, reliable and affordable locksmith services.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-h-screen text-white content-header">
          {/* navigator */}
          <nav className="z-10 navigator bg-blue shadow-lg">
            <div className="flex items-center justify-between px-5 xl:px-10 py-7 ">
              <div className="flex gap-10">
                {/* LOGO */}
                <Logo size={70} className="w-fit" />

                <ul className="capitalize font-light items-center gap-5 hidden lg:flex text-xl">
                  <li className="font-bold">
                    <a href="#">Home</a>
                  </li>
                  <li className="">
                    <a href="#">About us</a>
                  </li>
                  <li className="">
                    <a href="#">Services</a>
                  </li>
                  <li className="">
                    <a href="#">Locations</a>
                  </li>
                  <li className="">
                    <a href="#">Blog</a>
                  </li>
                  <li className="">
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-row gap-5">
                {/* CTA */}
                <div className="cta">
                  <button className="p-3 md:text-2xl  font-bold uppercase bg-red-700 rounded-md btn btn-primary ">
                    Get A Quote
                  </button>
                </div>

                {/* BAR */}
                <Icon icon={faBars} className="w-7 lg:hidden" />
              </div>
            </div>
          </nav>

          {/* Make the header take up the remaining space */}
          <div className="z-10 flex items-center justify-center flex-grow header">
            <div className="text-center text">
              <p className="font-bold tracking-wide text-orange-400 uppercase">
                Trusted Eagle Locksmith
              </p>
              <h1 className="xl:text-7xl text-5xl font-bold capitalize xl:w-10/12 mx-auto md:leading-normal">
                Protecting homes and businesses
              </h1>
              <p className="pt-0 pb-10 max-w-2xl xl:text-xl mx-auto text-gray-300">
                We want to make sure your entire process is{" "}
                <span className="font-semibold text-white uppercase">
                  stress free
                </span>
                ,{" "}
                <span className="font-semibold text-white uppercase">
                  simple
                </span>{" "}
                , and more importantly,{" "}
                <span className="font-semibold text-white uppercase">
                  affordable
                </span>
              </p>

              {/* CTA */}
              <div className="cta">
                <button className="p-5 font-bold uppercase bg-red-700 rounded-md btn btn-primary ">
                  Call us today!
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* INFORMATION */}
      <div className="px-5 py-32 parent ">
        {/* container */}
        <div className="container flex flex-col lg:flex-row gap-10 items-center max-w-xl mx-auto lg:max-w-4xl">
          {/* left */}
          <div className="lg:w-1/3 w-full h-96 lg:h-[500px] mx-auto relative flex-shrink-0 flex items-center justify-center">
            <Image
              src="/images/locksmith.jpg"
              fill
              alt="Example"
              className="object-contain"
            />
          </div>
          {/* right */}
          <div className=" fontlight">
            <SectionHeading>Eagle locksmith services</SectionHeading>
            <p className="pt-2 font-medium text-blue-800 text-lg">
              Get the best quality security solutions for all your lock and
              key-related issues with us in Maryland, DC And Virginia.
            </p>
            <p className="py-7 text-slate-800 font-light">
              You have come on the right place if you are looking for a leading
              and licensed lockout service provider. We offer the best quality
              security solutions for your residential, commercial, and auto
              locksmith related issues. We specialize in offering 24/7 hours of
              emergency lockout services in Maryland, DC And Virginia, You just
              call us on (855) 633-2453.
            </p>

            <div className="text-white cta">
              <button className="p-5 font-bold uppercase rounded-md bg-blue btn btn-primary ">
                Call us today!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="px-5 py-24 parent bg-blue">
        <div className="container text-white max-w-xl mx-auto lg:max-w-4xl">
          {/* text */}
          <div className="text-center text">
            <SectionHeading>
              Why choose Eagle Locksmith Services?
            </SectionHeading>

            <p className="pt-5 text-gray-300 lg:w-10/12 mx-auto">
              Whether you need a quick lock repair, a full security upgrade, or
              new lock installations, Eagle Locksmith Services has you covered.
              Protect your home today with our expert locksmith solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {/* card */}
            <div className="px-5 py-10 text-center border border-gray-700 card rounded-xl max-w-80 mx-auto">
              {/* icon */}
              <div className="flex items-center justify-center">
                <Icon icon={faClock} className="text-orange-400 w-15" />
              </div>

              <div className="">
                <h3 className="my-5 text-2xl">Fast response time</h3>
                <p className=" text-gray-300">
                  We understand the urgency of lock-related issues, which is why
                  we offer prompt, 24/7 emergency services.
                </p>
              </div>
            </div>

            {/* card */}
            <div className="px-5 py-10 text-center border border-gray-700 card rounded-xl max-w-80 mx-auto">
              {/* icon */}
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faWallet}
                  className="text-orange-400 w-15"
                />
              </div>

              <div className="">
                <h3 className="my-5 text-2xl">Affordable rates</h3>
                <p className=" text-gray-300">
                  Get high-quality locksmith services without breaking the bank.
                  We provide transparent pricing with no hidden fees.
                </p>
              </div>
            </div>

            {/* card */}
            <div className="px-5 py-10 text-center border border-gray-700 card rounded-xl max-w-80 mx-auto">
              {/* icon */}
              <div className="flex items-center justify-center">
                <Icon icon={faUserCheck} className="text-orange-400 w-15" />
              </div>

              <div className="">
                <h3 className="my-5 text-2xl">Certified Locksmiths</h3>
                <p className=" text-gray-300">
                  We understand the urgency of lock-related issues, which is why
                  we offer prompt, 24/7 emergency services.
                </p>
              </div>
            </div>

            {/* card */}
            <div className="px-5 py-10 text-center border border-gray-700 card rounded-xl max-w-80 mx-auto">
              {/* icon */}
              <div className="flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-orange-400 w-15"
                />
              </div>

              <div className="">
                <h3 className="my-5 text-2xl">Customer Satisfaction</h3>
                <p className=" text-gray-300">
                  Get high-quality locksmith services without breaking the bank.
                  We provide transparent pricing with no hidden fees.
                </p>
              </div>
            </div>

            {/* card */}
            <div className="px-5 py-10 flex justify-center items-center text-center border border-gray-700 card rounded-xl min-h-48 md:col-span-2 lg:col-span-2 max-w-80 mx-auto md:mx-0 md:max-w-full">
              <p className="text-left text-gray-300 md:w-10/12 ">
                Call us now at{" "}
                <span className="text-orange-400 underline">855-633-2453</span>{" "}
                for a free quote or to schedule your service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LIST SERVICES */}
      <div className="px-5 py-32 parent">
        <div className="container max-w-xl mx-auto lg:max-w-7xl ">
          {/* text */}
          <SectionHeader
            subtitle={"Trusted Eagle Locksmith"}
            title="Our services"
            description={
              "We a provide advanced security solutions and a broad spectrum of innovative security product and services for commercial and residential customers."
            }
          />

          <div className="flex justify-center flex-wrap gap-10 ">
            {/* card */}
            {servicesList.map((service, index) => (
              <ServiceCard
                key={index}
                image_path={service.image_path}
                image_alt={service.image_alt}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* BANNER */}
      <div className="px-5 py-24 my-24 text-center text-white bg-black bsad">
        <div className="container max-w-xl mx-auto relative z-10 ">
          <SectionHeading>
            Trusted and affordable locksmith services in the DMV area
          </SectionHeading>
          <div className="flex flex-col items-center justify-center gap-1 my-10">
            {/* check card */}
            <BannerItem icon={faCheck} title="Quick" />
            <BannerItem icon={faCheck} title="Reliable" />
            <BannerItem icon={faCheck} title="Dependable" />
            <BannerItem icon={faCheck} title="Cost-effective" />
          </div>

          <p className="font-light">
            Eagle Locksmith Services is here to help! Our team of certified
            locksmiths, backed by years of experience, offers high-quality
            residential locksmith solutions to keep your home secure.
          </p>
        </div>
      </div>

      {/* REVIEW */}
      <div className="bg-orange-400 parent">
        <div className="hidden grid-cols-2 grid-rows-3 ">
          <div className="h-48 bg-red-400"></div>
          <div className="h-48 bg-blue-400"></div>
          <div className="h-48 bg-green-400"></div>
          <div className="h-48 bg-purple-400"></div>
          <div className="h-48 bg-yellow-400"></div>
          <div className="h-48 bg-pink-400"></div>
        </div>

        <div className="container max-w-xl mx-auto py-24 ">
          {/* LOGO */}
          <div className="p-2 mx-auto mb-10 bg-white rounded-full w-fit">
            <Image
              src="/images/logo.png"
              width={100}
              height={100}
              alt="Example"
            />
          </div>

          {/* review card */}
          <div className="max-w-80 w-4/5 p-5 mx-auto bg-white rounded-lg shadow h-80 review-card">
            <div className="container flex flex-col justify-between h-full">
              <div className="reviewer-description">
                <p>
                  My experience with Eagle Locksmith was outstanding from start
                  to finish. I needed to upgrade the locks on my business after
                  a break-in, and they came through with high-quality
                  products...
                </p>
              </div>

              {/* reviewer */}
              <div className="flex items-center gap-2 reviewer-info">
                {/* image */}
                <div className="">
                  <div className="bg-green-500 rounded-full w-15 h-15"></div>
                </div>
                <div className="">
                  <h3 className="font-medium">Jared Bryant</h3>
                  <div className="flex items-center stars">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="w-5 text-orange"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="w-5 text-orange"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="w-5 text-orange"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="w-5 text-orange"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="w-5 text-orange"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ADVANCED SECURITY SOLUTIONS */}
      <div className="px-5 py-32 parent">
        <div className="container max-w-xl mx-auto lg:max-w-4xl ">
          {/* text */}
          <SectionHeader
            subtitle={"Trusted Eagle Locksmith"}
            title="Advanced Security Solutions"
            description={`We offer fast and reliable locksmith services for cars, homes, and
              businesses in Washington, D.C., Maryland, and Northern Virginia.
              Whether you need a new security system or key removal.`}
          />

          <div className="flex flex-col gap-5 mt-10">
            {advancedSecurityList.map((item, index) => (
              <AdvancedItem key={index} icon={faCheckDouble} paragraph={item} />
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
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
                Whether you need a quick lock repair, a full security upgrade,
                or new lock installations, Eagle Locksmith Services has you
                covered. Protect your home today with our expert locksmith
                solutions.
              </p>

              <div className="mt-10 basis-full sm:basis-[calc(50%-20px)]">
                <ul className="flex flex-col gap-5 mt-5 text-gray-300">
                  <li className="flex flex-row items-center gap-3">
                    <FontAwesomeIcon icon={faPhone} className="w-7" />
                    <p>+1 (844) 411-5625</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <FontAwesomeIcon icon={faEnvelope} className="w-7" />
                    <p>office@eagleservices.com</p>
                  </li>
                  <li className="flex flex-row items-center gap-3">
                    <FontAwesomeIcon icon={faLocationPin} className="w-7" />
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

      {/* MAP */}
      <div className="px-5 py-32 parent">
        <div className="container mx-auto max-w-xl">
          <div className="w-full bg-green-400 rounded-lg h-80"></div>
        </div>
      </div>

      <footer className="px-5 py-24 text-white border-t-8 border-red-600 bg-blue">
        <div className="container max-w-xl mx-auto lg:max-w-4xl flex flex-wrap">
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

          <div className="flex flex-wrap justify-end gap-x-10">
            {/* Service Section */}
            <div className="mt-10 basis-full sm:basis-[calc(50%-20px)]">
              <h3 className="text-3xl font-semibold">Service</h3>
              <ul className="flex flex-col gap-2 mt-5 text-gray-300">
                <li>Residential Locksmith</li>
                <li>Commercial Locksmith</li>
                <li>Automotive Locksmith</li>
                <li>Emergency Locksmith</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="mt-10 basis-full sm:basis-[calc(50%-20px)]">
              <ul className="flex flex-col gap-5 mt-5 text-gray-300">
                <li className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="w-5" />
                  <p>+1 (844) 411-5625</p>
                </li>
                <li className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5" />
                  <p>office@eagleservices.com</p>
                </li>
                <li className="flex flex-row items-center gap-3">
                  <FontAwesomeIcon icon={faLocationPin} className="w-5" />
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
          <div className="w-10/12 mx-auto my-10 border-b-2 border-gray-400"></div>

          <div className="">
            <ul className="flex  justify-center items-center flex-col w-10/12 gap-5 mx-auto  ">
              <SocialItem icon={faStar} social="Facebook" color="bg-blue-500" />
              <SocialItem
                icon={faBuilding}
                social="Twitter"
                color="bg-green-500"
              />
              <SocialItem icon={faClock} social="Google" color="bg-red-500" />
            </ul>
          </div>
        </div>
      </footer>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
