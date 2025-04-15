// app/about/page.js
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Navigator from "@/components/Navigator";
import MiniHeader from "@/components/MiniHeader";
import SectionHeading from "@/components/SectionHeading";
import MapSection from "@/components/sections/MapSection";
import FooterSection from "@/components/sections/FooterSection";
import Icon from "@/components/Icon";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ButtonCallUsWithNum from "@/components/ButtonCallUsWithNum";
import ListContainer from "@/components/ListContainer";

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
              <p className="hidden font-bold tracking-wide text-orange-400 uppercase">
                Trusted Eagle Locksmith
              </p>
              <PageHeader>Eagle Locksmith in the DMV Area</PageHeader>
              <p className="max-w-2xl py-10 pt-5 mx-auto text-gray-300 xl:text-xl">
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
              <ButtonCallUsWithNum />
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="px-5 py-32 parent">
        {/* content 1 */}
        <div className="container max-w-xl mx-auto text-center lg:max-w-4xl">
          <SectionHeading type="small">
            24/7 Locksmith Services in Washington D.C., Maryland & Virginia
          </SectionHeading>

          <div className="flex flex-col gap-5 text-lg font-light text-left text-gray-700 mt-15">
            <p>
              For Eagle Services, you can consider listing cities within the
              Washington, D.C., Maryland, and Virginia (DMV) area where you
              offer services. Here’s a list of major cities and surrounding
              areas within the DMV region that you might include:
            </p>

            <div className="my-10">
              <h3 className="mb-10 text-xl font-medium text-center text-red-700">
                Cities & Communities We Serve
              </h3>
              <ul className="grid grid-cols-1 gap-2 p-4 text-gray-700 sm:grid-cols-2 md:grid-cols-3">
                {locations.map((location, index) => (
                  <li key={index} className="flex items-center gap-2 ">
                    <Icon icon={faLocationDot} className={"w-4"} />
                    {location}
                  </li>
                ))}
              </ul>
            </div>

            {content.map((block, index) => (
              <div key={`list-${index}`} className="my-5 text-black">
                {block.header && (
                  <h3 className="mb-5 text-xl font-medium text-red-700">
                    {block.header}
                  </h3>
                )}

                <ListContainer
                  className={"pl-5 space-y-1 text-gray-800 list-disc"}
                  items={block.items}
                />
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
