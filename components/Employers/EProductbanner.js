import Image from "next/image";
import React from "react";

export default function EProductbanner() {

  return (
    <div className="w-full flex items-start justify-center bg-white text-black flex-col md:flex-row gap-2  p-2">
      <div className=" inline-flex w-full md:w-7/12">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Employerscreen.webp`}
          alt="agency"
          width={600}
          height={600}
          className="object-contain  w-full md:min-h-[500px]"
          unoptimized
        />
      </div>

      <div className="md:w-5/12  font-primary mt-10 w-full inline-block items-center justify-center flex-col">
        <h2 className="text-[40px] font-semibold text-gray-500 leading-[1.2]">
          Employers easily track and manage applicants
        </h2>
        <p className="text-gray-500 my-4">
          Integrated tools enable seamless management in accordance to your
          recruitment workflow and enhance recruiter’s efficiency
        </p>
        <ul className="list-disc list-inside marker:text-green-500">
          <li>Marketplace of specialist recruiters</li>
          <li>Customizable Applicant Tracking System (ATS)</li>
          <li>Easy Candidate assessment & sharing interface</li>
          <li>Multi user environment with Real time insights</li>
        </ul>
      </div>
    </div>
  );
}
