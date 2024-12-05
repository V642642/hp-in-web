import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CaseStudies() {
  return (
    <div className="w-full py-20 flex items-center justify-center flex-col gap-20 bg-white text-black    ">
      <h2 className="text-[32px] text-gray-600 font-primary font-bold">
        Case Studies
      </h2>
      <div className="w-full flex  items-center justify-center flex-col md:flex-row gap-10">
        <Link
          target="_blank"
          href={"/case-study-startups-hiring.pdf"}
          className="w-11/12 md:w-[350px] font-primary flex items-start justify-center gap-3  flex-col"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/case-study-1.webp`}
            alt={"case-studies-hp"}
            className="h-[270px]"
            width={350}
            height={270}
          />
          <h2 className="text-[25px] text-black">EdTech startup hiring</h2>
          <p className="text-[14px] text-black">
            A new EdTech startup having to quickly scale operations during
            Covid-19 lockdown...
          </p>
          <p className="text-green-500 cursor-pointer hover:text-black">
            Read More
          </p>
        </Link>
        <Link
          target="_blank"
          href={"/case-study-large-enterprises.pdf"}
          className="w-11/12 md:w-[350px] font-primary flex items-start justify-center gap-3  flex-col"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/case-study-2.webp`}
            alt={"case-studies-hp1"}
            className="h-[270px]"
            width={350}
            height={270}
          />
          <h2 className="text-[25px] text-black">Global Enterprise hiring</h2>
          <p className="text-[14px] text-black">
            A Large global conglomerate with hiring requirements across sectors
            and functions...
          </p>
          <p className="text-green-500 cursor-pointer hover:text-black">
            Read More
          </p>
        </Link>
        <Link
          target="_blank"
          href={"/case-study-startups-hiring.pdf"}
          className="w-11/12 md:w-[350px] font-primary flex items-start justify-center gap-3  flex-col"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/isight_header.jpeg`}
            alt={"case-studies-hp-2"}
            className="h-[270px]"
            width={350}
            height={270}
          />
          <h2 className="text-[25px] text-black">Future of jobs</h2>
          <p className="text-[14px] text-black">
            Future of jobs. Explore the journey of jobs in 2021.
          </p>
          <p className="text-green-500 cursor-pointer hover:text-black">
            Read More
          </p>
        </Link>
      </div>
    </div>
  );
}
