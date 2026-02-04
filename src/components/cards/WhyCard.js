import React from "react";
import Icon from "../ui/Icon";

export default function WhyCard({ icon, title, description }) {
  return (
    <div className="px-5 py-10 text-center border border-gray-700 card rounded-xl lg:min-h-96 flex items-center justify-center flex-col mx-auto">
      {/* icon */}
      <div className="flex items-center justify-center">
        <Icon icon={icon} className="text-orange-400 text-4xl" />
      </div>

      <div className="">
        <h3 className="my-5 text-2xl uppercase font-medium">{title}</h3>
        <p className=" text-gray-300">{description}</p>
      </div>
    </div>
  );
}
