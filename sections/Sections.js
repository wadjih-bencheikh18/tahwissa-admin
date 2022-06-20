import map from "../images/map.png";
import road from "../images/road.png";
import virtual from "../images/virtual.png";
import calendar from "../images/calendar.png";
import Image from "next/image";
export default function Sections() {
  return (
    <div className="h-screen flex flex-col items-center bg-white">
      <div className="text-[40px] font-bold pt-12 pb-6">Sections</div>
      {/* cards */}
      <div className="grid grid-cols-2 gap-10 px-52">
        {/* card */}
        <div className="cursor-pointer grid grid-rows-3 text-center border rounded-2xl shadow-md p-6 justify-center items-center space-y-2">
          <div className="font-medium text-2xl">
            Carte numérique intéractive
          </div>
          <div className="w-14 justify-self-center">
            <Image src={map} />
          </div>
          <div className="">
            Les sites touristiques et endroits intéressants à visiter
          </div>
        </div>
        {/* card */}
        <div className="cursor-pointer grid grid-rows-3 border rounded-2xl text-center shadow-md p-6 items-center space-y-2">
          <div className="font-medium text-2xl">Evènements</div>
          <div className="w-14 justify-self-center">
            <Image src={calendar} />
          </div>
          <div className="">La liste des évènements</div>
        </div>
        {/* card */}
        <div className="cursor-pointer grid grid-rows-3 border rounded-2xl text-center shadow-md p-6 items-center space-y-2">
          <div className="font-medium text-2xl">Itinéraires touristiques</div>
          <div className="w-14 justify-self-center">
            <Image src={road} />
          </div>
          <div className="">
            La découverte de lieux touristiques en traçant un parcours
          </div>
        </div>
        {/* card */}
        <div className="cursor-pointer grid grid-rows-3 border rounded-2xl text-center shadow-md p-6 items-center space-y-2">
          <div className="font-medium text-2xl">Visite en ligne</div>
          <div className="w-20 justify-self-center">
            <Image src={virtual} />
          </div>
          <div className="">La visite virtuelle des lieux touristiques</div>
        </div>
      </div>
    </div>
  );
}
