import badmintonImg from "../assets/erindale-badminton-yellow.webp";

const Footer = () => {
  return (
    <footer className="text-center bg-[#1c185e] text-white">
      <div className="flex justify-between px-6 pt-6 w-full">
        <img src={badmintonImg} className="max-h-10 ml-2 lg:ml-10" alt="Badminton Image"/>
        {/* <div className="text-xl lg:text-2xl h-9 flex flex-col justify-center text-yellow-300 font-bold">Erindale Badminton</div> */}
        <div className="flex justify-center mb-6 ">
          <a href="https://www.facebook.com/profile.php?id=100088558296408" className="rounded-full border-2 border-white text-white leading-normal uppercase w-9 h-9 mr-5" aria-label="Facebook">
            <svg aria-hidden="true"
            fill="white"
            className="w-2 h-full mx-auto "
            viewBox="0 0 320 512"
          >
            <path
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            ></path>
            </svg>
          </a>

          <a href="https://www.instagram.com/erindale_badminton_club/?next=%2F" className="rounded-full border-2 border-white text-white leading-normal uppercase w-9 h-9" aria-label="Instagram">
            <svg aria-hidden="true"
            fill="white"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
              className="w-3 h-full mx-auto"

              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>

        </div>
      </div>

      <div className="hidden lg:flex justify-center p-4 text-xs lg:text-md" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        Copyright © 2022-2023 Erindale Badminton - All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer