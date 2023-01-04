
const Information = () => {
  return (
    <section className="bg-gray-100" id="Information">
      <div className="max-w-screen-lg px-6 py-24 mx-auto space-y-12 lg:space-y-20">
          <div className="sm:text-lg text-black">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-black dark:text-application-color">
              Play Time and Locations:
            </h2>
            <p className="mb-8 font-light text-xl">
              Our season runs from September to May, with a break during winter holidays and school holiday closures. 
            </p>

            <ul
              className="space-y-5 border-t border-b border-black my-7 py-7"
            >
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-text-application-color "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-xl font-medium leading-tight text-black dark:text-application-color">
                  Monday: 8:00pm - 10:00pm (<a className="hover:text-yellow-700 underline" href="https://www.google.ca/maps/place/Erindale+Secondary+School/@43.5389142,-79.668638,17z/data=!4m5!3m4!1s0x882b43ec1f134c83:0x8ac7f897ae4a3667!8m2!3d43.5389376!4d-79.6665244?hl=en">at Erindale Secondary School</a>)
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-text-application-color "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-xl font-medium leading-tight text-black dark:text-application-color">
                  Wednesday: 8:15pm - 10:00pm (<a className="hover:text-yellow-700 underline" href="https://goo.gl/maps/nKiGknmUqqUthmyv6">at Loyola Secondary School</a>)
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-text-application-color "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-xl font-medium leading-tight text-black dark:text-application-color">
                  Friday: 6:00pm - 8:00pm (<a className="hover:text-yellow-700 underline" href="https://www.google.com/maps/place/2524+Bromsgrove+Rd,+Mississauga,+ON+L5J+1L8/@43.5037272,-79.6458246,17z/data=!3m1!4b1!4m5!3m4!1s0x882b44836dba4aaf:0x37453752dc3e9b7d!8m2!3d43.5037272!4d-79.6458246">at Clarkson Secondary School</a>)
                </span>
              </li>
            </ul>
            <p className="mb-2 font-light text-md">
              * Guests are welcome to join on Wednesday and Friday. See the fee below!
            </p>
          </div>
  
      </div>
    </section>
  );
};

export default Information;
