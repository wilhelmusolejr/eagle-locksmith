import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <header>
        {/* mini header */}
        <div className="mini-header p-5">
          <div className="text-center ">
            <div className="flex items-center justify-center gap-2 pb-5">
              <FontAwesomeIcon icon={faPhone} className="text-orange-500 w-5" />
              <p className="">+1 (844) 411-5625</p>
            </div>

            <p className="uppercase font-semibold blue">
              We Provide fast, reliable and affordable locksmith services
            </p>
          </div>
        </div>

        {/* navigator */}
      </header>
    </>
  );
}
