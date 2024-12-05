"use client";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function Social() {
  const getData = () => {
    let endpoint = `https://api-in.hiringplug.com/manage-helpdesk-service/v1/social/1`;
    return axios.get(endpoint);
  };

  const { data } = useQuery(["SocialData"], getData);


  return (
    <div className="md:flex hidden bg-fixed bg-no-repeat bg-cover bg-[50%]  w-full gap-12 items-center bg-social py-20 justify-center flex-col border-t-4 min-h-[400px] border-[#00a63f]">
      <p className="text-[32px] font-bold font-primary text-gray-500 ">
        We are <span className="text-green-500 font-semibold">Social</span>
      </p>
      <div className="w-full flex items-center  justify-center gap-4 flex-col sm:flex-row">
        <iframe
          title="facebook@hiringplug"
          className="w-full lg:w-4/12"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhiringplugofficial&amp;tabs=timeline&amp;width=540&amp;height=500&amp;small_header=true&amp;adapt_container_width=false&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
          width="540"
          height="500"
          //   allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>

        <iframe
          title="linkedin@hiringplug"
          className="w-full lg:w-[30%] min-h-[500px]"
          src={
            data?.data?.data.linkedin
              ? data?.data?.data.linkedin
              : "https://www.linkedin.com/embed/feed/update/urn:li:share:7083292611943301120"
          }
          width="100"
          height="500"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}
