import React from "react";

export default function ABanner() {
  return (
    <div className="bg-no-repeat font-primary bg-right-top bg-cover relative flex  justify-center w-full gap-2 items-start flex-col bg-agency h-[90vh] md:h-[60vh]">
      <h2 className="md:ml-[20%] lg:ml-[15%] ml-5 text-[25px] sm:text-[35px] text-gray-500 font-semibold">
        EXPAND YOUR BUSINESS
      </h2>
      <a
        href="https://my.hiringplug.com/agency-signup"
        target="_blank"
        rel="noreferrer"
        className="relative md:ml-[20%] lg:ml-[15%] ml-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-orange-600 transition duration-300 ease-out border-2 border-orange-500 rounded-[5px] shadow-md group"
      >
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span class="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">
          SIGN UP
        </span>
        <span class="relative invisible">SIGN UP </span>
      </a>
    </div>
  );
}
