import infoIcon from "../assets/info.png";

const Contact = () => {
  return (
    <div className="bg-gray-100 flex justify-center w-full" id="FAQ">
      <section className="w-[90%] md:w-[75%] lg:w-[60%] px-4 py-20 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-0">
        <div className="flex flex-col">
          <div className="mx-auto w-[100%] mt-5 lg:mt-0">
            <h2 className="mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-[#1c185e]">
              Frequently asked questions
            </h2>
            <div className=" pt-8 text-left border-t border-gray-900 ">
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-[#1c185e]">
                    {/* <svg className="flex-shrink-0 mr-2 w-5 h-5 text-black " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> */}
                    <img
                      className="flex-shrink-0 mr-2 w-5 h-5 text-black"
                      src={infoIcon}
                      alt="FAQ icon"
                    />
                    What do my membership fees cover?
                  </h3>
                  <ul className="list-disc ml-4">
                    <li>
                      Access to our nine courts for the entire play season
                    </li>
                    <li>Birds (we play with Mavis 300 plastic birds)</li>
                    <li>
                      Treat nights (Halloween, Christmas, etc), the end of year
                      wing night, club tournament
                    </li>
                  </ul>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-[#1c185e]">
                    <img
                      className="flex-shrink-0 mr-2 w-5 h-5 text-black"
                      src={infoIcon}
                      alt="FAQ icon"
                    />
                    May I request a refund?
                  </h3>
                  <p className="text-black ">
                    Once you have purchased either the design, code, or both
                    packages, you will have access to all of the future updates
                    based on the roadmap, free of charge.
                  </p>
                </div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-[#1c185e]">
                    <img
                      className="flex-shrink-0 mr-2 w-5 h-5 text-black"
                      src={infoIcon}
                      alt="FAQ icon"
                    />
                    Can I bring kids?
                  </h3>
                  <p className="text-black ">
                    We're aware of the importance of well qualified support,
                    that is why we decided that support will only be provided by
                    the authors that actually worked on this project.
                  </p>
                </div>
                <div className="">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-[#1c185e]">
                    <img
                      className="flex-shrink-0 mr-2 w-5 h-5 text-black"
                      src={infoIcon}
                      alt="FAQ icon"
                    />
                    What do you do with my email address?
                  </h3>
                  <p className="text-black ">
                    All information about our club is available on our website.
                    From time-to-time, we will send out notices via email, as a
                    courtesy, to remind you of upcoming events. It is your
                    responsibility to keep us informed of any changes to your
                    email address.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-24" id="Contact">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#1c185e]">
              Contact Us
            </h2>
            <div className="flex flex-col border-t border-gray-900 mt-8 lg:flex-row">
              <form
                action="#"
                className="space-y-8 lg:mb-8 w-full lg:w-[70%] mr-0 lg:mr-10 "
              >
                <div className="md:flex items-center mt-12">
                  <div className="w-full md:w-[50%] flex flex-col">
                    <label className="text-base font-semibold leading-none text-[#1c185e]">
                      First Name
                    </label>
                    <input
                      tabIndex={0}
                      arial-label="Please input name"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-200 border rounded border-gray-200 placeholder-gray-100"
                    />
                  </div>
                  <div className="w-full md:w-[50%] flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-none  text-[#1c185e]">
                      Last Name
                    </label>
                    <input
                      tabIndex={0}
                      arial-label="Please input email address"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-200 border rounded border-gray-200 placeholder-gray-100"
                    />
                  </div>
                </div>
                <div className="md:flex items-center mt-8">
                  <div className="md:w-[50%] flex flex-col">
                    <label className="text-base font-semibold leading-none  text-[#1c185e]">
                      Email Address
                    </label>
                    <input
                      tabIndex={0}
                      role="input"
                      arial-label="Please input company name"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-200 border rounded border-gray-200 placeholder-gray-100 "
                    />
                  </div>
                  <div className="md:w-[50%] flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-none  text-[#1c185e]">
                      Phone
                    </label>
                    <input
                      tabIndex={0}
                      arial-label="Please input country name"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-200 border rounded border-gray-200 placeholder-gray-100"
                    />
                  </div>
                </div>

                <div>
                  <div className="w-full flex flex-col mt-8">
                    <label className="text-base font-semibold leading-none  text-[#1c185e]">
                      Message
                    </label>
                    <textarea
                      tabIndex={0}
                      aria-label="leave a message"
                      role="textbox"
                      className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-200 border rounded border-gray-200 placeholder-gray-100 resize-none"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center border border-[#1c185e] text-[#1c185e] rounded-lg bg-primary-700 sm:w-fit hover:bg-[#1c185e] hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300"
                >
                  Send message
                </button>
              </form>
              <div className="mt-12 flex flex-col space-y-5 lg:space-y-10">
                <div className="text-base font-semibold leading-none  text-[#1c185e]">
                  Contact Info
                </div>
                <p>
                  <strong className=" text-[#1c185e]">Email:</strong>{" "}
                  erindale.badminton@gmail.com
                </p>
                <div>
                  <p>
                    <strong className=" text-[#1c185e]">
                      Monday Location:{" "}
                    </strong>
                    8-10pm
                  </p>
                  <p>Erindale Secondary School</p>
                  <p>2021 Dundas St W,Mississauga, ON L5K 1R2</p>
                </div>
                <div>
                  <p>
                    <strong className=" text-[#1c185e]">
                      Wednesday Location:{" "}
                    </strong>
                    8:15-10pm
                  </p>
                  <p>Loyola Catholic Secondary School</p>
                  <p>4010 Sladeview Cres, Mississauga, ON L5L 6B1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact