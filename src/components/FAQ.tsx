import infoIcon from "../assets/info.png";
import React from "react";

const FAQ = () => {
  return (
    <div className="bg-gray-100 flex justify-center w-full" id="FAQ">
      <section className="w-[90%] md:w-[75%] lg:w-[60%] px-4 py-40 mx-auto space-y-12 lg:space-y-20 lg:px-0">
        <div className="flex flex-col">
          <div className="mx-auto w-[100%] mt-5 lg:mt-0">
            <h2 className="mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-application-color">
              Frequently asked questions
            </h2>
            <div className=" pt-8 text-left border-t border-gray-900 ">
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-xl font-medium text-gray-900 dark:text-application-color">
                    {/* <svg className="flex-shrink-0 mr-2 w-5 h-5 text-black " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> */}
                    <img
                      className="flex-shrink-0 mr-2 w-5 h-5 text-black"
                      src={infoIcon}
                      alt="FAQ icon"
                    />
                    What do my membership fees cover?
                  </h3>
                  <ul className="list-disc ml-4 text-lg">
                    <li>
                      Access to our nine courts for the entire play season
                    </li>
                    <li>
                      We provide Mavis 300 plastic shuttles. Feather shuttles
                      may be used at members discretion but are not provided by
                      EBC.
                    </li>
                    <li>
                      4 social event nights, in house tournament, and year end
                      party.
                    </li>
                  </ul>
                </div>
                {/* <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-xl font-medium text-gray-900 dark:text-application-color">
                    <img
                      className="flex-shrink-0 mr-2 w-5 h-5 text-black"
                      src={infoIcon}
                      alt="FAQ icon"
                    />
                    May I request a refund?
                  </h3>
                  <p className="text-black text-lg">
                    Membership fees are refundable at any time. The refund paid
                    is less a per member charge of $10 for each evening the club
                    operated prior to when we received the request. Member
                    privileges are non-transferable.
                  </p>
                </div> */}
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-xl font-medium text-gray-900 dark:text-application-color">
                    <img
                      className="flex-shrink-0 mr-2 w-5 h-5 text-black"
                      src={infoIcon}
                      alt="FAQ icon"
                    />
                    Can I bring kids?
                  </h3>
                  <p className="text-black text-lg">
                    Sure. But they are not allowed to occupy any court for
                    practice, play hitting, etc -- especially if they are under
                    18 years of age. Our insurance policy does not cover players
                    under 18 years of age, so to allow your kids to play
                    constitutes a serious liability to the club.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-xl font-medium text-gray-900 dark:text-application-color">
                    <img
                      className="flex-shrink-0 mr-2 w-5 h-5 text-black"
                      src={infoIcon}
                      alt="FAQ icon"
                    />
                    What do you do with my email address?
                  </h3>
                  <p className="text-black text-lg">
                    All information about our club is available on our website.
                    From time-to-time, we will send out notices via email, as a
                    courtesy, to remind you of upcoming events. It is your
                    responsibility to keep us informed of any changes to your
                    email address.
                  </p>
                </div>
                {/* <div className="">
                  <h3 className="flex items-center mb-4 text-xl font-medium text-gray-900 dark:text-application-color">
                    <img
                      className="flex-shrink-0 mr-2 w-5 h-5 text-black"
                      src={infoIcon}
                      alt="FAQ icon"
                    />
                    Where can I find more resources about the club?
                  </h3>
                  <p className="text-black text-lg">Documents: </p>
                  <ul className="list-disc ml-4 text-lg">
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1si7iv-zH2nsAZNH4miL-7r6tizZoFmdG/view"
                        className="underline"
                      >
                        Registration Form
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://firebasestorage.googleapis.com/v0/b/dh-website-practice.appspot.com/o/images%2FFinancial%20Statement%20-%201July2022%20-%20%2030%20June2023-APPROVED.pdf?alt=media"
                        className="underline"
                      >
                        Erindale Club Report
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
