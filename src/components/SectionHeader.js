import SectionHeading from "./SectionHeading";

export default function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="text-center text mb-10">
      <p className="font-semibold tracking-wide text-orange-400 uppercase ">
        {subtitle}
      </p>
      <SectionHeading>{title}</SectionHeading>
      <p className="py-5 w-10/12 mx-auto">{description}</p>
    </div>
  );
}
