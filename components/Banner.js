import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
      <div className="w-full relative h-[90vh] ">
      <div className="relative videocontainer  ">
        <video autoPlay loop muted id="myVideo">
          <source
            src={`/hiringplug(1).mp4`}
            type="video/mp4"
          />
          {/* <source src={`${process.env.NEXT_PUBLIC_S3_URL}/../public/hiringplug.webm`} type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>
        <div className='left-0 w-full h-[90vh] bg-opacity-50 bg-[#000000] absolute top-0 '></div>
      </div>

      <div className="absolute flex items-start justify-center flex-col gap-2 font-primary top-[25%] px-2 lg:ml-[10%] 2xl:ml-[15%] md:ml-[20%]">
        <p className="text-[38px] leading-[1px] sm:leading-[58px] sm:text-[55px] text-white font-bold">
          PLUG-IN FOR
        </p>
        <p className="text-[38px] sm:leading-[58px] sm:text-[55px] text-white font-bold">
          FASTER HIRING
        </p>
        <h1 className="text-white  text-[16px]  flex items-start justify-center flex-col">
          <span className="hidden sm:block">
            Engage with a large pool of qualified talent through our{" "}
          </span>
          <span className="hidden sm:block">
            Curated Marketplace of Recruitment Agencies
          </span>
          <span className="sm:hidden">
            Engage with a large pool of qualified talent through our Curated
            Marketplace of Recruitment Agencies
          </span>
          <span></span>
        </h1>

        <Link
          href="/request-a-demo.php"
          className="cursor-pointer text-[16px] rounded px-8 py-4 overflow-hidden group bg-[#00a63f] relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative font-medium">REQUEST A DEMO</span>
        </Link>
        
      </div>
    </div>

  )
}
