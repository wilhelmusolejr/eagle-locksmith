// app/about/page.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCheckDouble,
  faHome,
  faPhone,
  faExclamationTriangle,
  faCar,
  faVault,
  faKey,
  faLock,
  faVideo,
  faIdCard,
  faBox,
  faClock,
  faShieldAlt,
  faBolt,
  faBrain,
  faThumbsUp,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Navigator from "@/components/Navigator";
import MiniHeader from "@/components/MiniHeader";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import MapSection from "@/components/sections/MapSection";
import FooterSection from "@/components/sections/FooterSection";
import Icon from "@/components/Icon";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import IconLabelCard from "@/components/IconLabelCard";

export default function LocationPage() {
  const locations = [
    "Deale",
    "Dickerson",
    "District Heights",
    "Dundalk",
    "Edgewater",
    "Edgewood",
    "Elkridge",
    "Ellicott City",
    "Essex",
    "Fallston",
    "Faulkner",
    "Federal Hill",
    "Fells Point",
    "Forest Hill",
    "Fork",
    "Fort Meade",
    "Fort Washington",
    "Frederick",
    "Fulton",
    "Gaithersburg",
    "Galesville",
    "Gambrills",
    "Germantown",
    "Gibson Island",
    "Glen Arm",
    "Glen Burnie",
    "Glen Echo",
    "Glenelg",
    "Glenn dale",
    "Greenbelt",
    "Gwynn Oak",
    "Halethorpe",
    "Hampstead",
    "Hanover",
    "Havre De Grace",
    "Highland",
    "Hughesville",
    "Hunt Valley",
    "Huntingtown",
    "Hyattsville",
    "Accokeek",
    "Annapolis",
    "Arnold",
    "Ashton",
    "Baltimore",
    "Bel Air",
    "Bel Alton",
    "Belcamp",
    "Beltsville",
    "Benedict",
    "Bethesda",
    "Bladensburg",
    "Bowie",
    "Braddock Heights",
    "Brandywine",
    "Brooklyn Park",
    "Broomes Island",
    "Brunswick",
    "Bryantown",
    "Burtonsville",
    "Butler",
    "Cabin John",
    "Capitol Heights",
    "Catonsville",
    "Chesapeake Beach",
    "Chevy Chase",
    "Churchville",
    "Clarksburg",
    "Clarksville",
    "Clinton",
    "Cobb Island",
    "Cockeysville",
    "College Park",
    "Columbia",
    "Crofton",
    "Crownsville",
    "Curtis Bay",
    "Damascus",
    "Davidsonville",
    "Dayton",
    "Indian Head",
    "Jarrettsville",
    "Jessup",
    "Joppa",
    "Kensington",
    "Kingsville",
    "La Plata",
    "Lanham",
    "Laurel",
    "Linthicum Heights",
    "Lisbon",
    "Lusby",
    "Lutherville-Timonium",
    "Manchester",
    "Mayo",
    "MD",
    "Middle River",
    "Middletown",
    "Millersville",
    "Monkton",
    "Mount Airy",
    "Mount rainier",
    "Myersville",
    "New Market",
    "New Windsor",
    "North Beach",
    "Nottingham",
    "Odenton",
    "Olney",
    "Owings Mills",
    "Oxon Hill",
    "Parkton",
    "Parkville",
    "Pasadena",
    "Perry Hall",
    "Phoenix",
    "Pikesville",
    "Poolesville",
    "Port Republic",
    "Potomac",
    "Prince Frederick",
    "Reisterstown",
    "Riva",
    "River dale",
    "Rockville",
    "Rosedale",
    "Savage",
    "Severn",
    "Severna Park",
    "Shady Side",
    "Silver Spring",
    "Solomons",
    "Sparks Glencoe",
    "Spencerville",
    "Suitland",
    "Sunderland",
    "Sykesville",
    "Takoma Park",
    "Taneytown",
    "Temple Hills",
    "Thurmont",
    "Towson",
    "Tracys Landing",
    "Union Bridge",
    "Upper Falls",
    "Upper Marlboro",
    "Upperco",
    "Waldorf",
    "Walkersville",
    "West Friendship",
    "West River",
    "Westminster",
    "White Hall",
    "White Marsh",
    "Windsor Mill",
    "Woodbine",
    "Woodlawn",
    "Woodsboro",
    "Woodstock",
  ];

  const content = [
    {
      header: "Washington, D.C.",
      items: ["Washington, D.C."],
    },
    {
      header: "Maryland:",
      items: [
        "Bethesda",
        "Rockville",
        "Silver Spring",
        "Gaithersburg",
        "Germantown",
        "College Park",
        "Bowie",
        "Laurel",
        "Hyattsville",
        "Waldorf",
        "Upper Marlboro",
        "Annapolis",
        "Columbia",
        "Ellicott City",
      ],
    },
    {
      header: "Virginia:",
      items: [
        "Arlington",
        "Alexandria",
        "Falls Church",
        "McLean",
        "Reston",
        "Herndon",
        "Tysons Corner",
        "Fairfax",
        "Annandale",
      ],
    },
  ];

  return (
    <>
      {/* MINI HEADER */}
      <MiniHeader />

      {/* NAVIGATOR */}
      <Navigator />

      {/* HEADER */}
      <header>
        <div className="flex flex-col h-[50vh] text-white bg-[url('/images/about/highview.webp')] bg-cover bg-center bg-no-repeat black-overlay">
          {/* Make the header take up the remaining space */}
          <div className="z-10 flex items-center justify-center flex-grow header">
            <div className="text-center text">
              <p className="font-bold hidden tracking-wide text-orange-400 uppercase">
                Trusted Eagle Locksmith
              </p>
              <h1 className="xl:text-7xl text-5xl font-bold capitalize xl:w-10/12 mx-auto md:leading-normal">
                Eagle Locksmith in the DMV Area
              </h1>
              <p className="pt-5 py-10 max-w-2xl xl:text-xl mx-auto text-gray-300">
                We want to make sure your entire process is{" "}
                <span className="font-semibold text-white uppercase">
                  stress free
                </span>
                ,{" "}
                <span className="font-semibold text-white uppercase">
                  simple
                </span>{" "}
                , and more importantly,{" "}
                <span className="font-semibold text-white uppercase">
                  affordable
                </span>
              </p>

              {/* CTA */}
              <div className="cta flex items-center justify-center">
                <button className="bg-red-700 font-bold rounded-lg uppercase md:text-2xl shadow-lg flex items-center">
                  <div className="p-3 bg-red-800 rounded-lg ">
                    <FontAwesomeIcon icon={faPhone} className="w-7" />
                  </div>
                  <div className="p-3">Call us today!</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="px-5 py-32 parent">
        {/* content 1 */}
        <div className="container max-w-xl mx-auto lg:max-w-4xl text-center">
          <SectionHeading>
            24/7 Locksmith Services in Washington D.C., Maryland & Virginia
          </SectionHeading>

          <div className="text-left flex gap-5 flex-col mt-15 text-gray-700 text-lg font-light">
            <p>
              For Eagle Services, you can consider listing cities within the
              Washington, D.C., Maryland, and Virginia (DMV) area where you
              offer services. Here’s a list of major cities and surrounding
              areas within the DMV region that you might include:
            </p>

            <div className="my-10">
              <h3 className="text-xl font-medium text-center  text-red-700 mb-10">
                Cities & Communities We Serve
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 text-gray-700">
                {locations.map((location, index) => (
                  <li key={index} className="flex items-center gap-2 ">
                    <Icon icon={faLocationDot} className={"w-4"} />
                    {location}
                  </li>
                ))}
              </ul>
            </div>

            {content.map((block, index) => (
              <div key={`list-${index}`} className="text-black my-5">
                {block.header && (
                  <h3 className="font-medium text-xl mb-5 text-red-700">
                    {block.header}
                  </h3>
                )}
                <ul className="list-disc pl-5 space-y-1 text-gray-800">
                  {block.items.map((item, z) => (
                    <li key={`list-item-${index}-${z}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="w-full h-[600px] bg-amber-300 mt-10 relative shadow-lg rounded-lg">
              <Image
                src={"/images/locations/van.webp"}
                fill
                alt="locksmith service van parked on a busy city street, without any visible signs or logos. The scene shows a modern urban environment with tall buildin"
                className="object-cover object-bottom rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <MapSection />

      {/* FOOTER */}
      <FooterSection />
    </>
  );
}
