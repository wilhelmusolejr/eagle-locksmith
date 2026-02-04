import React from "react";
import Icon from "./Icon";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ReviewCard({ desription, name, link }) {
  let desc;
  if (desription.length > 150) {
    desc = desription.slice(0, 150);
    desc += "...";
  } else {
    desc = desription;
  }

  const tailwindColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-green-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "bg-rose-500",
    "bg-stone-500",
    "bg-neutral-500",
    "bg-zinc-500",
    "bg-gray-500",
    "bg-slate-500",
  ];

  let chosenColor =
    tailwindColors[Math.floor(Math.random() * tailwindColors.length)];

  return (
    <a
      target="_blank"
      href={link}
      className="w-80 min-w-80 bg-white rounded-lg shadow review-card container flex flex-col p-5 min-h-72 justify-between h-full"
    >
      <div className="reviewer-description font-light">
        <p>{desc}</p>
      </div>

      {/* reviewer */}
      <div className="flex items-center gap-2 reviewer-info">
        {/* image */}
        <div className="">
          <div
            className={`${chosenColor} rounded-full w-15 h-15 flex items-center justify-center text-2xl text-white font-medium`}
          >
            {name[0].toUpperCase()}
          </div>
        </div>
        <div className="">
          <h3 className="font-medium">{name}</h3>
          <div className="flex items-center stars">
            <Icon icon={faStar} className="w-5 text-orange" />
            <Icon icon={faStar} className="w-5 text-orange" />
            <Icon icon={faStar} className="w-5 text-orange" />
            <Icon icon={faStar} className="w-5 text-orange" />
            <Icon icon={faStar} className="w-5 text-orange" />
          </div>
        </div>
      </div>
    </a>
  );
}
