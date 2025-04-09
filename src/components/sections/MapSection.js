import React from "react";

export default function MapSection() {
  return (
    <div className="px-5 py-32 parent">
      {/* MAP SECTION */}
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-5">Visit Us</h2>
        <p className="text-gray-600 mb-10">
          We proudly serve clients across Baltimore, Maryland, Washington, D.C.,
          and Virginia.
        </p>
        <div className="w-full h-96 relative">
          <iframe
            title="Eagle Locksmith Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.001164642572!2d-77.03687038465083!3d38.89767697957044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaaaaaaaaaaaaaaaa!2sWhite%20House!5e0!3m2!1sen!2sus!4v1618350955069!5m2!1sen!2sus"
            className="w-full h-full border-0 rounded-lg"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
