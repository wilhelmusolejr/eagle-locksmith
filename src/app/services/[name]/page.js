import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHome,
  faExclamationTriangle,
  faCar,
  faVault,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import MiniHeader from "@/components/MiniHeader";
import Navigator from "@/components/Navigator";
import SectionHeading from "@/components/SectionHeading";
import BannerSection from "@/components/sections/BannerSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import MapSection from "@/components/sections/MapSection";
import FooterSection from "@/components/sections/FooterSection";
import Link from "next/link";

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

// ✅ Set page metadata dynamically
export async function generateMetadata({ params }) {
  const { name } = await params; // params should be accessed directly here

  const service = servicesList.find(
    (item) => item.title.toLowerCase() === name.toLowerCase()
  );

  if (!service) {
    return {
      title: "Service Not Found | Eagle Locksmith",
      description: "The requested locksmith service does not exist.",
    };
  }

  return {
    title: `${service.title} Services | Eagle Locksmith`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { name } = await params; // params should be accessed directly here

  // Find the service based on the name from params
  const service = servicesList.find(
    (service) => service.title.toLowerCase() === name.toLowerCase()
  );

  // If no service found, show 404 page
  if (!service) {
    notFound();
  }

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
              <p className="font-bold tracking-wide text-orange-400 uppercase">
                Trusted Eagle Locksmith
              </p>
              <h1 className="xl:text-7xl text-5xl font-bold capitalize xl:w-10/12 mx-auto md:leading-normal">
                {service.title}
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
        <div className="container max-w-xl mx-auto lg:max-w-4xl text-center">
          <div className="text-left mb-15 uppercase">
            <Link href="/" className="text-blue tracking-wide font-medium">
              Services
            </Link>{" "}
            / {service.title}
          </div>

          <SectionHeading>
            Commercial Locksmith Services For Businesses and Offices
          </SectionHeading>

          <div className="text-left flex gap-5 flex-col mt-15 text-gray-700 text-lg font-light">
            <p>
              We are a trusted 24 / 7 commercial locksmith serving in Maryland
              and Washington DC area. You can call us for your business security
              or lockout needs. Over 35 years of experience doing home or
              business locksmith work in the Maryland and Washington DC area.
              Our commercial locksmith services are available for you at Eagle
              Locksmith. We are here available 24 hours a day, Seven days a
              week, 365 days a year. All of our technicians are fully, licensed
              and bonded.
            </p>
            <p>
              Eagle Locksmith keeping your building safe and secure. You need a
              secure building to run the business properly. So with that
              concept, we are there to help you with the reliable services. You
              can count on our high quality, efficient locksmith and security
              system service to keep your area secure, whether you need; new
              keys or a complete system installation. Our great prices for your
              secure system. You can have support from us as our locksmith
              services are too good it’s all-time available to clear your all
              the projects of the locks.
            </p>
            <p>
              Eagle Locksmith keeping your building safe and secure. You need a
              secure building to run the business properly. So with that
              concept, we are there to help you with the reliable services. You
              can count on our high quality, efficient locksmith and security
              system service to keep your area secure, whether you need; new
              keys or a complete system installation. Our great prices for your
              secure system. You can have support from us as our locksmith
              services are too good it’s all-time available to clear your all
              the projects of the locks.
            </p>

            {/* CTA */}
            <div className="cta flex items-center justify-center text-white mt-15">
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

      {/* BANNER */}
      <BannerSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUsSection />

      <div className="my-32"></div>

      {/* REVIEW */}
      <ReviewsSection />

      <div className="my-32"></div>

      {/* CONTACT FORM */}
      <ContactFormSection />

      {/* MAP */}
      <MapSection />

      {/* FOOTER */}
      <FooterSection />
    </>
  );
}
