import Icon from "./Icon";

export default function SocialItem({ icon, social, color, link = "#" }) {
  return (
    <li className="flex flex-row items-center justify-center gap-3 text-center w-60 lg:w-fit">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-3 group"
      >
        <div
          className={`flex items-center justify-center ${color} rounded-full w-15 h-15 mx-auto transition-transform transform group-hover:scale-110 group-hover:brightness-110`}
        >
          <Icon
            icon={icon}
            className="w-5 text-white transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>
        <p className="text-lg font-semibold transition-colors lg:hidden group-hover:text-neutral-300">
          {social}
        </p>
      </a>
    </li>
  );
}
