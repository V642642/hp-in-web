import React from 'react'
import Image from 'next/image';


export default function AProductBanner() {


  return (
    <div className="w-full flex items-start border-t-4 border-green-500 justify-center py-10  bg-white text-black flex-col md:flex-row md:gap-10 gap-2  p-2">
    <div className=" inline-flex w-full md:w-6/12">
      <Image
        src={`${process.env.NEXT_PUBLIC_S3_URL}/images/AgencyScreenshot.webp`}
        alt="agency"
        width={600}
        height={600}
        className="object-contain  w-full md:min-h-[500px]"
      />
    </div>

    <div className="md:w-5/12  font-primary mt-10 w-full inline-block items-center justify-center flex-col">
    <h2 className="text-[40px] font-semibold text-gray-500 leading-[1.2]">Agencies seamlessly engage with multiple employers</h2>
            <p className="text-gray-500 my-4">
            Build your databank and propose candidates easily using resume parsing & other productivity features
            </p>
            <ul className="list-disc list-inside marker:text-green-500">
              <li>Easy to engage & communicate with Employers</li>
              <li>Multi user environment with Real time insights</li>
              <li>Transparent commercials & candidate status</li>
              <li>Continuous flow of job mandates</li>
            </ul>
    </div>
  </div>
  )
}
