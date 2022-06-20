import map from "../images/map.png";
import road from "../images/road.png";
import virtual from "../images/virtual.png";
import calendar from "../images/calendar.png";
import Image from "next/image";
export default function Sections() {
  return (
    <div className="h-screen flex flex-col items-center bg-white">
      <div className="text-[40px] font-bold p-12">Sections</div>
      {/* cards */}
      <div className="grid grid-cols-2 gap-16">
        {/* card */}
        <div className="border rounded-2xl shadow-md p-6 flex flex-col items-center space-y-8">
          <div className="font-medium text-2xl">
            Carte numérique intéractive
          </div>
          <div className="w-14">
            <Image src={map} />
          </div>
          <div className="">Promouvoir le tourisme etc........</div>
        </div>
        {/* card */}
        <div className="border rounded-2xl shadow-md p-6 flex flex-col items-center space-y-8">
          <div className="font-medium text-2xl">Evènements</div>
          <div className="w-14">
            <Image src={calendar} />
          </div>
          <div className="">descr</div>
        </div>
        {/* card */}
        <div className="border rounded-2xl shadow-md p-6 flex flex-col items-center space-y-8">
          <div className="font-medium text-2xl">Itinéraires touristiques</div>
          <div className="w-14">
            <Image src={road} />
          </div>
          <div className="">descr</div>
        </div>
        {/* card */}
        <div className="border rounded-2xl shadow-md p-6 flex flex-col items-center space-y-8">
          <div className="font-medium text-2xl">
            Visite en ligne des lieux touristiques
          </div>
          <div className="w-20">
            <Image src={virtual} />
          </div>
          <div className="">descr</div>
        </div>
      </div>
    </div>
  );
}
