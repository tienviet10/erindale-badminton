import React from "react";
import { useEffect, useState } from "react";
import badmintonImg from "../assets/erindale-badminton-yellow.webp";
import AnnouncementBanner from "./AnnouncementBanner";
import Details from "./Details";
// import badmintonImg from "../assets/badminton.webp";
import "./Navbar.css";

const Navbar = () => {
  const [menuExpand, setMenuExpand] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed w-full z-50">
      <nav
        className={
          scrolled || menuExpand
            ? "flex items-center justify-between flex-wrap p-4 lg:p-2 bg-application-color"
            : "flex items-center justify-between flex-wrap p-4 lg:p-2 bg-transparent"
        }
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            src={badmintonImg}
            className="max-h-14 ml-2 lg:ml-10"
            alt="Badminton Image"
          />
          {/* <a className="font-bold text-xl lg:text-2xl tracking-tight ml-0 lg:ml-2 text-[#fde047]" href="#">Erindale Badminton</a> */}
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
            onClick={() => setMenuExpand((prev) => !prev)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {menuExpand ? (
          <div className="absolute top-[58%] left-0 pl-8 pb-8 w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-[#1c610b] shadow-lg">
            <div className="inline-block text-lg px-4 py-2 leading-none text-white mt-4 lg:mt-0">
              <a
                href="#"
                className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                onClick={() => setMenuExpand(false)}
              >
                Home
              </a>
              <a
                href="#Benefits"
                className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                onClick={() => setMenuExpand(false)}
              >
                Benefits
              </a>
              <a
                href="#Pricing"
                className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                onClick={() => setMenuExpand(false)}
              >
                Pricing
              </a>
              <a
                href="#Organizer"
                className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                onClick={() => setMenuExpand(false)}
              >
                Organizers
              </a>
              <a
                href="#Gallery"
                className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                onClick={() => setMenuExpand(false)}
              >
                Gallery
              </a>
              <a
                href="#FAQ"
                className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-white"
                onClick={() => setMenuExpand(false)}
              >
                FAQ
              </a>
              <a
                href="#Locations"
                className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
                onClick={() => setMenuExpand(false)}
              >
                Locations
              </a>
              <a
                href="#Contact"
                className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-white"
                onClick={() => setMenuExpand(false)}
              >
                Contact
              </a>
            </div>
          </div>
        ) : (
          <ul className="menuItems">
            <li>
              <a href="#" data-item="Home">
                Home
              </a>
            </li>
            <li>
              <a href="#Benefits" data-item="Benefits">
                Benefits
              </a>
            </li>
            <li>
              <a href="#Pricing" data-item="Pricing">
                Pricing
              </a>
            </li>
            <li>
              <a href="#Organizer" data-item="Organizers">
                Organizers
              </a>
            </li>
            <li>
              <a href="#Gallery" data-item="Gallery">
                Gallery
              </a>
            </li>
            <li>
              <a href="#FAQ" data-item="FAQ">
                FAQ
              </a>
            </li>
            <li>
              <a href="#Locations" data-item="Locations">
                Locations
              </a>
            </li>
            <li>
              <a href="#Contact" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
      <AnnouncementBanner setOpenedModal={setOpenedModal} />
      {openedModal && <Details setOpenedModal={setOpenedModal} from="navbar" />}
    </div>
  );
};

export default Navbar;
