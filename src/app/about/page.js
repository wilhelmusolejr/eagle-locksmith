// app/about/page.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faCar,
  faVault,
  faKey,
  faVideo,
  faIdCard,
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
import ButtonCallUsWithNum from "@/components/ButtonCallUsWithNum";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <>
      {/* MINI HEADER */}
      <MiniHeader />

      {/* NAVIGATOR */}
      <Navigator />

      {/* HEADER */}
      <header>
        <div className="flex flex-col h-[50vh] text-white bg-[url('/images/about/background.png')] bg-cover bg-center bg-no-repeat black-overlay">
          {/* Make the header take up the remaining space */}
          <div className="z-10 flex items-center justify-center flex-grow header">
            <div className="text-center text">
              <p className="font-bold hidden tracking-wide text-orange-400 uppercase">
                Trusted Eagle Locksmith
              </p>
              <PageHeader>About Us</PageHeader>
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
              <ButtonCallUsWithNum />
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="px-5 py-32 parent">
        {/* content 1 */}
        <div className="container max-w-xl mx-auto lg:max-w-4xl text-center">
          <SectionHeading type="small">
            Your Trusted Partner in Security
          </SectionHeading>
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
                Protecting What Matters Most
              </h3>
              <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-6 text-gray-800">
                <IconLabelCard
                  icon={faKey}
                  title={`Master Key Systems`}
                  description={`Custom-designed, professionally installed, and regularly maintained.`}
                />
                <IconLabelCard
                  icon={faHome}
                  title={`High-Security Locks`}
                  description={`Top-tier locks for both residential and commercial protection.`}
                />

                <IconLabelCard
                  icon={faVideo}
                  title={`CCTV Systems`}
                  description={`Closed-circuit video surveillance for safety and monitoring.`}
                />

                <IconLabelCard
                  icon={faIdCard}
                  title={`Access Control`}
                  description={`Card-based or digital access systems for restricted areas.`}
                />

                <IconLabelCard
                  icon={faPhone}
                  title={`Telephone Access`}
                  description={`Secure entry for offices and residential buildings via intercom systems.`}
                />

                <IconLabelCard
                  icon={faCar}
                  title={`Automotive Locks`}
                  description={`High-security solutions for domestic and foreign vehicles.`}
                />

                <IconLabelCard
                  icon={faVault}
                  title={`Safes`}
                  description={`Sales, delivery, and maintenance of commercial and
                      residential safes.`}
                />
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

            <div className="w-full h-96 bg-amber-300 mt-10 relative">
              <Image
                src={"/images/about/highview.webp"}
                fill
                alt="Example"
                className="object-fill"
              />
            </div>

            <p>
              We believe that The Best Way to Protect Our Customers is to
              provide them with Locksmith Services and Security Solutions that
              are tailored to their specific needs. Our Long-Term Clients
              Represent a Variety of Industries from Individuals that need a
              Lock Changed to Several Fortune 500 companies. We always preferred
              our client’s satisfaction more than anything else. Come to us and
              experience the best locksmith services in Maryland!
            </p>

            <div className="my-10">
              <h3 className="text-xl font-medium text-center text-red-700 mb-10">
                What Sets Us Apart
              </h3>
              <div className="grid text-left grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
                <IconLabelCard
                  icon={faClock}
                  title="24/7 Emergency Services"
                  description="Always available when you need us the most—day or night."
                />
                <IconLabelCard
                  icon={faShieldAlt}
                  title="Licensed & Insured Professionals"
                  description="Certified experts providing secure and trustworthy service."
                />
                <IconLabelCard
                  icon={faBolt}
                  title="Fast Response Time"
                  description="Rapid arrival and service to resolve your issues quickly."
                />
                <IconLabelCard
                  icon={faBrain}
                  title="Advanced Security Solutions"
                  description="Modern systems tailored to your home or business needs."
                />
                <IconLabelCard
                  icon={faThumbsUp}
                  title="Customer Satisfaction Guarantee"
                  description="Your safety and satisfaction are our highest priorities."
                />
              </div>
            </div>

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
        <div className="container max-w-xl mx-auto lg:max-w-4xl text-center">
          <SectionHeader
            subtitle="Meet Our Experts"
            title="The Team "
            description=""
          />

          <div className="flex mt-5 gap-10 justify-center flex-wrap text-left">
            <div className="">
              <div className="w-60 h-60 bg-slate-500 rounded-lg"></div>
              <h3 className="mt-3 font-medium text-lg">Yaniv Bangtoto</h3>
              <p className="text-gray-700 text-sm">Chief Exutive Officer</p>
            </div>
            <div className="">
              <div className="w-60 h-60 bg-slate-400 rounded-lg"></div>
              <h3 className="mt-3 font-medium text-lg">Yaniv Bangtoto</h3>
              <p className="text-gray-700 text-sm">Chief Exutive Officer</p>
            </div>
            <div className="">
              <div className="w-60 h-60 bg-slate-300 rounded-lg"></div>
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
