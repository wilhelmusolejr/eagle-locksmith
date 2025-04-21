// app/about/page.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Navigator from "@/components/Navigator";
import MiniHeader from "@/components/MiniHeader";
import MapSection from "@/components/sections/MapSection";
import FooterSection from "@/components/sections/FooterSection";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Contact Us | Eagle Locksmith",
  description:
    "Get in touch with Eagle Locksmith for fast, reliable locksmith services. Call us, send a message, or find our location—we’re here to help 24/7.",
};

export default function ContactPage() {
  return (
    <>
      {/* MINI HEADER */}
      <MiniHeader />

      {/* NAVIGATOR */}
      <Navigator />

      {/* HEADER */}
      <header>
        <div className="flex flex-col h-[50vh] text-white bg-[url('/images/contact/background.jpg')] bg-cover bg-center bg-no-repeat black-overlay">
          <div className="z-10 flex items-center justify-center flex-grow header">
            <div className="text-center text">
              <p className="hidden font-bold tracking-wide text-orange-400 uppercase">
                Get in Touch
              </p>
              <PageHeader>Contact Us!</PageHeader>
              <p className="max-w-2xl px-5 py-10 pt-5 mx-auto text-gray-300 md:px-0 xl:text-xl">
                {`We're here to help you with any locksmith needs—day or night.
                Reach out and our team will respond promptly.`}
              </p>
              <div className="flex items-center justify-center cta">
                <a
                  href="tel:8556332453"
                  className="flex items-center font-bold uppercase bg-red-700 rounded-lg shadow-lg md:text-2xl"
                >
                  <div className="p-3 bg-red-800 rounded-lg ">
                    <FontAwesomeIcon icon={faPhone} className="w-7" />
                  </div>
                  <div className="p-3">Call 855-633-2453</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTACT CONTENT */}
      <div className="px-5 py-32">
        <div className="container grid max-w-5xl grid-cols-1 gap-10 mx-auto md:grid-cols-2">
          {/* Contact Info */}
          <div className="text-lg font-light text-left text-gray-700">
            <h2 className="mb-6 text-3xl font-bold text-red-700">
              Contact Information
            </h2>
            <p className="mb-4">
              Need assistance fast? Our team is available 24/7 for emergency
              locksmith services in Washington, D.C., Maryland, and Northern
              Virginia.
            </p>
            <ul className="space-y-3">
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:8556332453" className="font-medium text-red-700">
                  855-633-2453
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@eaglelocksmith.com"
                  className="font-medium text-red-700"
                >
                  support@eaglelocksmith.com
                </a>
              </li>
              <li>
                <strong>Service Hours:</strong> 24/7 Emergency Support
              </li>
              <li>
                <strong>Head Office:</strong> 1234 Locksmith Lane, Baltimore, MD
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Send Us a Message
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded resize-none"
              ></textarea>
              <button
                type="submit"
                className="py-3 font-bold text-white uppercase transition bg-red-700 rounded hover:bg-red-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <MapSection />
      </div>

      {/* FOOTER */}
      <FooterSection />
    </>
  );
}
