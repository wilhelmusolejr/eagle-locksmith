import {
  faBuilding,
  faCheckDouble,
  faHome,
  faExclamationTriangle,
  faCar,
  faVault,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import MiniHeader from "@/components/MiniHeader";
import Navigator from "@/components/Navigator";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import BannerSection from "@/components/sections/BannerSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import MapSection from "@/components/sections/MapSection";
import FooterSection from "@/components/sections/FooterSection";
import ButtonCallUsWithNum from "@/components/ButtonCallUsWithNum";
import AdvancedContainer from "@/components/AdvancedContainer";
import ServicesContainer from "@/components/ServicesContainer";

export default async function Home() {
  return (
    <>
      {/* MINI HEADER */}
      <MiniHeader />

      {/* NAVIGATOR */}
      <Navigator />

      <header>
        <div className="flex flex-col h-[70vh] text-white content-header">
          {/* Make the header take up the remaining space */}
          <div className="z-10 flex items-center justify-center flex-grow header">
            <div className="text-center text">
              <p className="font-bold tracking-wide text-orange-400 uppercase">
                Trusted Eagle Locksmith
              </p>
              <h1 className="mx-auto text-5xl font-bold capitalize xl:text-7xl xl:w-10/12 md:leading-normal">
                Protecting homes and businesses
              </h1>
              <p className="max-w-2xl py-10 pt-5 mx-auto text-gray-300 xl:text-xl">
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

      {/* INFORMATION */}
      <div className="px-5 py-32 parent ">
        {/* container */}
        <div className="container flex flex-col items-center max-w-xl gap-10 mx-auto lg:flex-row lg:max-w-4xl">
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
          <div className="">
            <SectionHeading type="small">
              Eagle locksmith services
            </SectionHeading>
            <p className="pt-2 text-lg font-medium text-blue-800">
              Get the best quality security solutions for all your lock and
              key-related issues with us in Maryland, DC And Virginia.
            </p>
            <p className="font-light py-7 text-slate-800">
              You have come on the right place if you are looking for a leading
              and licensed lockout service provider. We offer the best quality
              security solutions for your residential, commercial, and auto
              locksmith related issues. We specialize in offering 24/7 hours of
              emergency lockout services in Maryland, DC And Virginia, You just
              call us on (855) 633-2453.
            </p>

            <ButtonCallUsWithNum color="blue" />
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <WhyChooseUsSection />

      {/* LIST SERVICES */}
      <div className="px-5 py-32 parent">
        <div className="container max-w-xl mx-auto lg:max-w-7xl ">
          {/* text */}
          <SectionHeader
            subtitle={"Your Trusted Security Partner"}
            title="Our services"
            description={
              "We provide advanced security solutions and a broad spectrum of innovative security products and services for commercial and residential customers."
            }
          />

          <ServicesContainer />
        </div>
      </div>

      {/* BANNER */}
      <BannerSection />

      {/* REVIEW */}
      <ReviewsSection />

      {/* ADVANCED SECURITY SOLUTIONS */}
      <div className="px-5 py-32 parent">
        <div className="container max-w-xl mx-auto lg:max-w-4xl ">
          {/* text */}
          <SectionHeader
            subtitle={"Reliable and Professional Locksmith Services"}
            title="Advanced Security Solutions"
            description={`We offer fast and reliable locksmith services for cars, homes, and
    businesses in Washington, D.C., Maryland, and Northern Virginia.
    Whether you need a new security system or key removal.`}
          />

          <AdvancedContainer />
        </div>
      </div>

      {/* CONTACT FORM */}
      <ContactFormSection />

      {/* MAP */}
      <MapSection />

      {/* FOOTER */}
      <FooterSection />
    </>
  );
}
