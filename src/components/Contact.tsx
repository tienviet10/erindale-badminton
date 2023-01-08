import { useState } from "react";
import infoIcon from "../assets/info.png";

const Contact = () => {
  const initContactInfo = {
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    message: "",
  };
  const [contactInfo, setContactInfo] = useState(initContactInfo);
  const [submitButtonText, setSubmitButtonText] = useState("Send Message");

  const changeContactInfo = (e) => {
    setContactInfo((info) => ({
      ...info,
      [e.target.name]: e.target.value,
    }));
  };

  const submitContactInfo = async (e) => {
    if (
      contactInfo.firstName !== "" &&
      contactInfo.lastName !== "" &&
      contactInfo.email !== "" &&
      contactInfo.message !== ""
    ) {
      e.preventDefault();
      setSubmitButtonText("Sending");
      try {
        await fetch("", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            "first-name": contactInfo.firstName,
            "last-name": contactInfo.lastName,
            "email-address": contactInfo.email,
            telephone: contactInfo.tel,
            message: contactInfo.message,
          }),
        });
        setContactInfo(initContactInfo);
        setSubmitButtonText("Send Message");
      } catch (error) {
        setSubmitButtonText("Send Message");
        throw new Error(`Something went wrong: ${error.message || error}`);
      }
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center w-full" id="FAQ">
      <section className="w-[90%] md:w-[75%] lg:w-[60%] px-4 py-20 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-0">
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
                    <li>Birds (we play with Mavis 300 plastic birds)</li>
                    <li>
                      4 treat nights, in house tournament, and year end party.
                    </li>
                  </ul>
                </div>
                <div className="mb-10">
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
                </div>
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
                <div className="">
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
              </div>
            </div>
          </div>

          <div className="pt-24" id="Contact">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-application-color">
              Contact Us
            </h2>
            <div className="flex flex-col border-t border-gray-900 mt-8 lg:flex-row">
              <form
                // action=""
                className="space-y-8 lg:mb-8 w-full lg:w-[70%] mr-0 lg:mr-10 "
                method="POST"
              >
                <div className="md:flex items-center mt-12">
                  <div className="w-full md:w-[50%] flex flex-col">
                    <label
                      htmlFor="firstName"
                      className="text-base font-semibold leading-none text-application-color"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      autoComplete="off"
                      tabIndex={0}
                      arial-label="Please input name"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-200 border rounded border-gray-200 placeholder-gray-100"
                      onChange={(e) => changeContactInfo(e)}
                      value={contactInfo.firstName}
                      required
                    />
                  </div>
                  <div className="w-full md:w-[50%] flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label
                      htmlFor="lastName"
                      className="text-base font-semibold leading-none  text-application-color"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      autoComplete="off"
                      tabIndex={0}
                      arial-label="Please input email address"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-200 border rounded border-gray-200 placeholder-gray-100"
                      onChange={(e) => changeContactInfo(e)}
                      value={contactInfo.lastName}
                      required
                    />
                  </div>
                </div>
                <div className="md:flex items-center mt-8">
                  <div className="md:w-[50%] flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-base font-semibold leading-none  text-application-color"
                    >
                      Email Address
                    </label>
                    <input
                      tabIndex={0}
                      autoComplete="off"
                      id="email"
                      name="email"
                      arial-label="Please input company name"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-200 border rounded border-gray-200 placeholder-gray-100"
                      onChange={(e) => changeContactInfo(e)}
                      value={contactInfo.email}
                      required
                    />
                  </div>
                  <div className="md:w-[50%] flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label
                      htmlFor="tel"
                      className="text-base font-semibold leading-none  text-application-color"
                    >
                      Phone
                    </label>
                    <input
                      id="tel"
                      name="tel"
                      autoComplete="off"
                      tabIndex={0}
                      arial-label="Please input country name"
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-200 border rounded border-gray-200 placeholder-gray-100"
                      onChange={(e) => changeContactInfo(e)}
                      value={contactInfo.tel}
                    />
                  </div>
                </div>

                <div>
                  <div className="w-full flex flex-col mt-8">
                    <label
                      htmlFor="message"
                      className="text-base font-semibold leading-none  text-application-color"
                    >
                      Message
                    </label>
                    <textarea
                      autoComplete="off"
                      tabIndex={0}
                      aria-label="leave a message"
                      id="message"
                      name="message"
                      className="h-36 md:h-60 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-200 border rounded border-gray-200 placeholder-gray-100 resize-none"
                      onChange={(e) => changeContactInfo(e)}
                      value={contactInfo.message}
                      required
                    />
                  </div>
                </div>
                <button
                  disabled={submitButtonText === "Sending"}
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center border border-application-color text-application-color rounded-lg bg-primary-700 sm:w-fit hover:bg-application-color hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300"
                  onClick={(e) => submitContactInfo(e)}
                >
                  {submitButtonText}
                </button>
              </form>
              <div className="mt-12 flex flex-col space-y-5 lg:space-y-6">
                <div className="text-2xl font-semibold leading-none  text-application-color">
                  Additional Info
                </div>
                <p className="text-lg">
                  <strong className=" text-application-color">Email:</strong>{" "}
                  <a className="underline" href="mailto:erindale.badminton@gmail.com?subject=Questions">erindale.badminton@gmail.com</a>
                </p>
                <div className="text-lg">
                  <p>
                    <strong className=" text-application-color">
                      Facebook:{" "}
                    </strong>
                    <a className="underline" href="https://www.facebook.com/profile.php?id=100088558296408">Club Facebook</a>
                  </p>
                </div>
                <div className="text-lg">
                  <p>
                    <strong className=" text-application-color">
                      Instagram:{" "}
                    </strong>
                    <a className="underline" href="https://www.instagram.com/erindale_badminton_club/?next=%2F">Club Instagram</a>
                  </p>

                </div>
                <div className="text-lg">
                  <p>
                    <strong className=" text-application-color">
                      Monday Location:{" "}
                    </strong>
                    8-10pm
                  </p>
                  <p>Erindale Secondary School</p>
                  <p>2021 Dundas St W, Mississauga, ON L5K 1R2</p>
                </div>
                <div className="text-lg">
                  <p>
                    <strong className=" text-application-color">
                      Wednesday Location:{" "}
                    </strong>
                    8:15-10pm
                  </p>
                  <p>Loyola Catholic Secondary School</p>
                  <p>4010 Sladeview Cres, Mississauga, ON L5L 6B1</p>
                </div>
                <div className="text-lg">
                  <p>
                    <strong className=" text-application-color">
                      Friday Location:{" "}
                    </strong>
                    6-8pm
                  </p>
                  <p>Clarkson Secondary School</p>
                  <p>2524 Bromsgrove Rd, Mississauga, ON L5J 1L8</p>
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