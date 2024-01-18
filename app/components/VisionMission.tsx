import React from "react";

const VisionMission = () => {
  return (
    <div className="bg-green-50 px-2 py-10 mb-0 mt-0">
      <div id="mission-vision" className="mx-auto max-w-6xl">
        <p className="text-center text-green-900 text-xs font-semibold leading-7 text-primary-500">
          WHAT WE BELIEVE IN
        </p>
        <h2 className="text-center font-display text-4xl font-bold tracking-tight text-gray-900 md:text-4xl">
          VISION AND MISSION
        </h2>

        <ul className="flex items-start justify-between gap-8 mt-10 md:flex-row flex-col">
          <li className="w-full lg:w-[50%] px-10 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in relative group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-br-xl rounded-bl-xl  group-hover:text-white transition-all duration-150 ease-in group-hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-900 text-white mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-center font-semibold text-3xl tracking-wider mb-3">
              VISION
            </h2>

            <button className="w-full p-10 bg-transparent text-[#13181f] rounded-md font-semibold hover:bg-green-900 hover:text-white transition-all duration-150 ease-in mb-8 border border-green-800">
              <p className="mt-1.5 text-sm text-start leading-6 text-secondary-500">
                Endeavor to be the best ICT solutions support firm that provides
                our clients quality and affordable services.
              </p>
            </button>
          </li>
          <li className="w-full lg:w-[50%] px-10 pt-16 pb-8 bg-white rounded-lg self-stretch hover:scale-105 hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)] transition-all duration-150 ease-in relative group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-br-xl rounded-bl-xl  group-hover:text-white transition-all duration-150 ease-in group-hover:shadow-[0px_14px_28px_-5px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-900 text-white mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-center font-semibold text-3xl tracking-wider mb-3">
              MISSION
            </h2>

            <button className="w-full p-8 bg-transparent text-[#13181f] rounded-md font-semibold hover:bg-green-900 hover:text-white transition-all duration-150 ease-in mb-8 border border-green-800">
              <p className="mt-1.5 text-sm text-start leading-6 text-secondary-500">
                Striving to bring excellent Information and Communication
                Technology (ICT) solutions to your organization at affordable
                prices.
              </p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VisionMission;
