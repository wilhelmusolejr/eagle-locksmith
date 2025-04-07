import React from "react";

export default function ReviewImageBg({ url }) {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url('/images/reviews/${url}.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
    </div>
  );
}
