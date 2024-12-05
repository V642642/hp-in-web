"use client"
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import Clientspopup from "../popups/Clientspopup";



export default function ENextSteps() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-fixed bg-no-repeat bg-cover bg-[50%] flex-col  border-t-8 border-green-500  w-full gap-2 items-center bg-enextsteps  justify-center">
      <div className="w-full md:w-8/12 py-14 flex items-center justify-around gap-5 flex-col ">
        <div className="flex items-center justify-center py-10 flex-col gap-6">
          <div
            onClick={() => setOpen(true)}
            className="w-[150px] cursor-pointer h-[150px] flex items-center justify-center rounded-full border-4 border-green-700"
          >
            <FontAwesomeIcon icon={faPlay} className="text-[60px] text-white" />
          </div>
          <Clientspopup open={open} setOpen={setOpen} />
          <p className="text-[25px] font-primary text-white font-semibold uppercase py-2 px-6">
            Next <span className="text-green-500">Steps</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 w-full sm:flex-row flex-col">
          <div className="flex items-center justify-center py-10 flex-col gap-6">
            <Image width={150} height={150} src={`${process.env.NEXT_PUBLIC_S3_URL}/images/sign-icon.webp`} alt="signin"  />
            <p className="text-[25px] font-primary  text-white bg-gray-700 bg-opacity-50 font-semibold  py-2 px-6">
              Sign up
            </p>
          </div>

          <div className="flex items-center justify-center py-10 flex-col gap-6">
            <Image width={150} height={150}  src={`${process.env.NEXT_PUBLIC_S3_URL}/images/vacancy.webp`} alt={`vacancy`}  />
            <p className="text-[25px] font-primary  text-white bg-gray-700 bg-opacity-50 font-semibold  py-2 px-6">
              Publish the vacancy
            </p>
          </div>

          <div className="flex items-center justify-center py-10 flex-col gap-6">
            <Image width={150} height={150}  src={`${process.env.NEXT_PUBLIC_S3_URL}/images/propose.webp`} alt={`propose`}  />
            <p className="text-[25px] font-primary  text-white bg-gray-700 bg-opacity-50 font-semibold  py-2 px-6">
              Hire
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
