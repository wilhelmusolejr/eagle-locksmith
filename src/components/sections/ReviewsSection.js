import React from "react";
import Image from "next/image";
import Icon from "../Icon";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ReviewsSection() {
  return (
    <div className="bg-orange-400 parent">
      <div className="hidden grid-cols-2 grid-rows-3 ">
        <div className="h-48 bg-red-400"></div>
        <div className="h-48 bg-blue-400"></div>
        <div className="h-48 bg-green-400"></div>
        <div className="h-48 bg-purple-400"></div>
        <div className="h-48 bg-yellow-400"></div>
        <div className="h-48 bg-pink-400"></div>
      </div>

      <div className="container mx-auto py-24 ">
        {/* LOGO */}
        <div className="p-2 mx-auto mb-10 bg-white rounded-full w-fit">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Example"
          />
        </div>

        <div className="flex gap-5 flex-row justify-center items-center">
          {/* review card */}
          <div className="max-w-80 bg-white rounded-lg shadow review-card container flex flex-col p-5 min-h-72 justify-between h-full">
            <div className="reviewer-description font-light">
              <p>
                My experience with Eagle Locksmith was outstanding from start to
                finish. I needed to upgrade the locks on my business after a
                break-in, and they came through with high-quality products...
              </p>
            </div>

            {/* reviewer */}
            <div className="flex items-center gap-2 reviewer-info">
              {/* image */}
              <div className="">
                <div className="bg-green-500 rounded-full w-15 h-15"></div>
              </div>
              <div className="">
                <h3 className="font-medium">Jared Bryant</h3>
                <div className="flex items-center stars">
                  <Icon icon={faStar} className="w-5 text-orange" />
                  <Icon icon={faStar} className="w-5 text-orange" />
                  <Icon icon={faStar} className="w-5 text-orange" />
                  <Icon icon={faStar} className="w-5 text-orange" />
                  <Icon icon={faStar} className="w-5 text-orange" />
                </div>
              </div>
            </div>
          </div>

          {/* review card */}
          <div className="max-w-80 hidden bg-white rounded-lg shadow review-card container  flex-col p-5 min-h-72 justify-between h-full">
            <div className="reviewer-description font-light">
              <p>
                Super fast service, called them to re-key my locks and made an
                appointment. Easy and done within 20 minutes. Awesome service
                and super nice. Thanks!
              </p>
            </div>

            {/* reviewer */}
            <div className="flex items-center gap-2 reviewer-info">
              {/* image */}
              <div className="">
                <div className="bg-yellow-500 rounded-full w-15 h-15"></div>
              </div>
              <div className="">
                <h3 className="font-medium">Hector Perkins</h3>
                <div className="flex items-center stars">
                  <Icon icon={faStar} className="w-5 text-orange" />
                  <Icon icon={faStar} className="w-5 text-orange" />
                  <Icon icon={faStar} className="w-5 text-orange" />
                  <Icon icon={faStar} className="w-5 text-orange" />
                  <Icon icon={faStar} className="w-5 text-orange" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
