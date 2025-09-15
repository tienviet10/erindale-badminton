import React from "react";

const Information = () => {
  return (
    <section className="bg-application-color" id="Locations">
      <div className="w-[90%] md:w-[75%] lg:w-[60%] px-4 lg:px-0 py-40 mx-auto space-y-12 lg:space-y-20">
        <div className="sm:text-lg text-white">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-text-application-color">
            Play Time and Locations:
          </h2>
          <p className="mb-8 font-light text-xl">
            Our season runs from September to May, with a break during winter
            holidays and school holiday closures.
          </p>

          <ul className="space-y-5 border-t border-b border-black my-7 py-7">
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
              <span className="text-xl font-medium leading-tight text-white">
                Monday: 6:00pm - 10:00pm (
                <a
                  className="hover:text-yellow-700 underline"
                  href="https://maps.app.goo.gl/DaR9jupKaUuRvzAc9"
                >
                  at John Fraser Secondary School
                </a>
                )
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
              <span className="text-xl font-medium leading-tight text-white">
                Wednesday: 8:15pm - 10:00pm (
                <a
                  className="hover:text-yellow-700 underline"
                  href="https://goo.gl/maps/nKiGknmUqqUthmyv6"
                >
                  at Loyola Catholic Secondary School
                </a>
                )
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
              <span className="text-xl font-medium leading-tight text-white">
                Friday: 6:00pm - 10:00pm (
                <a
                  className="hover:text-yellow-700 underline"
                  href="https://www.google.ca/maps/place/Erindale+Secondary+School/@43.5389142,-79.668638,17z/data=!4m5!3m4!1s0x882b43ec1f134c83:0x8ac7f897ae4a3667!8m2!3d43.5389376!4d-79.6665244?hl=en"
                >
                  at Erindale Secondary School
                </a>
                )
              </span>
            </li>
          </ul>


          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4 text-text-application-color">
              Calendar
            </h3>
          
            <div className="calendar-embed">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=990b0487b3aa8c1fc0b98bfa9fd0aa9c6fbcce3418f614eb6d9c2bbb40d032dd%40group.calendar.google.com&ctz=America%2FToronto&showTitle=0&showTabs=0&showPrint=0&showCalendars=0&wkst=1"
                frameBorder="0"
                scrolling="no"
                title="EBC Sessions 2025/2026"
              ></iframe>
          
              {/* Dim overlay for Sat/Sun */}
              <div className="weekend-overlay"></div>
            </div>
          
            <style>{`
              .calendar-embed {
                position: relative;
                overflow: hidden;
                border-radius: 12px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                padding-bottom: 80%; /* default 16:9-ish for Month view */
                height: 0;
              }
          
              .calendar-embed iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 0;
              }
          
              /* Mobile: taller for better readability */
              @media (max-width: 640px) {
                .calendar-embed {
                  padding-bottom: 140%;
                }
              }
          
              @media (min-width: 641px) and (max-width: 1023px) {
                .calendar-embed {
                  padding-bottom: 100%;
                }
              }
            `}</style>
          </div>




          
          <br></br>
          <p className="mb-2 font-light text-md">
            {/* * Guests are welcome to join on Wednesday and Friday. Consult
            Pricing section for the fees. Contact us to reserve your guest spot. */}
            * Guests are invited only. Must email and prepay for a guest spot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Information;
