export default function SectionHeader({ subtitle, title, description }) {
  return (
    <div className="text-center text mb-10">
      <p className="font-medium tracking-wide text-orange-400 uppercase">
        {subtitle}
      </p>
      <h2 className="text-4xl font-bold uppercase ">{title}</h2>
      <p className="py-5">{description}</p>
    </div>
  );
}
