import logo from "../images/logo.png";
import Image from "next/image";

export default function MainNavbar() {
  const sections = [
    <a key={0} href="/" className="hover:text-[#8168DD] ml-16">
      Accueil
    </a>,
    <a key={1} href="/" className="hover:text-[#8168DD]">
      Sections
    </a>,
    <a key={2} href="/" className="hover:text-[#8168DD]">
      A propos
    </a>,
    <a key={3} href="/" className="hover:text-[#8168DD]">
      Contact
    </a>,
    <a
      key={4}
      href="/"
      className="text-[#8168DD] hover:text-white hover:bg-[#8168DD] border border-[#8168DD] rounded-md p-2 ml-10"
    >
      S'authentifier
    </a>,
  ];

  const NavbarLinks = sections.map((section, i) => (
    <div key={i}>{section}</div>
  ));
  return (
    <div className="fixed top-0 z-50 bg-white w-screen border-b min-h-[40px]">
      <div className="ml-24 flex items-center justify-between font-medium mr-24">
        {/* logo */}
        <div className="w-14 m-1 pt-1">
          <a href="/">
            <Image src={logo} alt="logo" />
          </a>
        </div>
        {/* Navbar links */}
        <nav className="flex space-x-24 items-center h-12">{NavbarLinks}</nav>
      </div>
    </div>
  );
}
