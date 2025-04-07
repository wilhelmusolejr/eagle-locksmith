import Icon from "./Icon";

import { faClock, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function MiniHeader() {
  return (
    <div className="p-5 xl:px-10 mini-header text-blue">
      <div className="flex flex-col lg:flex-row justify-between items-center ">
        {/* left */}
        <div className="flex flex-wrap gap-5 uppercase ">
          <div className="flex items-center justify-center lg:justify-start gap-2 ">
            <Icon icon={faPhone} className="w-7 text-orange-400" />
            <p className="font-medium">+1 (844) 411-5625</p>
          </div>

          <div className="w-0.5 h-6 bg-gray-400 hidden md:block " />

          <div className=" items-center hidden md:flex justify-center lg:justify-start gap-2 ">
            <div className="flex items-center justify-center ">
              <Icon icon={faClock} className="w-7 text-orange-400" />
            </div>
            <p className="font-medium">24 / 7 Emergency lockout services</p>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-center text-center">
          <p className="font-semibold uppercase ">
            We Provide fast, reliable and affordable locksmith services.
          </p>
        </div>
      </div>
    </div>
  );
}
