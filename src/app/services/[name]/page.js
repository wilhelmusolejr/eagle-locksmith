import { notFound } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faHome,
  faExclamationTriangle,
  faCar,
  faVault,
} from "@fortawesome/free-solid-svg-icons";

export default async function ServicePage({ params }) {
  const { name } = await params; // params should be accessed directly here

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

  // Find the service based on the name from params
  const service = servicesList.find(
    (service) => service.title.toLowerCase() === name.toLowerCase()
  );

  // If no service found, show 404 page
  if (!service) {
    notFound();
  }

  return (
    <div className="p-10">
      <h1>{service.title}</h1>
      <p className="mt-4 text-lg">{service.description}</p>
    </div>
  );
}
