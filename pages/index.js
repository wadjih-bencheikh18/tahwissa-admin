import MainNavbar from "../components/MainNavbar";
import APropos from "./APropos";
import Contact from "./Contact";
import Hero from "./Hero";
import Sections from "./Sections";

export default function Home() {
  return (
    <div className="">
      <MainNavbar />
      <Hero />
      <Sections />
      <APropos />
      <Contact />
    </div>
  );
}
