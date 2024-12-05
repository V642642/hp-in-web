"use client"
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

export default function CustomerSpeak() {
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
    <div className="flex bg-fixed border-t-4 border-green-500 bg-no-repeat bg-cover bg-[50%] flex-col  w-full gap-2 items-center bg-ourclient  justify-center py-24">
      <h2 className="text-[38px] font-primary font-bold mb-14 text-white">
        Customers <span className="text-orange-500">Speak</span>
      </h2>

      <Slider {...settings} className="w-full flex items-center justify-center">
        <div
          id="slider3"
          className="w-full font-primary md:w-8/12 flex items-center justify-center gap-6"
        >
          <p className="text-white text-[20px] bg-orange-500 px-10 text-center">
            Seamless Payment Collection
          </p>
          <q className="text-center text-[22px] text-white  w-full md:w-7/12">
            
            <i>
              
              hiringplug journey has been wonderful, enriching & important for
              us as a recruitment vendor. We doubled our business within 2
              months and don`&apos;`t have to worry about Payment collections or status
              updates of our candidates. They provide a delightful online
              experience and customer service
            </i>
          </q>
          <p className="text-center text-[22px] text-white  font-semibold">
            - CEO, CareerWays Staffing
          </p>
        </div>
        <div
          id="slider4"
          className="w-full font-primary md:w-8/12 flex items-center justify-center gap-6"
        >
          <p className="text-white text-[20px] bg-orange-500 px-10 text-center">
          User-Friendly Platform
          </p>
          <q className="text-center text-[22px] text-white  w-full md:w-7/12">
            
            <i>
              
              The platform is very easy to use even for early stage users and my team productivity has
grown multifold with a constant flow of job openings. 
            </i>
          </q>
          <p className="text-center text-[22px] text-white  font-semibold">
          - CEO, MVK Consultants
          </p>
        </div>
      </Slider>
    </div>
  );
}
