
const Pricing = () => {
  return (
    <div className="bg-[#1c185e] flex justify-center w-full py-16 lg:py-10" id="Pricing">
      <section className="w-[90%] px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-20 lg:px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-yellow-300">Join Us!</h2>

        <div className="w-full flex flex-col lg:flex-row space-x-0 lg:space-x-20 justify-center items-center lg:items-stretch py-10">
          <div className="mb-6 w-[100%] lg:mb-0 max-w-[400px] lg:w-[30%]">
            <div className="block rounded-lg shadow-lg bg-gray-100 h-full">
              <div className="p-6 border-b border-gray-300 text-center">
                <p className="uppercase mb-4 text-sm">
                  <strong>Half Season</strong>
                </p>
                <h3 className="text-2xl mb-6">
                  <strong>$ 75</strong>
                  <small className="text-gray-500 text-sm">/year</small>
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
                    </svg>Either: September - December OR December - May 
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
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-6 w-[100%] lg:mb-0 max-w-[400px] lg:w-[30%] ">
            <div className="block rounded-lg shadow-lg bg-gray-100 h-full">
              <div className="p-6 border-b border-gray-300 text-center">
                <p className="uppercase mb-4 text-sm">
                  <strong>Full Season</strong>
                </p>
                <h3 className="text-2xl mb-6">
                  <strong>$ 120</strong>
                  <small className="text-gray-500 text-sm">/year</small>
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
                    </svg>Able to join Halloween, and Christmas party 
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-6 w-[100%] lg:mb-0 max-w-[400px] lg:w-[30%]">
            <div className="block rounded-lg shadow-lg bg-gray-100 h-full">
              <div className="p-6 border-b border-gray-300 text-center">
                <p className="uppercase mb-4 text-sm">
                  <strong>Guest</strong>
                </p>
                <h3 className="text-2xl mb-6">
                  <strong>$ 5</strong>
                  <small className="text-gray-500 text-sm">/drop-in</small>
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
        </div>
      </section>
    </div>
  )
}

export default Pricing