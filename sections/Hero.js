import Image from "next/image";
import hero from "../images/mkm2.jpg";
export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="absolute mt-24 -z-10 brightness-50">
        <Image src={hero} alt="" />
      </div>
      <div className="z-10 text-white font-medium text-[40px] w-[500px] text-center flex flex-col justify-center items-center">
        Votre guide touristique Algérien
        <div className="mt-24">
          <div className="bg-[#8168DD] shadow-md rounded-lg py-2 px-6 text-xl flex items-center cursor-pointer">
            Commencer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-3 mt-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
