import { useState } from "react";

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
        await fetch("https://getform.io/f/05849952-fe73-4860-994d-9dcb33ee3da0", {
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
    <div className="bg-gray-100 flex justify-center w-full" id="Contact">
      <section className="w-[90%] md:w-[75%] lg:w-[60%] px-4 py-24 mx-auto space-y-12 lg:space-y-20 lg:py-26 lg:px-0">
        <div className="flex flex-col">
 

          <div id="Contact">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-application-color">
              Contact Us
            </h2>
            <div className="flex flex-col border-t border-gray-900 mt-8 lg:flex-row">
              <form
                //action=""
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