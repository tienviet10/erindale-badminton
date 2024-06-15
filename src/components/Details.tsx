import React from "react";

const Details = ({ setOpenedModal, from }) => {
  return (
    <div
      id="defaultModal"
      className="fixed top-0 left-0 right-0 w-full p-4 md:inset-0 h-modal md:h-full z-200 bg-gray-600 bg-opacity-50"
    >
      <div className="relative mx-auto w-full h-screen max-w-2xl flex flex-col justify-center items-center">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              Erindale Badminton Club
            </h5>
            <button
              className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              onClick={() => setOpenedModal(false)}
            >
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
            {from === "navbar" ? (
              <>
                <p>
                  Cancellations: NO badminton Victoria Day Mon. May 20, NO
                  permit: Wed. June 5. Last day of season play Fri. June 7.
                </p>
                <p>OPEN House until June 7. Wed and Fri.</p>
              </>
            ) : (
              <table className="table-auto border-collapse border-2 border-gray-500 w-full">
                <thead>
                  <tr>
                    <th className="border-2 border-gray-500 px-4 py-2"></th>
                    <th className="border-2 border-gray-500 px-4 py-2">2023</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-500 px-4 py-2">
                      Financial Report
                    </td>
                    <td className="border-2 border-gray-500 px-4 py-2 text-center">
                      <a
                        href="https://firebasestorage.googleapis.com/v0/b/dh-website-practice.appspot.com/o/images%2FFinancial%20Statement%20-%201July2022%20-%20%2030%20June2023-APPROVED.pdf?alt=media"
                        className="text-blue-500"
                      >
                        show
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-500 px-4 py-2">
                      Auditor Report
                    </td>
                    <td className="border-2 border-gray-500 px-4 py-2 text-center">
                      <a
                        href="https://firebasestorage.googleapis.com/v0/b/dh-website-practice.appspot.com/o/images%2FErindale%20Badminton%20Club-Auditors%20Report%202022-23.pdf?alt=media"
                        className="text-blue-500"
                      >
                        show
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-500 px-4 py-2">
                      By Law
                    </td>
                    <td className="border-2 border-gray-500 px-4 py-2 text-center">
                      <a
                        href="https://firebasestorage.googleapis.com/v0/b/dh-website-practice.appspot.com/o/images%2FThe%20By%20Law%20-%20EBC.pdf?alt=media"
                        className="text-blue-500"
                      >
                        show
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-500 px-4 py-2">
                      EBC's AGM
                    </td>
                    <td className="border-2 border-gray-500 px-4 py-2 text-center">
                      <a
                        href="https://firebasestorage.googleapis.com/v0/b/dh-website-practice.appspot.com/o/images%2FEBC's%20AGM%20-%20December%204%202023.pdf?alt=media"
                        className="text-blue-500"
                      >
                        show
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-red-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md"
              data-bs-dismiss="modal"
              onClick={() => setOpenedModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
