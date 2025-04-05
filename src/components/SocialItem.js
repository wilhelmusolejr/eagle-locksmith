import Icon from "./Icon";

export default function SocialItem({ icon, social, color }) {
  return (
    <li className="flex flex-row items-center gap-3 w-60 ">
      <div
        className={`flex items-center justify-center ${color} rounded-full w-15 h-15`}
      >
        <Icon icon={icon} className={"text-white w-5"} />
      </div>
      <p className="text-lg font-semibold">{social}</p>
    </li>
  );
}
