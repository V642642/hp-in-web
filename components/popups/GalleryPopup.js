"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function GalleryPopup({ setOpen, open }) {
  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const handleClose = () => {
    setOpen({ state: false, initialSlide: 0 });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 37) {
        sliderRef.current.slickPrev();
      } else if (e.keyCode === 39) {
        sliderRef.current.slickNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleClose();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    initialSlide: open.initialSlide,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const src = [
    { src: "/images/slide6.webp" },
    { src: "/images/slide9.webp" },
    { src: "/images/slide2.jpeg" },
    { src: "/images/slide3.jpeg" },
    { src: "/images/slide4.webp" },
    { src: "/images/slide5.webp" },
    { src: "/images/slide8.webp" },
    { src: "/images/slide1.jpeg" },
    { src: "/images/HRAIAward.jpeg" },
    { src: "/images/IMG_2148.webp" },
    { src: "/images/hiringplug1.webp" },
    { src: "/images/hiringplug2.webp" },
    { src: "/images/hiringplug3.webp" },
    { src: "/images/hiringplug4.webp" },
    { src: "/images/team.webp" },
    { src: "/images/team2.webp" },
    { src: "/images/team3.webp" },
    { src: "/images/team4.webp" },
    { src: "/images/conf.webp" },
    { src: "/images/hiringplug4 (1).webp" },
  ];

  return (
    <>
      {open.state && (
        <React.Fragment>
          <div className="justify-center font-gothic items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative bg-black py-20 my-6 mx-auto w-full ">
              <div className="flex  w-full items-center justify-center">
                <p
                  onClick={handleClose}
                  className="bg-white cursor-pointer text-black px-4 rounded-[4px] text-[18px] p-2 absolute top-3 right-4"
                >
                  X
                </p>
                <Slider
                  id="gallery"
                  {...settings}
                  ref={sliderRef}
                  className="w-full flex items-center justify-center"
                >
                  {src.map((data, index) => (
                    <div
                      key={index}
                      className="p-3 w-full flex items-center justify-center"
                    >
                      <Image
                        width={320}
                        height={150}
                        className=" w-[100%] mx-auto h-[600px] object-contain cursor-pointer"
                        src={data.src}
                        alt="clients-hp"
                        unoptimized
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default GalleryPopup;
