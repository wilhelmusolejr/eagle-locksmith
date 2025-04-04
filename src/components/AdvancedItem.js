import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";

export default function AdvancedItem({ paragraph }) {
  return (
    <div className="flex items-center gap-3 list-card">
      {/* icon */}
      <div className="">
        <Icon icon={faCheckDouble} className="text-orange w-5" />
      </div>

      {/* paragraph */}
      <p className="text-left text-gray-500">{paragraph}</p>
    </div>
  );
}
