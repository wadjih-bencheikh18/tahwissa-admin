import MainNavbar from "../components/MainNavbar";
import APropos from "../sections/APropos";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Sections from "../sections/Sections";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ta7wissa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/ta7wissa2.ico" />
      </Head>
      <MainNavbar />
      <Hero />
      <Sections />
      <APropos />
      <Contact />
    </div>
  );
}
