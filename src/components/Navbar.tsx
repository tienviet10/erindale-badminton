import { useEffect, useState } from "react";
import badmintonImg from "../assets/erindale-badminton-yellow.webp";
// import badmintonImg from "../assets/badminton.webp";
import './Navbar.css';

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
            className="max-h-10 ml-2 lg:ml-10"
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
      {/* <AnnouncementBanner setOpenedModal={setOpenedModal}/> */}
      {
       openedModal && (
        <div
          id="defaultModal"
          className="fixed top-0 left-0 right-0 w-full p-4 md:inset-0 h-modal md:h-full z-200 bg-gray-600 bg-opacity-50"
        >
          <div className="relative mx-auto w-full h-screen max-w-2xl flex flex-col justify-center items-center">
            {/* <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Terms of Service
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
          
                <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                    </p>
                </div>
        
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                    <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                </div>
            </div> */}
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalScrollableLabel"
                >
                  Brand New Court Locations
                </h5>
                <button className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" onClick={()=> setOpenedModal(false)}>
                  <svg
                    className="h-6 w-6 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="modal-body relative p-4">
                <p>Locate in Toronto and Vancouver.</p>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-red-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
                  data-bs-dismiss="modal"
                  onClick={()=> setOpenedModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
       )
      }

    </div>

  )
}

export default Navbar



