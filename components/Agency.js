"use client"
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import AgencyLayoutPopup from "./popups/AgencyLayoutPopup";

export default function Agency() {
  const [open , setOpen] = useState({state : false , link : ""})
 
  const openPopup = (link) => {
    setOpen({state : true , link : link})
  }

  return (
    <div id="agencies" className="w-full bg-white text-black font-primary border-y-[4px] border-[#00a63f] flex items-center justify-center  flex-col py-20">
      <p className="w-full text-center text-black mb-20 mt-5 text-[30px] sm:text-[30px] font-medium">
        Why <span className="text-green-600">Agencies</span> love us
      </p>
      <div className="w-[95%] xl:w-9/12  gap-2 sm:gap-8 lg:w-10/12 flex items-center justify-start">
        <div onClick={() => openPopup('https://www.youtube.com/embed/cFcJdSu0J3k?autoplay=1')} className="md:w-3/12 w-full cursor-pointer flex items-center justify-center">
          <div className="w-[300px]  relative boxShadow py-10 h-[400px] border border-gray-100 flex items-center flex-col md:justify-start justify-center rounded-[10px]  gap-4 px-6 min-h-[400px] bg-white ">
            <Image
              width={200}
              height={70}
              src={`/agencywoman.webp`}
              alt="agencywoman"
              className="w-[200px]"
              
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-[75px]  transition-all duration-500 text-red-600 absolute right-[16px] top-[180px]"
            />
            <p className="w-full py-8 text-center">Doubling revenues for Agency partners</p>
          </div>
        </div>
        <AgencyLayoutPopup open={open} setOpen={setOpen} />

        <div className="w-9/12 hidden md:flex items-center justify-center gap-10 flex-col">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <div className="w-8/12 flex items-start justify-center flex-col">
                <p className="text-[27px] text-gray-600 font-semibold">
                  Agency seamlessly engage with multiple employers
                </p>
                <p className="text-[15px] text-gray-500">
                  Build your databank and propose candidate easily using resume
                  parsing & other productivity features
                </p>
                <ul className="text-[15px] marker:text-orange-500 list-disc	 list-inside">
                  <li>Easy to engage & communicate with Employers</li>
                  <li>Multi user environment with Real time insights</li>
                  <li>Transparent commercials & candidate status</li>
                  <li>Continuous flow of job mandates</li>
                </ul>
              </div>
              <div className="w-4/12 flex gap-4 mr-12 items-center justify-start flex-col">
                <div onClick={() => openPopup('https://www.youtube.com/embed/vyf30CZOnwA?autoplay=1')} className="w-[150px] border-4 border-[#00a63f] group h-[150px]  rounded-full cursor-pointer flex-col flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-[60px] group-hover:text-[75px] transition-all duration-300   text-[#00a63f] ml-2 "
                  />
                </div>
                <p className="text-[#00a63f] text-[20px]">How it Works</p>
              </div>
            </div>
          
          </div>
          <div className="w-full flex items-center justify-center">
              <div className="w-full md:w-3/12 flex items-start justify-center  flex-col">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/images/client.webp`}
                  alt="client1"
                  className="w-[90px]"
                  width={90}
                  height={90}
                />
                <p className="text-[#00a63f] text-[18px] text-center">
                  New clients,<br></br> more business!
                </p>
              </div>
              <div className="w-full md:w-3/12 flex items-start justify-center  flex-col">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/images/organise.webp`}
                  alt="organise"
                  className="w-[90px]"
                  width={90}
                  height={90}
                />
                <p className="text-[#00a63f] text-[18px] text-center">
                 Increased <br></br> productivity
                </p>
              </div>
              <div className="w-full md:w-3/12 flex items-start justify-center  flex-col">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/images/hassle-free.webp`}
                  alt="hassle-free"
                  className="w-[90px]"
                  width={90}
                  height={90}
                />
                <p className="text-[#00a63f] text-[18px] text-center">
                  Hassle-free <br></br> payments
                </p>
              </div>
              <div className="w-full md:w-3/12 flex items-start justify-center  flex-col">
                <Image
                  src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Intelligence.webp`}
                  alt="Intelligence"
                  className="w-[90px]"
                  width={90}
                  height={90}
                />
                <p className="text-[#00a63f] text-[18px] text-center">
                  Leverage AI & <br></br> get ahead
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
