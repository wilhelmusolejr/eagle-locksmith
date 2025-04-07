import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BannerItem from "../BannerItem";

export default function BannerSection() {
  return (
    <div className=" pb-32 parent banner-small">
      <div className="container mx-auto md:max-w-7xl w-full">
        <div className="w-full bg-black banner min-h-96 text-white text-center py-10 px-5 flex items-center justify-center flex-col ">
          <h2 className="text-3xl md:text-4xl font-bold z-10 capitalize md:w-8/12">
            Trusted and affordable locksmith services in the DMV area
          </h2>
          <div className="flex flex-col z-10 items-center justify-center gap-1 my-5">
            {/* check card */}
            <BannerItem icon={faCheck} title="Quick" />
            <BannerItem icon={faCheck} title="Reliable" />
            <BannerItem icon={faCheck} title="Dependable" />
            <BannerItem icon={faCheck} title="Cost-effective" />
          </div>
          <p className="font-light md:w-8/12 mx-auto z-10 lg:w-7/12">
            Eagle Locksmith Services is here to help! Our team of certified
            locksmiths, backed by years of experience, offers high-quality
            residential locksmith solutions to keep your home secure.
          </p>
        </div>
      </div>
    </div>
  );
}
