import Icon from "./Icon";

export default function BannerItem({ icon, title }) {
  return (
    <div className="flex items-center w-48 gap-3 ">
      <Icon icon={icon} className="w-7 text-orange" />
      <h2 className="">{title}</h2>
    </div>
  );
}
