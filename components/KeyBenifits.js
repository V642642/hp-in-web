import Image from "next/image";
import React from "react";

export default function KeyBenifits() {

  
  return (
    <div className="w-full border-b-4 border-[#00a63f] bg-white text-black gap-8 font-primary flex flex-col items-center justify-center pt-24 pb-32">
      <p className="text-[35px] text-green-600">
        <b className="text-gray-700">Key</b> Benefits
      </p>
      <div className="w-full xl:w-6/12 md:w-10/12 flex items-center justify-center gap-6 flex-col md:flex-row">
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/manage.webp`}
            alt="manage-images"
            className="w-[90px]"
            width={90}
            height={90}
            
          />
          <p className="text-green-600 text-[22px] text-center">
            RaaS<sup>TM</sup> Marketplace
          </p>
          <p className="text-center text-[14px]">
            Gain complete visibility on the performance of agencies to make
            data-driven decisions.
          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/organise.webp`}
            alt="organiseimages"
            className="w-[90px]"
            width={90}
            height={90}
            
          />
          <p className="text-green-600 text-[22px] text-center">Manage</p>
          <p className="text-center text-[14px]">
            Ubiquitous access on the cloud and regular updates using our
            integrated ATS.
          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/track.webp`}
            alt="trackimages"
            className="w-[90px]"
            width={90}
            height={90}
            
          />
          <p className="text-green-600 text-[22px] text-center">Track</p>
          <p className="text-center text-[14px]">
            Ubiquitous access on the cloud and regular updates using our
            integrated ATS.
          </p>
        </div>
      </div>
      <div className="w-full xl:w-6/12 md:w-10/12  flex items-center justify-center flex-col md:flex-row gap-6">
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Intelligence.webp`}
            alt="Intelligenceimages"
            className="w-[90px]"
            width={90}
            height={90}
            
          />
          <p className="text-green-600 text-[22px] text-center">
            Artificial Intelligence
          </p>
          <p className="text-center text-[14px]">
            Intelligent online recruitment platform with Machine learning
            capabilities that calibrates for a better hire every time.
          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/single-window.webp`}
            alt="single-windowimages"
            className="w-[90px]"
            width={90}
            height={90}
            
          />
          <p className="text-green-600 text-[22px] text-center">
            Single window
          </p>
          <p className="text-center text-[14px]">
            Engage instantly and cut down on your administrative efforts of
            vendor onboarding.
          </p>
        </div>
        <div className="w-full md:w-[33%] flex items-center justify-center px-6 flex-col">
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/images/replacement.webp`}
            alt="replacementimages"
            className="w-[90px]"
            width={90}
            height={90}
            
          />
          <p className="text-green-600 text-[22px] text-center">
            Replacement Guarantee
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
