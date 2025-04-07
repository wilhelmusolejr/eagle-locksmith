import { notFound } from "next/navigation";

const services = {
  residential: {
    title: "Residential Locksmith",
    description:
      "Secure your home with our expert residential locksmith services.",
  },
  commercial: {
    title: "Commercial Locksmith",
    description: "Protect your business with our advanced security solutions.",
  },
  automotive: {
    title: "Automotive Locksmith",
    description: "Fast and reliable car key replacement and lockout service.",
  },
  emergency: {
    title: "Emergency Locksmith",
    description: "24/7 locksmith service when you need it most.",
  },
};

export default function ServicePage({ params }) {
  const service = services[params.name];

  if (!service) {
    notFound();
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{service.title}</h1>
      <p className="mt-4 text-lg">{service.description}</p>
    </div>
  );
}
