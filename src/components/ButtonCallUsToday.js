import React from "react";
import Icon from "./Icon";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ButtonCallUsToday() {
  return (
    <div className="cta flex items-center justify-center text-white my-10">
      <button className="bg-red-700 font-bold rounded-lg uppercase md:text-2xl shadow-lg flex items-center">
        <div className="p-3 bg-red-800 rounded-lg ">
          <Icon icon={faPhone} className="w-7" />
        </div>
        <div className="p-3">Call us today!</div>
      </button>
    </div>
  );
}
