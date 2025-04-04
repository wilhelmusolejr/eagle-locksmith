import Icon from "./Icon";

export default function AdvancedItem({ icon, paragraph }) {
  return (
    <div className="flex items-center gap-3 list-card max-w-10/12 mx-auto">
      {/* icon */}
      <div className="">
        <Icon icon={icon} className="text-orange w-5" />
      </div>

      {/* paragraph */}
      <p className="text-left text-gray-500">{paragraph}</p>
    </div>
  );
}
