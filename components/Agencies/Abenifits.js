import React from "react";
import Image from "next/image";

export default function Abenifits() {
  return (
    <div className="w-full border-t-4 border-green-600 bg-white text-black  gap-8 font-primary flex flex-col items-center justify-center pt-24 pb-32">
      <h1 className="text-[35px] text-center text-orange-500">
        <b className="text-gray-700 ">Recruitment Agencies </b> Benefits
      </h1>
      <div className="w-full lg:w-8/12 md:w-11/12  flex items-center justify-center gap-6 flex-col md:flex-row px-2">
        <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/client.webp`}
            alt="client1"
            className="w-[90px]"
            width={90}
            height={90}
          />
          <p className="text-orange-500 text-[18px] text-center">
            Boost productivity
          </p>
          <p className="text-center text-[14px]">
            Gain complete visibility on the performance of agencies to make
            data-driven decisions.
          </p>
        </div>
        <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/organise.webp`}
            alt="organise12"
            className="w-[90px]"
            width={90}
            height={90}
          />
          <p className="text-orange-500 text-[18px] text-center">
            It`&apos;`s free to join
          </p>
          <p className="text-center text-[14px]">
            Ubiquitous access on the cloud and regular updates using our
            integrated ATS.
          </p>
        </div>
        <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/hassle-free.webp`}
            alt="hassle-free-01"
            className="w-[90px]"
            width={90}
            height={90}
          />
          <p className="text-orange-500 text-[18px] text-center">
            Single Window
          </p>
          <p className="text-center text-[14px]">
            Ubiquitous access on the cloud and regular updates using our
            integrated ATS.
          </p>
        </div>
        <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Intelligence.webp`}
            alt="Intelligence122"
            className="w-[90px]"
            width={90}
            height={90}
          />
          <p className="text-orange-500 text-[18px] text-center">
            Replacement guarantee
          </p>
          <p className="text-center text-[14px]">
            Ubiquitous access on the cloud and regular updates using our
            integrated ATS.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-8/12 md:w-11/12 flex items-center justify-center flex-col md:flex-row gap-6 px-2">
        <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/single-window.webp`}
            alt="single-window-121"
            className="w-[90px]"
            width={90}
            height={90}
          />
          <p className="text-orange-500 text-[18px] text-center">Cloud based</p>
          <p className="text-center text-[14px]">
            Intelligent online recruitment platform with Machine learning
            capabilities that calibrates for a better hire every time.
          </p>
        </div>
        <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/organise.webp`}
            alt="organise1212"
            className="w-[90px]"
            width={90}
            height={90}
          />
          <p className="text-orange-500 text-[18px] text-center">
            Applicant Tracking System
          </p>
          <p className="text-center text-[14px]">
            Engage instantly and cut down on your administrative efforts of
            vendor onboarding.
          </p>
        </div>
        <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/simplified.webp`}
            alt="simplified1212"
            className="w-[90px]"
            width={90}
            height={90}
          />
          <p className="text-orange-500 text-[18px] text-center">
            Vendor Management System
          </p>
          <p className="text-center text-[14px]">
            With up to 90 days of replacement guarantee against any early
            attrition, your risks are covered.
          </p>
        </div>
        <div className="w-full md:w-3/12 flex items-center justify-center  flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/cloud.webp`}
            alt="cloud212"
            className="w-[90px]"
            width={90}
            height={90}
          />
          <p className="text-orange-500 text-[18px] text-center">
            Artificial Intelligence
          </p>
          <p className="text-center text-[14px]">
            With up to 90 days of replacement guarantee against any early
            attrition, your risks are covered.
          </p>
        </div>
      </div>
    </div>
  );
}
