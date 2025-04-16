export default function SectionHeading({ children, type = "big" }) {
  if (type === "big") {
    return <h2 className="text-5xl font-bold uppercase ">{children}</h2>;
  }
  if (type === "small") {
    return <h2 className="text-3xl font-bold">{children}</h2>;
  }
}
