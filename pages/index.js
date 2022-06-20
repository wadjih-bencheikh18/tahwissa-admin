import MainNavbar from "../components/MainNavbar";
import Login from "../components/Login";
import APropos from "../sections/APropos";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Sections from "../sections/Sections";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [connect, setConnect] = useState(false);
  return (
    <div className="">
      <Head>
        <title>Ta7wissa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/ta7wissa2.ico" />
      </Head>
      <MainNavbar setConnect={setConnect} />
      <Hero />
      <Sections />
      <APropos />
      <Contact />

      {connect && (
        <div className="z-20 fixed top-[20%] left-[35%] w-[30%] h-[60%] flex justify-center">
          <p
            onClick={() => setConnect(false)}
            className="absolute top-8 right-6 text-white cursor-pointer text-xl"
          >
            x
          </p>
          <Login />
        </div>
      )}
    </div>
  );
}
