import SectionHeading from "./SectionHeading";

export default function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="mb-10 text-center text">
      <p className="text-sm font-semibold tracking-wide text-orange-400 uppercase">
        {subtitle}
      </p>
      <SectionHeading>{title}</SectionHeading>
      <p className="py-5 mx-auto lg:w-7/12 leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}
