import React from "react";

export default function PageHeader({ children }) {
  return (
    <h1 className="xl:text-6xl text-5xl font-bold capitalize mx-auto">
      {children}
    </h1>
  );
}
