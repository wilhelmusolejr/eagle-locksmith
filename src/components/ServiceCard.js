import Image from "next/image";
import Icon from "./Icon";

export default function ServiceCard({
  image_path,
  image_alt,
  icon,
  title,
  description,
}) {
  return (
    <a
      href={`/services/${title.toLowerCase()}`}
      className="rounded-lg shadow bg-orange w-80  "
    >
      {/* image */}
      <div className="relative w-full h-48">
        {/* Image */}
        <Image
          src={image_path}
          fill
          alt={image_alt}
          className="absolute inset-0 object-cover w-full h-full rounded-t-lg"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black rounded-t-lg opacity-40 mix-blend-multiply"></div>
      </div>
      {/* text */}
      <div className="relative p-5 text-white font-light ">
        {/* icon */}
        <div className="flex absolute top-[-50px] items-center justify-center w-20 h-20 p-5 bg-white rounded-lg ">
          <Icon icon={icon} className="text-orange-400 w-7" />
        </div>
        <h3 className="mt-10 mb-5 text-2xl font-semibold uppercase">{title}</h3>
        <p className="text-left">{description}</p>
      </div>
    </a>
  );
}
