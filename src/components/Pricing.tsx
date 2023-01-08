
const Pricing = () => {
  return (
    <div className="bg-application-color flex justify-center w-full py-16 lg:py-10" id="Pricing">
      <section className="w-[90%] px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-20 lg:px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-text-application-color">Join Us!</h2>

        <div className="w-full flex flex-col lg:flex-row space-x-0 lg:space-x-20 justify-center items-center lg:items-stretch py-10">
          <div className="mb-6 w-[100%] lg:mb-0 max-w-[400px] lg:w-[30%] text-lg">
              <div className="block rounded-lg shadow-lg bg-gray-100 h-full">
                <div className="p-6 border-b border-gray-300 text-center">
                  <p className="uppercase mb-4 text-xl">
                    <strong>Guest</strong>
                  </p>
                  <h3 className="text-2xl mb-6">
                    <strong>$ 5</strong>
                    <small className="text-gray-900 text-md">/drop-in</small>
                  </h3>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex items-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                        </path>
                      </svg>Play a 2-hour session
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                        </path>
                      </svg>Only available on Wednesday or Friday
                    </li>
                    <li className="mb-4 flex items-center">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                        </path>
                      </svg>Limit capacity of total of 10 guests/session
                    </li>
        
                  </ol>
                </div>
              </div>
          </div>

          <div className="mb-6 w-[100%] lg:mb-0 max-w-[400px] lg:w-[30%] text-lg">
            <div className="block rounded-lg shadow-lg bg-gray-100 h-full">
              <div className="p-6 border-b border-gray-300 text-center">
                <p className="uppercase mb-4 text-xl">
                  <strong>Half Season</strong>
                </p>
                <h3 className="text-2xl mb-6">
                  <strong>$ 75</strong>
                  <small className="text-gray-900 text-md">/year</small>
                </h3>

                {/* <button type="button"
                  className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                  style={{backgroundColor: "hsl(0, 0%, 95%)"}} data-mdb-ripple="true"
                  data-ripple-color="primary">
                  Buy
                </button> */}
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Period: Jan - May 
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Play any 2-hour session
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Available on Monday, Wednesday, and Friday
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Able to join 2 treat nights, in house tournament, and year end party 
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-6 w-[100%] lg:mb-0 max-w-[400px] lg:w-[30%] text-lg">
            <div className="block rounded-lg shadow-lg bg-gray-100 h-full">
              <div className="p-6 border-b border-gray-300 text-center">
                <p className="uppercase mb-4 text-xl">
                  <strong>Full Season</strong>
                </p>
                <h3 className="text-2xl mb-6">
                  <strong>$ 120</strong>
                  <small className="text-gray-900 text-md">/year</small>
                </h3>
                {/* <button type="button"
                  className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true" data-ripple-color="light">
                  Buy
                </button> */}
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Full Season: September - May
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Play any 2-hour session
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Available on Monday, Wednesday, and Friday
                  </li>
                  <li className="mb-4 flex items-center">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                      className="text-green-600 w-4 h-4 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                      <path fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                      </path>
                    </svg>Able to join 4 treat nights, in house tournament, and year end party 
                  </li>
                </ol>
              </div>
            </div>
          </div>


        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-center text-text-application-color">How to join:</h2>
        <div className="w-full flex flex-row justify-center text-white">
          <div className="max-w-7xl text-xl text-justify py-10 lg:py-0">     
            Our club accepts new members from our waiting list. If you wish to join us, please send us an email to <a className="underline text-text-application-color font-semibold" href="mailto:erindale.badminton@gmail.com?subject=Erindale Badminton Club Registration Request!">erindale.badminton@gmail.com</a>. We will inform you when we have a spot for you. Please refer to the registration form for more information and note that membership is accepted only upon receipt of both payment of fee and registration form. Download and fill in this <a className="underline font-semibold text-text-application-color" href="https://erindalebadminton.com/EBC_Registration_2022_to_2023.pdf" target={"_blank"}>registration form</a> for membership.
          </div>
        </div>

      </section>
    </div>
  )
}

export default Pricing