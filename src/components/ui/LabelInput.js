import React from "react";

export default function LabelInput({ type, placeholder, label, id }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-medium uppercase ">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="p-3 text-gray-900 bg-white rounded-md input"
      />
    </div>
  );
}
