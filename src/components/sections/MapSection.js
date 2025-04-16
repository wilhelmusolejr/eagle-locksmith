import React from "react";

export default function MapSection() {
  return (
    <div className="px-5 py-32 parent">
      {/* MAP SECTION */}
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="mb-5 text-3xl font-bold text-red-700">Visit Us</h2>
        <p className="mb-10 text-gray-600">
          We proudly serve clients across Baltimore, Maryland, Washington, D.C.,
          and Virginia.
        </p>
        <div className="relative w-full h-96">
          <iframe
            title="Eagle Locksmith Location"
            src="https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d774.846328636791!2d-76.9166013!3d39.0293333!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89b7c3a21cf016dd%3A0xa5d5de69eabb10b0!2sZ%20Burger%20Beltsville!3m2!1d39.0293308!2d-76.916026!4m5!1s0x89b7c473a3087bfd%3A0x535fc5669b893a69!2s10606%20Baltimore%20Ave%20Unit%20B%2C%20Beltsville%2C%20MD%2020705%2C%20United%20States!3m2!1d39.0293308!2d-76.916026!5e0!3m2!1sen!2sph!4v1744775822778!5m2!1sen!2sph"
            className="w-full h-full border-0 rounded-lg"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
