import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// const CA = dynamic(() => import("../../public/images/canada.webp"));
// const IN = dynamic(() => import("../../public/images/india-flag.webp")) ;

export default function AboutUsContent() {


  return (
    <div className="w-11/12 px-2  2xl:w-[70%] xl:w-[80%]   font-primary gap-8 sm:gap-14 lg:w-10/12  flex items-start  justify-center flex-col bg-white text-black">
      <div className="w-full flex items-end gap-3 sm:gap-14 justify-center flex-col md:flex-row">
        <div className="flex flex-col items-start justify-center w-full md:w-7/12">
          <h2 className="sm:text-[32px]  text-[20px] mb-6 font-semibold text-black">
            When providing livelihood is noble, why shouldn’t it be fun?
          </h2>
          <p className="text-[16px] sm:text-[20px] tracking-[0.5px] font-primary">
            <Image
              src="/quotesright.jpeg"
              alt="quotes"
              width={50}
              height={50}
              className="inline-block w-[50px] mr-4 rotate-180"
            />{" "}
            Today’s hiring process is more transaction led, energy draining, and
            stressful. Seeking help from experts can also be quite demanding. We
            understand the importance of bringing structure, and efficiency for
            recruiting professionals, while maintaining the highest standards of
            democracy, equal opportunities, and meritocracy. Despite innovation
            in technology, we believe that{" "}
            <i>talent acquisition would always have a human element</i>. Yet,
            recruiters must leverage technological advancements to augment their
            work and <i>focus on real conversations</i>.
          </p>
          <p className="text-[16px] sm:text-[20px] tracking-[0.5px] font-primary">
            We are driven by the belief that enabling someone to find a great
            job, must be an easy, fun, and most importantly, a gratifying
            experience.
          </p>

          <div className="text-[18px] border-b pb-4 border-gray-500 sm:text-[20px] tracking-[0.5px]  text-[#00a63f] w-full text-left ">
            Join our mission in{" "}
            <b className="ml-1"> creating a pleasant hiring </b> 😊{" "}
            <b>experience!</b>
            <Image
              src="/quotesright.jpeg"
              alt="quotes"
              className="inline-block w-[50px] ml-5"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="w-full md:w-5/12 ">
          <Image
            src="/aboutus.gif"
            alt={"aboutus"}
            width={360}
            height={400}
            loading="lazy"
            className="border  border-white inline-block object-contain"
          
          />
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/2CEDp_Bd3vw?controls=0&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
      </div>

      <div className="w-full  flex items-start gap-3 sm:gap-14 justify-center flex-col md:flex-row">
        <div className="flex flex-col items-start justify-center gap-6 w-full md:w-7/12">
          <h2 className="sm:text-[32px]  text-[20px] mb-4 w-full text-left font-semibold text-black">
            About <span className="text-[#00a63f]">us</span>
          </h2>
          <p className="text-[16px] sm:text-[20px] tracking-[0.5px] font-primary">
            hiringplug™  is a curated Marketplace of Recruiters’ that enables
            Employers to acquire top talent, faster. The platform’s unique RaaS
            – Recruitment as a Service marketplace of professional recruiters
            allows them to seamlessly <b>discover</b> and <b>engage</b> with
            employers to <b>acquire</b> quality talent. hiringplug™  comes with
            many integrated tools such as Intelligent matching of jobs to the
            right recruitment partners, Resume Parsing, Applicant Tracking
            system (ATS), Interview scheduler, Vendor Management System (VMS),
            AI based Ratings, communication modules, and more to provide the
            much-required boost in recruitment efficiency. The platform uses
            Artificial intelligence and Machine Learning to calibrate better
            matching suppliers and candidates to help employers 
            <span className="text-[#00a63f]">#hire5Xfaster</span>
          </p>
          <p className="text-[16px] sm:text-[20px] tracking-[0.5px] font-primary">
            <span className="text-[#00a63f]">hiringplug™</span> is an
            award-winning platform that soon became the “Go to partner” for
            scores of large enterprises and startups to fill positions across
            functions. Most importantly, hiringplug™ takes great pride in its
            community of specialist recruitment partners who collaborate in
            being agile in our recruitment delivery system.
          </p>
          <p className="text-[16px] border-b pb-4 border-gray-500 w-full mb-10 sm:text-[20px] tracking-[0.5px] font-primary">
            We encourage entrepreneurship in Talent Acquisition by empowering
            boutique recruitment firms, Executive search consultants,
            independent recruiters, and Gig recruiters to effortlessly work on
            qualified job mandates in their area of expertise to expand their
            business. An ideal platform for Niche hiring, head-hunting, bulk
            hiring, turnkey mandates, Diversity hiring and works across all
            sectors.
          </p>
        </div>
        <div className="w-full md:w-5/12 md:py-[100px] about-container">
          <video autoPlay loop muted>
            <source
              src={`${process.env.NEXT_PUBLIC_S3_URL}/hpHRAIaward2019.mp4`}
              type="video/mp4;"
            />
          </video>
        </div>
      </div>

      <div className="w-full border-b pb-10 border-gray-500 flex items-start gap-3 sm:gap-14 justify-center flex-col">
        <h2 className="sm:text-[32px]  text-[20px] mb-4 w-full text-center font-semibold text-black">
          The Founding <span className="text-[#00a63f]">team</span>
        </h2>
        <div className="w-full grid grid-cols-1">
          <div className="w-full relative flex items-center justify-center flex-col place-items-start">
            <Link
              href="https://www.linkedin.com/in/vikramjitsahaye/"
              target="_blank"
              className="relative w-[250px] h-[250px] group"
            
            >
              <Image   width={250}
              height={250} src="/vss.webp" alt="vsslinkedin" className="w-[250px] object-cover group-hover:scale-1" />
              <div className="w-[40px] right-[20px] top-[200px] h-[40px] bg-blue-800 flex items-center justify-center rounded-full absolute text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </Link>

            <p className="font-bold text-[25px] mt-4">Vikramjit Singh Sahaye</p>
            <p className=" text-[20px]">Founder & CEO</p>
            <p className="text-[16px] sm:text-[20px] py-6 text-center">
              Vikramjit is a serial entrepreneur & evangelist of HR Technology.
              He has over 25 years’ experience of leading businesses & Product
              development across diverse sectors: Media, Telecom, FMCG, BFSI &
              SaaS. This includes 10+ years in SaaS based HR Tech startups in
              recruitment, employee engagement, R&R and gamification.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex border-b border-gray-500 pb-10 items-start gap-3  justify-center flex-col">
      <h2 className="sm:text-[32px] pb-6  text-[20px] font-semibold my-4 w-full text-center  text-black">
          Our <span className="text-[#00a63f]">presence</span>
        </h2>
        <div className="w-full flex group items-start gap-3  justify-center flex-col">
        <p className="text-[26px]  font-semibold w-full text-center sm:text-[20px] tracking-[0.5px] font-primary">
          INDIA{" "}
          <Image
            src={`/images/india-flag.webp`}
            alt={`indiaflag`}
            width={25}
            className="border w-[25px] border-white inline-block object-contain"
             height={16}
          />
        </p>
        <Link href="https://in.hiringplug.com/" target="_blank" className="text-[16px] group-hover:underline cursor-pointer text-[#00a63f] w-full text-center sm:text-[20px]  font-primary">
          TalenTECH Solutions Private Limited
        </Link>

        <p className="text-[16px] w-full text-center sm:text-[20px] font-primary">
          L-3, Ashirwad complex, Block D-3, Green Park Main, New Delhi 110 016,
          India
        </p>
     
          </div>

          <div className="w-full flex group items-start gap-3  justify-center flex-col">
          <p className="text-[26px] font-semibold w-full mt-4 text-center sm:text-[20px] tracking-[0.5px] font-primary">
          CANADA{" "}
          <Image
            src={`/images/canada.webp`}
            alt={`canada`}
            width={25}
            className="border w-[25px] border-white inline-block object-contain"
            height={16}
          />
        </p>
        <Link href="https://ca.hiringplug.com/" target="_blank" className="text-[16px] group-hover:underline cursor-pointer text-[#00a63f] w-full text-center sm:text-[20px] tracking-[0.5px] font-primary">
          hiringplug Technologies Inc.
        </Link>

        <p className="text-[16px] w-full text-center sm:text-[20px]  font-primary">
          8920 Woodbine Avenue, Suite 304, Markham, Ontario, L3R 9W9, Canada
        </p>
          </div>
     
      
       
      </div>
    </div>
  );
}
