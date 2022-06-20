import Image from "next/image";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import li from "../images/li.png";
import codex from "../images/CodEx_blue.png";
export default function Contact() {
  return (
    <div className="flex flex-col items-center bg-white mb-20">
      <div className="text-[40px] font-bold p-12">Contact</div>
      <div className="flex gap-x-24">
        <a href="/">
          <Image src={codex} />
        </a>
        <a href="/">
          <Image src={li} />
        </a>
        <a href="/">
          <Image src={fb} />
        </a>
        <a href="/">
          <Image src={ig} />
        </a>
      </div>
    </div>
  );
}
