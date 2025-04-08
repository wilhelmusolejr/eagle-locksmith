import React from "react";
import Icon from "./Icon";

export default function IconLabelCard({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-red-700 mt-1">
        <Icon icon={icon} className="w-7" />
      </span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
