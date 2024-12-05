"use client";
import axios from "axios";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";


export default  function Blog() {

  const getBlog = () => {
    let endpoint = `https://dev-in-api.hiringplug.com/manage-web-service/v1/show-latest-blogs`;
    return axios.get(endpoint);
  };

  const { data  } = useQuery(["Blog"], () => getBlog());

  const htmlEntities = [
    { code: "&copy;", character: "©" },
    { code: "&reg;", character: "®" },
    { code: "&trade;", character: "™" },
    { code: "&ndash;", character: "–" },
    { code: "&mdash;", character: "—" },
    { code: "&lsquo;", character: "‘" },
    { code: "&rsquo;", character: "’" },
    { code: "&ldquo;", character: "“" },
    { code: "&rdquo;", character: "”" },
    { code: "&laquo;", character: "«" },
    { code: "&raquo;", character: "»" },
    { code: "&lsaquo;", character: "‹" },
    { code: "&rsaquo;", character: "›" },
    { code: "&hellip;", character: "…" },
    { code: "&amp;", character: "&" },
    { code: "&quot;", character: '"' },
    { code: "&apos;", character: "'" },
  ];

  function createMarkup(html) {
    const replaceEntities = (input) => {
      let output = input;
      htmlEntities.forEach((entity) => {
        const regex = new RegExp(entity.code, "g");
        output = output.replace(regex, entity.character);
      });
      return output;
    };
    return { __html: replaceEntities(html) };
  }

  return (
    <div className="w-full flex items-center bg-white justify-center border-y-4 border-[#00a63f]">
      <div className="w-full xl:w-10/12 px-2 font-primary flex-col flex items-center justify-center gap-2 bg-white py-20">
        <p className="text-[30px] sm:text-[35px] font-semibold text-gray-500">
          Recruiter<span className="font-medium  text-[#00a63f]">Times</span>
        </p>

        <p className="mb-16 text-[12px] sm:text-[16px] text-center text-black">
          Talent Acquisition can be fun with our online recruitment platform!
          <br />
          Visit our <span className="text-[#00a63f]">blog</span> for your Daily
          dose of Tips, Tricks, Insights & Trends in Recruitments!
        </p>
        <div className="w-full gap-6  place-items-center   flex items-start justify-center flex-row flex-wrap">
          {data?.data?.data?.slice(0, 3)?.map((data) => (
            <Link
              href={`https://blog.hiringplug.com/post/${data.BlogID}/${data.Slug}`}
              target="_blank"
              key={data.BlogID}
              className="flex items-start gap-4 justify-center w-[90%] sm:w-[400px]  flex-col"
            >
              <div className="w-full group relative flex items-center justify-center flex-col">
                <Image
                  alt="blog"
                  src={`https://blog.hiringplug.com/uploads/blogimages/bigimages/${data.BigImage}`}
                  width={300}
                  height={70}
                  className="w-full"
                />
                <p
                dangerouslySetInnerHTML={createMarkup(data.Punchline)}
                className="text-[14px] w-full bottom-0 opacity-0 group-hover:opacity-100 transition-all  duration-500 absolute group-hover:bottom-6 
                 text-center text-transparent group-hover:text-white z-[2]"
              />
              <div className="absolute group-hover:bg-black w-full h-[100%]  transition-colors duration-500 group-hover:bg-opacity-50"></div>
              </div>

              <p className="text-blue-500 text-[12px] text-left ">
                <span> {data?.AuthorName}, </span>
                <span>{moment(data.DOC).format("DD MMMM , YYYY")}</span>
              </p>
              <p
                dangerouslySetInnerHTML={createMarkup(data.Name)}
                className="text-[22px]  text-black"
              />
              <p
                dangerouslySetInnerHTML={createMarkup(data.BriefDescription)}
                className="text-[14px] long-and-truncated sm:text-[16px] text-black"
              />

              <p
                className="text-[12px] -mt-2 text-[#00a63f]"
                href={`https://blog.hiringplug.com/post/${data.BlogID}/${data.Slug}`}
                target="_blank"
              >
                Read More
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
