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

export default function AboutPage() {
  return (
    <>
      {/* MINI HEADER */}
      <MiniHeader />

      {/* NAVIGATOR */}
      <Navigator />

      {/* HEADER */}
      <header>
        <div className="flex flex-col h-[50vh] text-white content-header">
          {/* Make the header take up the remaining space */}
          <div className="z-10 flex items-center justify-center flex-grow header">
            <div className="text-center text">
              <p className="font-bold hidden tracking-wide text-orange-400 uppercase">
                Trusted Eagle Locksmith
              </p>
              <h1 className="xl:text-7xl text-5xl font-bold capitalize xl:w-10/12 mx-auto md:leading-normal">
                About Us
              </h1>
              <p className="pt-5 py-10 max-w-2xl xl:text-xl mx-auto text-gray-300">
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
              <div className="cta flex items-center justify-center">
                <button className="bg-red-700 font-bold rounded-lg uppercase md:text-2xl shadow-lg flex items-center">
                  <div className="p-3 bg-red-800 rounded-lg ">
                    <FontAwesomeIcon icon={faPhone} className="w-7" />
                  </div>
                  <div className="p-3">Call us today!</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="px-5 py-32 parent">
        {/* content 1 */}
        <div className="container max-w-xl mx-auto lg:max-w-4xl text-center">
          <SectionHeading>Your Trusted Partner in Security</SectionHeading>

          <div className="text-left flex gap-5 flex-col mt-15 text-gray-700 text-lg font-light">
            <p>
              At Eagle Locksmith, we’ve built our reputation by delivering fast,
              reliable, and professional locksmith services throughout
              Washington, D.C., Maryland, and Northern Virginia. With years of
              hands-on experience and{" "}
              <span className="italic">a passion for safety</span>, we are
              committed to protecting what matters most — your{" "}
              <span className=" font-medium uppercase">home</span>,{" "}
              <span className=" font-medium uppercase">business</span>, and{" "}
              <span className=" font-medium uppercase">vehicle</span>.
            </p>
            <p>
              We also specialize in advanced security solutions to enhance the
              protection of your property. From high-security lock installations
              to digital keypads, smart locks, and security system upgrades,
              Eagle Locksmith ensures you have the latest technology
              safeguarding your home or business. Our team of experienced
              technicians will assess your needs and deliver custom security
              solutions tailored to your specific requirements.
            </p>
            <p>
              You can have a thorough key and lock service at your home for a
              affordable price. If you’re locked out you’ll love our incredibly
              fast response time. We’re reliable and efficient, and can make
              sure your home is completely secure with a new lock system.
            </p>

            <div className="my-10">
              <h3 className="text-xl font-medium text-center  text-red-700 mb-10">
                Experience, Reliability, and Innovation
              </h3>
              <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-6 text-gray-800">
                <div className="flex items-start gap-4">
                  <span className="text-red-700 mt-1">
                    <Icon icon={faKey} className="w-7" />
                  </span>
                  <div>
                    <h4 className="font-semibold">Master Key Systems</h4>
                    <p className="text-sm">
                      Custom-designed, professionally installed, and regularly
                      maintained.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-700 mt-1">
                    <Icon icon={faLock} className="w-7" />
                  </span>
                  <div>
                    <h4 className="font-semibold">High-Security Locks</h4>
                    <p className="text-sm">
                      Top-tier locks for both residential and commercial
                      protection.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-700 mt-1">
                    <Icon icon={faVideo} className="w-7" />
                  </span>
                  <div>
                    <h4 className="font-semibold">CCTV Systems</h4>
                    <p className="text-sm">
                      Closed-circuit video surveillance for safety and
                      monitoring.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-700 mt-1">
                    <Icon icon={faIdCard} className="w-7" />
                  </span>
                  <div>
                    <h4 className="font-semibold">Access Control</h4>
                    <p className="text-sm">
                      Card-based or digital access systems for restricted areas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-700 mt-1">
                    <Icon icon={faPhone} className="w-7" />
                  </span>
                  <div>
                    <h4 className="font-semibold">Telephone Access</h4>
                    <p className="text-sm">
                      Secure entry for offices and residential buildings via
                      intercom systems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-700 mt-1">
                    <Icon icon={faCar} className="w-7" />
                  </span>
                  <div>
                    <h4 className="font-semibold">Automotive Locks</h4>
                    <p className="text-sm">
                      High-security solutions for domestic and foreign vehicles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-red-700 mt-1">
                    <Icon icon={faVault} className="w-7" />
                  </span>
                  <div>
                    <h4 className="font-semibold">Safes</h4>
                    <p className="text-sm">
                      Sales, delivery, and maintenance of commercial and
                      residential safes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p>
              Eagle Locksmith proudly offers reliable mobile locksmith services
              throughout the Baltimore, Maryland, and DC areas. We specialize in
              residential, commercial, and automotive locksmith solutions,
              including emergency lockout assistance, high-security key systems,
              and safe services. Our experienced team is available 24/7 to
              provide fast, affordable, and dependable service—whenever and
              wherever you need it. We also offer special discounts for seniors
              and military personnel. Call us today at 855-633-2453 for prompt
              assistance and expert locksmith solutions tailored to your needs.
            </p>

            {/* CTA */}
            <div className="cta hidden items-center justify-center text-white mt-15">
              <button className="bg-red-700 font-bold rounded-lg uppercase md:text-2xl shadow-lg flex items-center">
                <div className="p-3 bg-red-800 rounded-lg ">
                  <FontAwesomeIcon icon={faPhone} className="w-7" />
                </div>
                <div className="p-3">Call us today!</div>
              </button>
            </div>
          </div>
        </div>

        {/* content 2 */}
        <div className="container max-w-xl mx-auto lg:max-w-4xl text-center my-32">
          <SectionHeader
            subtitle={"Our Commitment to Your Peace of Mind"}
            title="Our Mission"
            description={""}
          />

          <div className="text-left flex gap-5 flex-col mt-5 text-gray-700 text-lg font-light">
            <p>
              Our mission is simple: to provide top-tier locksmith solutions
              with honesty, integrity, and excellence. We believe that security
              is not just about locks — it’s about trust. That’s why we make it
              our goal to ensure every customer feels safe, respected, and
              confident in our services.
            </p>
          </div>

          <div className="w-full h-96 bg-amber-300 mt-10 relative">
            <Image
              src={"/images/about/highview.webp"}
              fill
              alt="Example"
              className="object-fill"
            />
          </div>

          <div className="text-left flex gap-5 flex-col mt-5 text-gray-700 text-lg font-light">
            <p>
              We believe that The Best Way to Protect Our Customers is to
              provide them with Locksmith Services and Security Solutions that
              are tailored to their specific needs. Our Long-Term Clients
              Represent a Variety of Industries from Individuals that need a
              Lock Changed to Several Fortune 500 companies. We always preferred
              our client’s satisfaction more than anything else. Come to us and
              experience the best locksmith services in Maryland!
            </p>
          </div>

          <div className="my-10">
            <h3 className="text-xl font-medium  text-red-700 mb-10">
              Experience, Reliability, and Innovation
            </h3>
            <div className="grid text-left grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
              <div className="flex items-start gap-4">
                <span className="text-red-700 mt-1">
                  <Icon icon={faClock} className="w-7" />
                </span>
                <div>
                  <h4 className="font-semibold">24/7 Emergency Services</h4>
                  <p className="text-sm">
                    Always available when you need us the most—day or night.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-red-700 mt-1">
                  <Icon icon={faShieldAlt} className="w-7" />
                </span>
                <div>
                  <h4 className="font-semibold">
                    Licensed & Insured Professionals
                  </h4>
                  <p className="text-sm">
                    Certified experts providing secure and trustworthy service.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-red-700 mt-1">
                  <Icon icon={faBolt} className="w-7" />
                </span>
                <div>
                  <h4 className="font-semibold">Fast Response Time</h4>
                  <p className="text-sm">
                    Rapid arrival and service to resolve your issues quickly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-red-700 mt-1">
                  <Icon icon={faBrain} className="w-7" />
                </span>
                <div>
                  <h4 className="font-semibold">Advanced Security Solutions</h4>
                  <p className="text-sm">
                    Modern systems tailored to your home or business needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-red-700 mt-1">
                  <Icon icon={faThumbsUp} className="w-7" />
                </span>
                <div>
                  <h4 className="font-semibold">
                    Customer Satisfaction Guarantee
                  </h4>
                  <p className="text-sm">
                    Your safety and satisfaction are our highest priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-left flex gap-5 flex-col mt-5 text-gray-700 text-lg font-light">
            <p>
              We believe that The Best Way to Protect Our Customers is to
              provide them with Locksmith Services and Security Solutions that
              are tailored to their specific needs. Our Long-Term Clients
              Represent a Variety of Industries from Individuals that need a
              Lock Changed to Several Fortune 500 companies. We always preferred
              our client’s satisfaction more than anything else. Come to us and
              experience the best locksmith services in Maryland!
            </p>
          </div>
        </div>

        {/* content 3 */}
        <div className="container max-w-xl mx-auto lg:max-w-4xl text-center my-32">
          <SectionHeader
            subtitle="Meet Our Experts"
            title="The Team "
            description=""
          />

          <div className="flex gap-10 justify-center flex-wrap text-left">
            <div className="">
              <div className="w-60 h-60 bg-blue-500 rounded-lg"></div>
              <h3 className="mt-3 font-medium text-lg">Yaniv Bangtoto</h3>
              <p className="text-gray-700 text-sm">Chief Exutive Officer</p>
            </div>
            <div className="">
              <div className="w-60 h-60 bg-green-500 rounded-lg"></div>
              <h3 className="mt-3 font-medium text-lg">Yaniv Bangtoto</h3>
              <p className="text-gray-700 text-sm">Chief Exutive Officer</p>
            </div>
            <div className="">
              <div className="w-60 h-60 bg-violet-500 rounded-lg"></div>
              <h3 className="mt-3 font-medium text-lg">Yaniv Bangtoto</h3>
              <p className="text-gray-700 text-sm">Chief Exutive Officer</p>
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <MapSection />

      {/* FOOTER */}
      <FooterSection />
    </>
  );
}
