"use client";
import React, { useState } from "react";
import { cards } from "../json/blog";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clientspopup from "./popups/Clientspopup";

export default function Clients() {
  const [open, setOpen] = useState({ state: false, url: "" });

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        id="ourclients"
        className="w-full bg-[#f5f5f5] overflow-hidden gap-12 flex flex-col font-primary items-center pb-20 justify-center"
      >
        <Clientspopup open={open} setOpen={setOpen} />
        <Slider {...settings} className="w-full">
          <div className="p-3">
            <Image
              className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/1to-1help-logo-colour.webp`}
              alt="clients121"
              width={200}
              height={70}
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <Image
              className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/anarock-logo-colour.webp`}
              alt="clientsanarock"
              width={200}
              height={70}
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <Image
              className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/bharat-pe-logo-colour.webp`}
              alt="clientsbharat"
              width={200}
              height={70}
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <Image
              className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/Byju-logo-colour.webp`}
              alt="clientsByju"
              width={200}
              loading="lazy"
              height={70}
            />
          </div>
          <div className="p-3">
            <Image
              className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/capgemini-logo-colour.webp`}
              alt="clientscapgemini"
              width={200}
              height={70}
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <Image
              className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/cirrus-logo-colour.webp`}
              alt="clientscirrus"
              width={200}
              height={70}
              loading="lazy"
            />
          </div>
          {/* <div>
            <Image className="w-[200px] h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer" src={seven} alt="clients" />
          </div> */}
          <div className="p-3">
            <Image
              className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/live-nation-logo-colour.webp`}
              alt="clientsnation"
              width={200}
              height={70}
              loading="lazy"
            />
          </div>
          {/* <div>
            <Image className="w-[200px] h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer" src={nine} alt="clients" />
          </div> */}
          <div className="p-3">
            <Image
              className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/oswaal-logo-colour.webp`}
              alt="clientsoswaal"
              width={200}
              height={70}
              loading="lazy"
            />
          </div>
          {/* <div className="p-3">
              <Image
                className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
                src={eleven}
                alt="clients"
              />
            </div> */}
          <div className="p-3">
            <Image
              className="md:w-[200px] w-[180px]  h-[70px] object-contain grayscale hover:grayscale-0 cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_S3_URL}/images/Clients/tata-metaliks-logo-colour.webp`}
              alt="clientsmetaliks"
              width={200}
              height={70}
              loading="lazy"
            />
          </div>
        </Slider>
        <p className="w-full text-center text-[30px] sm:text-[30px] text-black font-medium">
          Why <span className="text-green-600">Employers</span> love us
        </p>
        <div className="flex w-full flex-wrap items-center justify-center flex-col md:flex-row gap-5">
          {cards?.map((data, index) => (
            <div
              key={index}
              id="card1"
              className="card w-10/12 h-[400px] sm:h-[500px] sm:w-[300px]  gap-8 bg-white rounded-[8px]  cursor-pointer boxShadow py-16 px-4 group flex items-center justify-center flex-col transition-all relative"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-[75px] scale-100 transition-all duration-500 text-red-600 absolute right-[50px] top-[130px] sm:right-[24px] sm:top-[155px]"
              />
              <Image
                width={200}
                height={70}
                src={data.image}
                alt="img_url"
                className="w-[150px]"
              />
              <p className="text-[16px] font-primary text-center leading-[1.8] text-black">
                {/* {data.smallheading} */}
              </p>
              <p className="text-[14px] font-primary text-center text-black">
                {data.author}
              </p>
              <Image
                width={200}
                height={70}
                className="md:w-[200px] w-[180px]  h-[70px] object-contain  cursor-pointer"
                src={data.client_img}
                alt="clients"
              />
              <div
                onClick={() => setOpen({ state: true, url: data.video })}
                className="hover-card1 absolute gap-4 px-6 min-h-[400px] bg-white flex items-center justify-center flex-col translate-y-[80px] opacity-0 group-hover:opacity-[1]  group-hover:translate-y-1 duration-300 transition-all"
              >
                <Image
                  width={200}
                  height={70}
                  src={data.image}
                  alt="img_url"
                  className="w-[200px]"
                />
                <p className="text-[16px] font-primary text-center  text-black">
                  {data.smallheading}
                </p>
                <p className="text-[14px] font-primary text-center text-black">
                  {data.para}
                </p>
                <button className="text-white rounded-[6px] font-primary bg-[#00a63f] px-4 py-1">
                  Play Video
                </button>
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-[75px] scale-0 group-hover:scale-100 transition-all duration-500 text-red-600 absolute right-[16px] top-[125px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p id="howitworks" className="py-[50px] bg-white w-full block"></p>
    </>
  );
}
