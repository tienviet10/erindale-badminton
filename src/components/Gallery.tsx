import { useState } from "react";
import ChristmasFood4 from "../assets/christmas_food1.webp";
import ChristmasFood1 from "../assets/christmas_food2.webp";
import ChristmasFood2 from "../assets/christmas_food3.webp";
import ChristmasFood3 from "../assets/christmas_food4.webp";
import ChristmasGroup1 from "../assets/christmas_group1.webp";
import ChristmasGroup2 from "../assets/christmas_group2.webp";
import ChristmasGroup3 from "../assets/christmas_group3.webp";
import ChristmasGroup4 from "../assets/christmas_group4.webp";
import ClubGroup1 from "../assets/club-badminton1.webp";
import ClubGroup2 from "../assets/club-badminton2.webp";
import ClubGroup4 from "../assets/club-badminton4.webp";
import ClubGroup3 from "../assets/club_badminton3.webp";
import Halloween1 from "../assets/Halloween1.webp";
import Halloween2 from "../assets/Halloween2.webp";
import Halloween3 from "../assets/Halloween3.webp";
import Halloween4 from "../assets/Halloween4.webp";
import Halloween5 from "../assets/Halloween5.webp";
import Halloween6 from "../assets/Halloween6.webp";

// const galleryTabs = ["Christmas", "Club", "Tournament", "Halloween" ];
const galleryTabs = ["Club", "Halloween", "Christmas" ];
const imageListMap = {
  "Club": [ChristmasGroup2, ClubGroup1, ClubGroup3, ChristmasGroup3, ClubGroup4, ClubGroup2], 
  // "Tournament": ["https://www.erindalebadminton.com/albums/2013XmasParty/DSC_7091.jpg", "https://www.erindalebadminton.com/albums/2013XmasParty/DSC_7091.jpg", "https://www.erindalebadminton.com/albums/2013XmasParty/DSC_7091.jpg", "https://www.erindalebadminton.com/albums/2013XmasParty/DSC_7091.jpg", "https://www.erindalebadminton.com/albums/2013XmasParty/DSC_7091.jpg", "https://www.erindalebadminton.com/albums/2013XmasParty/DSC_7091.jpg"], 
  "Halloween": [Halloween6, Halloween1, Halloween2, Halloween3, Halloween5, Halloween4], 
  "Christmas": [ChristmasFood3, ChristmasFood1, ChristmasGroup1, ChristmasGroup4, ChristmasFood4, ChristmasFood2],
}
const Gallery = () => {
  const [galleryTab, setGalleryTab] = useState(galleryTabs[0]);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [currentPageMobile, setCurrentPageMobile] = useState(0);

  return (
    <div
      className="bg-application-color flex justify-center w-full text-text-application-color"
      id="Gallery"
    >
      <section className="w-[90%] px-4 py-24 mx-auto space-y-5 lg:space-y-10 lg:py-24 lg:px-6 overflow-hidden text-gray-700">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-text-application-color">
          Gallery
        </h2>
        <div className="hidden lg:flex items-center justify-center">
          <div className="flex space-x-4 bg-application-color p-2 overflow-hidden w-full justify-center">
            {galleryTabs.map((tab) => {
              return (
                <div
                  key={tab}
                  className={
                    tab === galleryTab
                      ? "inline-block px-4 py-2 font-medium border-text-application-color duration-150 ease-in border-b text-lg text-text-application-color cursor-pointer"
                      : "inline-block px-4 py-2 font-medium text-white text-lg border-text-application-color duration-150 ease-in hover:border-b hover:text-text-application-color cursor-pointer"
                  }
                  onClick={() => setGalleryTab(tab)}
                >
                  {tab}
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden flex justify-center">
          <div>
            <div className="dropdown relative">
              <button
                onClick={() => setMobileDropdown((prev) => !prev)}
                className="
              dropdown-toggle
              min-w-[150px]
              px-6
              py-2.5
              text-white
              font-medium
              text-md
              leading-tight
              transition
              duration-150
              ease-in-out
              flex
              items-center
              whitespace-nowrap
              justify-center
            "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {galleryTab}
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="caret-down"
                  className="w-2 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                  ></path>
                </svg>
              </button>
              {mobileDropdown ? (
                <ul
                  className="
              dropdown-menu
              w-[100%]
              absolute
              bg-white
              text-base
              z-10
              float-left
              py-2
              list-none
              text-left
              mt-1
              m-0
              bg-clip-padding
              border-none
            "
                  aria-labelledby="dropdownMenuButton1"
                >
                  {galleryTabs.map((tab) => {
                    return (
                      <li key={tab}>
                        <div
                          className="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                  "
                          onClick={() => {
                            setMobileDropdown(false);
                            setGalleryTab(tab);
                            setCurrentPageMobile(0);
                          }}
                        >
                          {tab}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <div className="container mx-auto g:px-32 mt-10">
          <div className="hidden lg:flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageListMap[galleryTab][0]}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageListMap[galleryTab][1]}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageListMap[galleryTab][2]}
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageListMap[galleryTab][3]}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageListMap[galleryTab][4]}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageListMap[galleryTab][5]}
                />
              </div>
            </div>
          </div>

          <div
            id="carouselExampleControls"
            className="lg:hidden carousel slide relative mb-8"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                <img
                  src={imageListMap[galleryTab][currentPageMobile]}
                  className="block w-full"
                  alt="Wild Landscape"
                />
              </div>
            </div>
            {/* {currentPageMobile > 0 && (
              <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
                aria-label="previous picture"
                onClick={() => setCurrentPageMobile((prev) => prev - 1)}
              >
                <span
                  className="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">
                  <svg
                    className="h-8 w-8 font-bold text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </span>
              </button>
            )} */}

            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
              aria-label="previous picture"
              onClick={() =>
                setCurrentPageMobile((prev) =>
                  currentPageMobile > 0
                    ? prev - 1
                    : imageListMap[galleryTab].length - 1
                )
              }
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">
                <svg
                  className="h-8 w-8 font-bold text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </span>
            </button>

            {/* {currentPageMobile < imageListMap[galleryTab].length - 1 && (
              <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
                aria-label="next picture"
                onClick={() => setCurrentPageMobile((prev) => prev + 1)}
              >
                <span
                  className="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">
                  <svg
                    className="h-8 w-8 font-bold text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
              </button>
            )} */}

            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
              aria-label="next picture"
              onClick={() =>
                setCurrentPageMobile((prev) =>
                  imageListMap[galleryTab].length - 1 > prev ? prev + 1 : 0
                )
              }
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">
                <svg
                  className="h-8 w-8 font-bold text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery