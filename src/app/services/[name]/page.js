import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHome,
  faExclamationTriangle,
  faCar,
  faVault,
  faPhone,
  faClock,
  faShieldAlt,
  faBolt,
  faBrain,
  faThumbsUp,
  faLock,
  faTools,
  faIdCard,
  faDoorOpen,
  faSyncAlt,
  faKey,
  faUnlock,
  faLockOpen,
  faBriefcase,
  faBell,
  faWindowRestore,
  faWrench,
  faHouseLock,
  faScrewdriverWrench,
  faRetweet,
  faBuildingShield,
  faCarBurst,
  faMicrochip,
  faGears,
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
import IconLabelCard from "@/components/IconLabelCard";
import SectionHeader from "@/components/SectionHeader";
import ButtonCallUsToday from "@/components/ButtonCallUsToday";
import Image from "next/image";

let servicesList = [
  // COMMERCIAL
  {
    image_path: "/images/services/commercial.jpg",
    image_alt: "Commercial image",
    icon: faBuilding,
    path: "commercial-locksmith",
    content: [
      {
        type: "paragraph",
        text: [
          "We are a trusted 24 / 7 commercial locksmith serving in Maryland and Washington DC area. You can call us for your business security or lockout needs. Over 35 years of experience doing home or business locksmith work in the Maryland and Washington DC area. Our commercial locksmith services are available for you at Eagle Locksmith. We are here available 24 hours a day, Seven days a week, 365 days a year. All of our technicians are fully, licensed and bonded.",
          "Eagle Locksmith keeping your building safe and secure. You need a secure building to run the business properly. So with that concept, we are there to help you with the reliable services. You can count on our high quality, efficient locksmith and security system service to keep your area secure, whether you need; new keys or a complete system installation. Our great prices for your secure system. You can have support from us as our locksmith services are too good it’s all-time available to clear your all the projects of the locks.",
          "In such various suspects, you can have all the reliable services of the locks. We are ever ready in 24 hours with the good solutions. We can provide you all the better ways of the services to give your better terms of tech solutions. In our all means of the services, you can get such better reliable services. We can help you with the valid techniques which are available to clear all the problems of the locks with tech all reliable service of the lock’s settlement.",
          "For our commercial place we all need is one safest place where we can get such place of the commercial safe. We can help you with the prior means we all need is a technician who will help you with the good base of the technical need. We are always there to help you with the preferable services of the locks repair. In such means, you can get all the better terms of the reliable services of the lock’s settlement. You can easily get all the services for the repair of the locks.",
        ],
      },
      {
        type: "list",
        header: "Commercial Locksmith Services Include:",
        text: [
          "Door closer",
          "File cabinet locks",
          "Gates and iron works",
          "Intercom systems",
          "Access control system",
          "Security camera systems (CCTV) and alarm systems",
          "Exit devices",
          "Gun vaults, fire safes, personal safes and electronic gun safes",
          "Deadbolt and high security door locks",
          "Upgrades and re-keys",
          "New installations",
          "Master systems",
          "High security locks and hardware",
          "Keypad entry locks",
          "Maintenance and repairs",
          "Alarm systems and surveillance",
          "Digital locks and keys",
          "Safe sales and installation",
          "Window guards",
        ],
      },
      {
        type: "call_us_button",
        text: <ButtonCallUsToday />,
      },
      {
        type: "paragraph",
        text: [
          "At Eagle Locksmith, we specialize in comprehensive commercial locksmith services designed to keep your business safe and secure. Whether you’re looking to upgrade your existing security system or need emergency lockout assistance, our team of professional locksmiths is ready to assist 24/7.",
        ],
      },
      {
        type: "list_icon",
        header: "Our Commercial Locksmith Service Include:",
        text: [
          {
            icon: faKey,
            title: "Master Key Systems",
            description:
              "Simplify access control for your business with a master key system. One key can unlock multiple doors while maintaining individual key access for different areas.",
          },
          {
            icon: faLock,
            title: "High-Security Locks",
            description:
              "Upgrade your business security with advanced high-security locks, including keyless entry systems, biometric locks, and electronic door locks that offer superior protection.",
          },
          {
            icon: faTools,
            title: "Lock Installation and Repair",
            description:
              "Whether you need new locks installed or existing ones repaired, we provide top-quality locksmith services to enhance your building’s security.",
          },
          {
            icon: faIdCard,
            title: "Access Control Systems",
            description:
              "Take your security to the next level with state-of-the-art access control systems that allow you to monitor and control who enters your premises.",
          },
          {
            icon: faDoorOpen,
            title: "Panic Bars and Exit Devices",
            description:
              "Ensure the safety of your employees and customers with properly installed panic bars and exit devices for quick and easy evacuation in case of emergencies.",
          },
          {
            icon: faSyncAlt,
            title: "Lock Rekeying Services",
            description:
              "If you’ve recently changed staff or lost keys, our rekeying services will help prevent unauthorized access without needing to replace the entire lock system.",
          },
          {
            icon: faVault,
            title: "Safe Installation and Servicing",
            description:
              "Protect your valuable business assets with safes designed for commercial use. We offer installation, maintenance, and emergency unlocking services for your safes.",
          },
          {
            icon: faClock,
            title: "Emergency Lockout Services",
            description:
              "Locked out of your office or business property? Our fast and reliable emergency services are available around the clock to get you back in.",
          },
        ],
      },
      { type: "header", text: "Protect Your Business with Eagle Locksmith" },
      {
        type: "paragraph",
        text: [
          "Don’t leave your business vulnerable to security threats. With Eagle Locksmith’s expert commercial locksmith services, you can safeguard your property, employees, and assets. From installation and repair to emergency lockout services, we are your trusted partner in business security.",
        ],
      },
    ],
    page: {
      header: "Commercial Locksmith Services For Businesses and Offices",
      title: "Commercial locksmith",
      description:
        "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
    },
  },
  // RESIDENTIAL
  {
    image_path: "/images/services/residential.jpg",
    image_alt: "Residential image",
    icon: faHome,
    path: "residential-locksmith",
    content: [
      {
        type: "paragraph",
        text: [
          "Your home is your sanctuary, and nothing is more important than ensuring it’s safe and secure for you and your family. At Eagle Residential Locksmith, we specialize in providing top-quality, fast, and affordable locksmith services to keep your home protected at all times.",
          "Whether you’ve lost your keys, need a lock upgrade, or want to enhance your home’s security with the latest technology, our expert locksmiths are here to help! With years of experience and a commitment to customer satisfaction, we offer a comprehensive range of services to meet your needs.",
        ],
      },
      {
        type: "list_icon",
        header: "Our Commercial Locksmith Service Include:",
        text: [
          {
            icon: faKey,
            title: "Broken Key Removal",
            description:
              "We’ll safely and quickly remove broken keys from any lock without damaging your door.",
          },
          {
            icon: faLock,
            title: "High-Security Locks & Deadbolts",
            description:
              "Upgrade your home’s security with state-of-the-art locks that provide enhanced protection.",
          },
          {
            icon: faDoorOpen,
            title: "Garage Door Locks",
            description:
              "Secure your garage and keep your home safe with our reliable garage door lock installation and repair services.",
          },
          {
            icon: faUnlock,
            title: "Keypad & Digital Locks",
            description:
              "Step into the future of home security with convenient keypad and digital lock systems. No more worrying about losing your keys!",
          },
          {
            icon: faTools,
            title: "Lock Upgrades & Re-Keying",
            description:
              "Whether you need a re-key after moving into a new home or want to upgrade your existing locks, we’ve got you covered.",
          },
          {
            icon: faLockOpen,
            title: "New Lock Installations",
            description:
              "Looking for extra security? We install all types of locks, from traditional to advanced security systems.",
          },
          {
            icon: faBriefcase,
            title: "Safe Sales & Installation",
            description:
              "Protect your valuables and important documents with our top-of-the-line safes, expertly installed in your home.",
          },
          {
            icon: faBell,
            title: "Alarm Systems Integration",
            description:
              "Enhance your security with our alarm system integration services, giving you an added layer of protection.",
          },
          {
            icon: faWindowRestore,
            title: "Window & Patio Locks",
            description:
              "Secure every entry point in your home, including your windows and patio doors, with our professional locking solutions.",
          },
          {
            icon: faWrench,
            title: "Doorknob Repair",
            description:
              "Don’t let a faulty doorknob leave your home vulnerable. We repair and replace all types of doorknobs to ensure your doors are functioning properly.",
          },
        ],
      },
      {
        type: "paragraph",
        text: [
          "At Eagle Locksmith, we specialize in comprehensive commercial locksmith services designed to keep your business safe and secure. Whether you’re looking to upgrade your existing security system or need emergency lockout assistance, our team of professional locksmiths is ready to assist 24/7.",
          "Your safety is our priority! Don’t wait until it’s too late—secure your home with Eagle Residential Locksmith today You can call us now at 855-633-2453 or you can email Office.eagleservices@gmail.com You can also follow us on Twitter and like us on Facebook.",
        ],
      },
      {
        type: "call_us_button",
        text: <ButtonCallUsToday />,
      },
      {
        type: "header",
        text: "Top Residential Locks for Maximum Home Security",
      },
      {
        type: "paragraph",
        text: [
          "Residential locks are essential for home security, providing protection from unauthorized access. There are several types of locks commonly used in homes, each offering different levels of security, convenience, and functionality. Here’s an overview of the most popular types of residential locks:",
        ],
      },
      {
        type: "list",
        header: null,
        text: [
          "Deadbolt Locks",
          "Knob Locks",
          "Lever Handle Locks",
          "Keypad Locks",
          "Smart Locks",
          "Mortise Locks",
          "High-Security Locks",
          "Chain Locks and Sliding Bolts",
        ],
      },
      {
        type: "list",
        header: "Installation Tips",
        text: [
          "Always ensure locks are installed by a professional locksmith to avoid weak points in security.",
          "Combine different types of locks (e.g., a deadbolt with a knob or lever lock) for added layers of protection.",
          "Consider additional security measures such as door sensors, cameras, and alarms.",
        ],
      },
    ],
    page: {
      header: "Residential Locksmith Services",
      title: "Residential locksmith",
      description:
        "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
    },
  },
  // EMERGENCY
  {
    image_path: "/images/services/emergency.jpg",
    image_alt: "Emergency image",
    icon: faExclamationTriangle,
    path: "emergency-locksmith",
    content: [
      {
        type: "paragraph",
        text: [
          "There’s nothing we can’t get done for you. The key is locked in the car again? How will you extract that broken piece of key that’s stuck in the lock? Looked everywhere and can’t find your keys? Whether you need your locks changed, house re-keyed, safe installation, safe lock combination changed, car unlocked or key. For any manual to remote key for the locks you can ask us for the services. By taking less time we can solve numerous things from the situation. As if you ever felt that on the times of the hurry you just got tucked in the keeping out key from the lock then over that you should get the services in concern to check out that problem is in lock or in key. By giving the great change as per the setting they can help you with the better aspect and over that you will feel that your key is now working properly.",
          "Our skilled technicians are carefully screened, licensed, bonded and insured. They are available to assist you 24 hours a day, 7 days a week. They are too experienced in the job and they know that how to work over the conditions of the locks. If you are in the problems of the locks then there is no need to worry about because we can make you free from the worries over all as by giving the valid solutions of the locks. We never do temporary work like for the while to settle down and after some time it will give the same or related problem again. We just love to serve the services with the proper conditions to make it clearer that how to sort out single to single object out from the problems. Our advanced software system ensures a quick response to your call. Eagle Locksmith provides you emergency locksmith services for automotive, commercial and residential needs. Please contact us today via phone or email.",
        ],
      },
      {
        type: "list",
        header: null,
        text: [
          "Emergency lockout/opening",
          "Change/install/repair/upgrade any type of lock.",
          "Let our professional lock technician’s sort out your problems faster than you can imagine.",
        ],
      },
      {
        type: "paragraph",
        text: [
          "15 minutes response! Home, Car, Commercial, Lockout. You are safe in the hands of the experts who not only help you with your locks and keys but also offer expert advice to make your home and office safe. Eagle Locksmith Service will dispatch your emergency lock request immediate and our locksmith customer service representatives will be happy to assist you with any problem or questions.",
          "If you need a locksmith in Maryland area. You can call us now at 855-633-2453 or you can email Office.eagleservices@gmail.com You can also follow us on Twitter and like us on Facebook.",
        ],
      },
      {
        type: "call_us_button",
        text: <ButtonCallUsToday />,
      },
      {
        type: "list_icon",
        header: "Emergency Locksmith Services We Offer in MD & DC",
        text: [
          {
            icon: faHouseLock,
            title: "Home Lockout Services",
            description:
              "Locked out of your house? Our locksmiths can get you back inside without damaging your door or lock.",
          },
          {
            icon: faCar,
            title: "Car Lockout Services",
            description:
              "Stuck outside your vehicle? Our locksmiths can unlock any car model, quickly and safely.",
          },
          {
            icon: faKey,
            title: "Broken Key Extraction",
            description:
              "Got a broken key stuck in your lock? We specialize in removing broken keys without damaging the lock.",
          },
          {
            icon: faScrewdriverWrench,
            title: "Lock Repair and Replacement",
            description:
              "Whether you need a lock repaired or replaced, we offer same-day service to restore your security.",
          },
          {
            icon: faRetweet,
            title: "Rekeying Services",
            description:
              "Moved to a new home or office? We can rekey your existing locks to provide you with a new set of keys.",
          },
          {
            icon: faBuildingShield,
            title: "Commercial Locksmith Services",
            description:
              "We offer commercial lock solutions for businesses, including high-security locks, digital keypads, and master key systems.",
          },
        ],
      },
      {
        type: "paragraph",
        text: [
          "Looking for a trusted 24-hour emergency locksmith in Maryland and Washington, D.C.? Look no further! Eagle Locksmith is here to provide fast, reliable, and affordable locksmith services any time, day or night.",
        ],
      },
      {
        type: "list",
        header: null,
        text: [
          "Baltimore",
          "Rockville",
          "Bethesda",
          "Silver Spring",
          "Gaithersburg",
          "Annapolis",
          "Washington, D.C.",
        ],
      },
      {
        type: "header",
        text: "Call Us Anytime – 24/7 Emergency Locksmith Help",
      },
      {
        type: "paragraph",
        text: [
          "When you need emergency locksmith services, Eagle Locksmith is just a phone call away. We pride ourselves on providing prompt and dependable services to keep you safe and secure. You can call us now at 855-633-2453 or you can email Office.eagleservices@gmail.com You can also follow us on Twitter and like us on Facebook.",
        ],
      },
    ],
    page: {
      header: "24 Hour Emergency Locksmith in MD & DC",
      title: "Emergency Locksmith",
      description:
        "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
    },
  },
  // AUTOMOTIVE
  {
    image_path: "/images/services/automotive.jpg",
    image_alt: "Automotive image",
    icon: faCar,
    path: "automotive-locksmith",
    content: [
      {
        type: "paragraph",
        text: [
          "At Eagle Automotive Locksmith, we understand the frustration of being locked out of your car or dealing with broken or lost keys. Our fast, reliable, and affordable locksmith services are here to get you back on the road in no time!",
          "Your Car’s Security Is Our Priority! Whether you’re locked out, need a new key, or have ignition issues, our experienced team is just a call away. We service all types of vehicles and guarantee quick response times throughout the area.",
        ],
      },
      {
        type: "list",
        header: "Car Locksmith Maryland Services Include:",
        text: [
          "Lost Ignition Key",
          "Car or trunk lockout",
          "Keys Locked in Car",
          "Key Fob programming",
          "Transponder Keys",
          "Push Start / Proximity Keys",
          "New Car Keys",
        ],
      },
      {
        type: "image",
        src: "/images/services/automotive1.jpg",
      },
      { type: "header", text: "Professional Automobile Locksmith Services" },
      {
        type: "paragraph",
        text: [
          "Eagle Locksmith provides top-tier automobile locksmith services for drivers facing lockouts, broken keys, or key replacements. Whether you’re dealing with a vehicle lockout emergency, need a key replacement, or have ignition issues, our expert locksmiths are here to help. We serve customers across the [your service areas], offering fast, reliable, and affordable solutions.",
        ],
      },
      {
        type: "list_icon",
        header: "Automobile Locksmith Services",
        text: [
          {
            icon: faCarBurst,
            title: "Car Lockout Services",
            description:
              "Locked out of your car? Don’t worry. Our team can unlock your vehicle quickly and without damage, no matter the make or model.",
          },
          {
            icon: faKey,
            title: "Key Replacement & Duplication",
            description:
              "Lost your car keys? We can cut new keys for your vehicle, whether it’s a standard key or a high-tech transponder key.",
          },
          {
            icon: faMicrochip,
            title: "Transponder Key Programming",
            description:
              "If you need a replacement transponder key, our technicians can program it for you on-site, ensuring your new key works perfectly with your car’s system.",
          },
          {
            icon: faCar,
            title: "Key Fob Replacement",
            description:
              "Need a new key fob? We offer key fob replacement and programming for most vehicle brands, so you can regain access quickly.",
          },
          {
            icon: faKey,
            title: "Broken Key Extraction",
            description:
              "If your key has broken off in the ignition or door lock, our locksmiths can safely extract it without causing further damage to your car.",
          },
          {
            icon: faGears,
            title: "Ignition Repair & Replacement",
            description:
              "Is your ignition jammed or malfunctioning? We offer ignition repair and replacement services, getting you back on the road as soon as possible.",
          },
        ],
      },
      {
        type: "list",
        header: "We Work with All Major Car Brands",
        text: [
          "Ford",
          "Toyota",
          "Honda",
          "BMW",
          "Mercedes-Benz",
          "Chevrolet",
          "Nissan",
          "Audi",
        ],
      },
      {
        type: "paragraph",
        text: [
          "Our locksmiths are experienced in working with all major car manufacturers.",
        ],
      },
      {
        type: "image",
        src: "/images/services/car_brands.jpg",
      },
    ],
    page: {
      header: "Locked Out of Your Car? ",
      title: "Automotive Locksmith",
      description:
        "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
    },
  },
  // SAFE
  {
    image_path: "/images/services/safe.jpg",
    image_alt: "Safe image",
    icon: faVault,
    path: "safe-locksmith",
    content: [
      {
        type: "paragraph",
        text: [
          "We are a trusted 24 / 7 commercial locksmith serving in Maryland and Washington DC area. You can call us for your business security or lockout needs. Over 35 years of experience doing home or business locksmith work in the Maryland and Washington DC area. Our commercial locksmith services are available for you at Eagle Locksmith. We are here available 24 hours a day, Seven days a week, 365 days a year. All of our technicians are fully, licensed and bonded.",
          "Eagle Locksmith keeping your building safe and secure. You need a secure building to run the business properly. So with that concept, we are there to help you with the reliable services. You can count on our high quality, efficient locksmith and security system service to keep your area secure, whether you need; new keys or a complete system installation. Our great prices for your secure system. You can have support from us as our locksmith services are too good it’s all-time available to clear your all the projects of the locks.",
          "In such various suspects, you can have all the reliable services of the locks. We are ever ready in 24 hours with the good solutions. We can provide you all the better ways of the services to give your better terms of tech solutions. In our all means of the services, you can get such better reliable services. We can help you with the valid techniques which are available to clear all the problems of the locks with tech all reliable service of the lock’s settlement.",
          "For our commercial place we all need is one safest place where we can get such place of the commercial safe. We can help you with the prior means we all need is a technician who will help you with the good base of the technical need. We are always there to help you with the preferable services of the locks repair. In such means, you can get all the better terms of the reliable services of the lock’s settlement. You can easily get all the services for the repair of the locks.",
        ],
      },
      {
        type: "list",
        header: "Commercial Locksmith Services Include:",
        text: [
          "Door closer",
          "File cabinet locks",
          "Gates and iron works",
          "Intercom systems",
          "Access control system",
          "Security camera systems (CCTV) and alarm systems",
          "Exit devices",
          "Gun vaults, fire safes, personal safes and electronic gun safes",
          "Deadbolt and high security door locks",
          "Upgrades and re-keys",
          "New installations",
          "Master systems",
          "High security locks and hardware",
          "Keypad entry locks",
          "Maintenance and repairs",
          "Alarm systems and surveillance",
          "Digital locks and keys",
          "Safe sales and installation",
          "Window guards",
        ],
      },
      {
        type: "call_us_button",
        text: <ButtonCallUsToday />,
      },
      {
        type: "paragraph",
        text: [
          "At Eagle Locksmith, we specialize in comprehensive commercial locksmith services designed to keep your business safe and secure. Whether you’re looking to upgrade your existing security system or need emergency lockout assistance, our team of professional locksmiths is ready to assist 24/7.",
        ],
      },
      {
        type: "list_icon",
        header: "Our Commercial Locksmith Service Include:",
        text: [
          {
            icon: faKey,
            title: "Master Key Systems",
            description:
              "Simplify access control for your business with a master key system. One key can unlock multiple doors while maintaining individual key access for different areas.",
          },
          {
            icon: faLock,
            title: "High-Security Locks",
            description:
              "Upgrade your business security with advanced high-security locks, including keyless entry systems, biometric locks, and electronic door locks that offer superior protection.",
          },
          {
            icon: faTools,
            title: "Lock Installation and Repair",
            description:
              "Whether you need new locks installed or existing ones repaired, we provide top-quality locksmith services to enhance your building’s security.",
          },
          {
            icon: faIdCard,
            title: "Access Control Systems",
            description:
              "Take your security to the next level with state-of-the-art access control systems that allow you to monitor and control who enters your premises.",
          },
          {
            icon: faDoorOpen,
            title: "Panic Bars and Exit Devices",
            description:
              "Ensure the safety of your employees and customers with properly installed panic bars and exit devices for quick and easy evacuation in case of emergencies.",
          },
          {
            icon: faSyncAlt,
            title: "Lock Rekeying Services",
            description:
              "If you’ve recently changed staff or lost keys, our rekeying services will help prevent unauthorized access without needing to replace the entire lock system.",
          },
          {
            icon: faVault,
            title: "Safe Installation and Servicing",
            description:
              "Protect your valuable business assets with safes designed for commercial use. We offer installation, maintenance, and emergency unlocking services for your safes.",
          },
          {
            icon: faClock,
            title: "Emergency Lockout Services",
            description:
              "Locked out of your office or business property? Our fast and reliable emergency services are available around the clock to get you back in.",
          },
        ],
      },
      { type: "header", text: "Protect Your Business with Eagle Locksmith" },
      {
        type: "paragraph",
        text: [
          "Don’t leave your business vulnerable to security threats. With Eagle Locksmith’s expert commercial locksmith services, you can safeguard your property, employees, and assets. From installation and repair to emergency lockout services, we are your trusted partner in business security.",
        ],
      },
    ],
    page: {
      header: "Commercial Locksmith Services For Businesses and Offices",
      title: "Safe Locksmith",
      description:
        "We provide a wide range of commercial locksmith services, including lock repairs, installations, and security upgrades.",
    },
  },
];

// ✅ Set page metadata dynamically
export async function generateMetadata({ params }) {
  const { name } = await params; // params should be accessed directly here

  const service = servicesList.find(
    (item) => item.path.toLowerCase() === name.toLowerCase()
  );

  if (!service) {
    return {
      title: "Service Not Found | Eagle Locksmith",
      description: "The requested locksmith service does not exist.",
    };
  }

  return {
    title: `${service.page.title} Services | Eagle Locksmith`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { name } = await params;

  // Find the service based on the name from params
  const service = servicesList.find(
    (service) => service.path.toLowerCase() === name.toLowerCase()
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
        <div
          className={`flex flex-col min-h-[60vh] text-white bg-cover bg-center black-overlay`}
          style={{ backgroundImage: `url(${service.image_path})` }}
        >
          {/* Make the header take up the remaining space */}
          <div className="z-10 flex items-center justify-center flex-grow header">
            <div className="text-center text">
              <p className="font-bold tracking-wide text-orange-400 uppercase">
                Eagle Locksmith Service
              </p>
              <h1 className="xl:text-7xl text-5xl font-bold capitalize  mx-auto md:leading-normal">
                {service.page.title}
              </h1>
              <p className="pt-5 py-10 max-w-2xl xl:text-xl mx-auto text-gray-300">
                {service.page.description}
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
            / {service.path}
          </div>

          <SectionHeading>{service.page.header}</SectionHeading>

          <div className="text-left flex gap-5 flex-col mt-15 text-gray-700 text-lg font-light">
            {service.content.map((block, i) => {
              if (block.type === "paragraph") {
                return block.text.map((text, j) => (
                  <p key={`paragraph-${i}-${j}`}>{text}</p>
                ));
              }

              if (block.type === "list") {
                return (
                  <div key={`list-${i}`} className="text-black my-5">
                    {block.header && (
                      <h3 className="font-medium text-xl mb-5">
                        {block.header}
                      </h3>
                    )}
                    <ul className="list-disc pl-5 space-y-1">
                      {block.text.map((item, z) => (
                        <li key={`list-item-${i}-${z}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              }

              if (block.type === "list_icon") {
                return (
                  <div key={`list-icon-${i}`} className="my-10">
                    <h3 className="text-xl font-medium text-center text-red-700 mb-10">
                      {block.header}
                    </h3>
                    <div className="grid text-left grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
                      {block.text.map((item, z) => (
                        <IconLabelCard
                          key={`icon-${item.title}-${z}`}
                          icon={item.icon}
                          title={item.title}
                          description={item.description}
                        />
                      ))}
                    </div>
                  </div>
                );
              }

              if (block.type === "header") {
                return (
                  <h3 key={`header-${i}`} className="font-medium text-xl mb-5">
                    {block.text}
                  </h3>
                );
              }

              if (block.type === "call_us_button") {
                return <div key={`call-us-${i}`}>{block.text}</div>;
              }

              if (block.type === "image") {
                return (
                  <div
                    key={`image-${i}-${block.src}`}
                    className="w-full h-96 bg-white my-10 relative"
                  >
                    <Image
                      src={block.src}
                      fill
                      alt="Example"
                      className="object-scale-down"
                    />
                  </div>
                );
              }

              return null;
            })}
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
