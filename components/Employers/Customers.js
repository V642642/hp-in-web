"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "20px" }}
      onClick={onClick}
    />
  );
}

export default function Customers() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="flex bg-fixed border-t-8 border-green-500 bg-no-repeat bg-cover bg-[50%] flex-col  w-full gap-2 items-center bg-ourclient  justify-center py-24">
      <h2 className="text-[38px] font-primary font-bold mb-14 text-white">
        Customers <span className="text-green-500">Speak</span>
      </h2>

      <Slider {...settings} className="w-full flex items-center justify-center">
        <div
          id="slider3"
          className="w-full font-primary md:w-8/12 flex items-center justify-center gap-6"
        >
          <p className="text-white text-[20px] bg-green-700 px-10 text-center">
            Faster Hiring
          </p>
          <q className="text-center text-[22px] text-white  w-full md:w-7/12">
            
            <i>
              
              hiringplug comes to me as very innovative solution and futuristic
              approach to solve larger business problems for Talent Acquisition.
              I have had a great experience in accelerating the hiringplug
              turnaround time and value add in the business.
            </i>
          </q>
          <p className="text-center text-[22px] text-white  font-semibold">
            - Head Talent Acquisition, Interglobe Technology Quotient
          </p>
        </div>
        <div
          id="slider4"
          className="w-full font-primary md:w-8/12 flex items-center justify-center gap-6"
        >
          <p className="text-white text-[20px] bg-green-700 px-10 text-center">
            Configurable ATS
          </p>
          <q className="text-center text-[22px] text-white  w-full md:w-7/12">
            
            <i>
              
              hiringplug has helped us tremendously to build our team in India.
              For a startup needing good talent, in absence of dedicated
              resources or bandwidth, hiringPlug was able to connect us with
              multiple hiring agenciesin one go with a state-of-the-art
              Applicant Tracking and management system to hire on time
            </i>
          </q>
          <p className="text-center text-[22px] text-white  font-semibold">
            - Country Manager, Selfdrvn India
          </p>
        </div>
      </Slider>
    </div>
  );
}
