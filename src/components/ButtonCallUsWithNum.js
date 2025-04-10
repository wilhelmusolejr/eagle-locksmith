import React from "react";
import Icon from "./Icon";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ButtonCallUsWithNum() {
  return (
    <div className="cta flex items-center justify-center">
      <a
        href="tel:8556332453"
        className="bg-red-700 font-bold rounded-lg uppercase md:text-2xl shadow-lg flex items-center"
      >
        <div className="p-3 bg-red-800 rounded-lg ">
          <Icon icon={faPhone} className="text-2xl" />
        </div>
        <div className="p-3">Call 855-633-2453</div>
      </a>
    </div>
  );
}
