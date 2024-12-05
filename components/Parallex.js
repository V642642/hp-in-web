"use client";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import AgencyPopup from "./popups/AgencyPopup";
import EmployerPopup from "./popups/EmployerPopup";

export default function Parallex() {
  const [open, setOpen] = useState({ employer: false, agency: false });

  return (
    <>
      <EmployerPopup open={open} setOpen={setOpen} />
      <AgencyPopup open={open} setOpen={setOpen} />

      <div
        className={` flex bg-fixed bg-no-repeat bg-cover bg-[50%]  w-full gap-2 items-center bg-parallex  justify-center`}
      >
        <div className="w-full md:w-8/12 py-14 flex items-center justify-around gap-5 flex-col md:flex-row">
          <div className="flex items-center justify-center py-10 flex-col gap-6">
            <div
              onClick={() => setOpen({ employer: true, agency: false })}
              className="w-[150px] cursor-pointer h-[150px] flex items-center justify-center rounded-full border-4 border-green-700"
            >
              <FontAwesomeIcon
                icon={faPlay}
                className="text-[60px] text-white"
              />
            </div>
            <p className="text-[25px] font-primary text-white bg-gray-700 bg-opacity-50 font-semibold uppercase py-2 px-6">
              I&apos;M AN EMPLOYER
            </p>
          </div>
          <div className="flex items-center justify-center py-10 flex-col gap-6">
            <div
              onClick={() => setOpen({ employer: false, agency: true })}
              className="w-[150px] cursor-pointer h-[150px] flex items-center justify-center rounded-full border-4 border-green-700"
            >
              <FontAwesomeIcon
                icon={faPlay}
                className="text-[60px] text-white"
              />
            </div>
            <p className="text-[25px] font-primary  text-white bg-gray-700 bg-opacity-50 font-semibold uppercase py-2 px-6">
              I&apos;M AN AGENCY
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-2 flex items-center justify-center py-14 bg-blue-600 flex-col md:flex-row">
        <div className="flex w-full md:w-4/12 text-white items-center justify-center flex-col">
          <p className="text-center font-primary  text-[35px] font-semibold">
            How it Works
          </p>
          <p className="text-center font-primary text-[22px] font-medium">
          Power-up with RaaS™ for faster hiring.
          </p>
          {/* <p className="text-center font-primary text-[20px] font-bold pb-4 ">
            RaaS - Recruitment as a Service Marketplace
          </p> */}
          <p className="text-center text-[16px] font-primary">
          Introducing the RaaS™ - &apos;Recruitment as a Service&apos; Marketplace, an online recruitment platform which enables you to engage with multiple Recruiting agencies to fulfil your job requirements by getting access to a large pool of passive candidates and array of integrated tools resulting in faster hiring.
          </p>
        </div>
        <div className="flex w-full md:w-4/12 relative items-center justify-center flex-col gap-2">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/how-it-works.webp`}
            alt="howItWorks"
            className="md:absolute top-[-155px]"
            width="600"
            height="550"
          />
        </div>
      </div>
    </>
  );
}
