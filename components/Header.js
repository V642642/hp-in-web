"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CA from "../public/canada.webp";
import IN from "../public/india-flag.webp";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Header() {
  const  pathname  = usePathname();
  const [state, setState] = useState(false);
  const [close, setClose] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const location =
    typeof window !== "undefined" && window.location ? window.location : "";


  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <header
      id="header"
      className={` ${
        pathname === "/" && state ? "lg:top-[37px] top-0" : "top-0"
      } w-full h-[90px] fixed   z-10 font-primary  flex items-center  bg-black bg-opacity-70 justify-center`}
    >
      <div
        className="w-11/12  2xl:w-[71%] xl:w-[80%] lg:w-14/12 flex py-3 items-center
      justify-between"
      >
        <div className="flex gap-2">
          <Link href="/" className="flex relative">
          {/* <Image
              src={`/fireworks.gif`}
              alt="header"
              className="h-[50px] relative z-1 left-8 -top-2 object-cover"
              width={50}
              height={50}
            /> */}
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_URL}/logo-header.21976240.webp`}
              alt="header"
              className="h-[46px] object-cover z-[2]"
              width={180}
              height={46}
            />
             {/* <Image
              src={`/fireworks.gif`}
              alt="header"
              className="h-[50px] absolute z-1 right-4 -top-5 object-cover"
              width={50}
              height={50}
            /> */}
            {/* <Image
              src={`/diya1.gif`}
              alt="header"
              className="h-[50px] relative right-2 bottom-2 object-cover"
              width={50}
              height={50}
              title="On this auspicious festive season, hiringplug™ wishes you prosperity and success. May your endeavours illuminate the path of growth for many. Happy Dhanteras & Happy Diwali!"
            /> */}
           
            
          </Link>
        </div>

        <ul
          className={`flex lg:relative lg:px-0 px-2 fixed lg:flex-row items-start lg:w-auto  w-[80%] flex-col top-0 right-0 lg:h-auto h-[100vh] lg:py-0 py-20 lg:bg-opacity-100 bg-opacity-90 bg-black lg:bg-transparent text-white lg:items-center lg:justify-between gap-2 transition-all duration-500 ease-in-out ${
            close
              ? "lg:translate-x-0 translate-x-0"
              : "lg:translate-x-0 translate-x-[1000px]"
          }`}
        >
          <FontAwesomeIcon
            style={{ display: close ? "" : "none" }}
            onClick={() => setClose(!close)}
            icon={faTimes}
            className="text-white absolute top-2 right-4 text-[30px] "
          />
          <li>
            <Link
              className={`${
                location.href === `${origin}/#ourclients` ? "bg-[#00a63f]" : ""
              } px-3 transition-all md:py-[6px] py-2 inline-block  hover:bg-[#00a63f] border-white hover:border-white cursor-pointer font-primary   text-[14px]`}
              href="/employers.php"
              target={pathname === "/" ? "" : "_blank"}
            >
              Employers 
            </Link>
          </li>
          <li className="px-3 transition-all whitespace-nowrap py-1  hover:bg-[#00a63f]  cursor-pointer  text-[14px]">
            <Link
              target={pathname === "/" ? "" : "_blank"}
              className={`${
                location.href === `${origin}/recruitment-agencies.php` ? "bg-[#00a63f]" : ""
              } lg:px-3 transition-all md:py-[6px] py-2   hover:bg-[#00a63f]0 border-white hover:border-white cursor-pointer  text-[14px]`}
              href="/recruitment-agencies.php"
            >
              Recruitment Agencies
            </Link>
          </li>
          <li>
            <Link
              className={`${
                location.href === `${origin}/#howitworks` ? "bg-[#00a63f]" : ""
              } px-3 transition-all md:py-[6px] whitespace-nowrap  py-2 inline-block  hover:bg-[#00a63f] border-white hover:border-white cursor-pointer font-primary  text-[14px]`}
              target={pathname === "/" ? "_top" : "_blank"}
              href={`${origin}/#howitworks`}
            >
              How it Works
            </Link>
          </li>
          <li
            className={` ${
              pathname === "/resources" ? "bg-[#00a63f]" : ""
            } px-3 group md:inline-flex gap-1 hidden transition-all py-1 relative  cursor-pointer   text-[14px]`}
          >
            Resources{" "}
            <FontAwesomeIcon
              icon={faCaretDown}
              className="text-[18px] mt- ml-[2px]"
            />
            <ul className="flex transition-all duration-300 h-0 group-hover:h-auto  md:hover:bg-[#00a63f] ease-in-out md:opacity-0 md:group-hover:opacity-[1] top-[25px] left-0 translate-y-9 group-hover:translate-y-0 flex-col items-start py-4 rounded-[5px] justify-center md:absolute bg-[#00a63f] w-[120px]">
              <li>
                <Link
                  className="px-3 transition-all py-1  inline-block  cursor-pointer  text-[14px]"
                  href={`https://blog.hiringplug.com/`}
                  target="_blank"
                >
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  className={` px-3 transition-all inline-block py-1   cursor-pointer  text-[14px]`}
                  href={`/resources`}
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  className="px-3 transition-all py-1 inline-block  border-white  cursor-pointer  text-[14px]"
                  target="_blank"
                  href="/about-us.php"
                >
                  About us
                </Link>
              </li>
            </ul>
          </li>
          <li className="md:hidden  ">
            <span
              onClick={() => setState(!state)}
              className={` ${
                pathname === "/resources" ? "bg-[#00a63f]" : ""
              } px-3  md:hidden inline-flex transition-all py-1 relative  cursor-pointer  text-[14px]`}
            >
              Resources{" "}
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-[18px] ml-2 mb-1"
              />
            </span>
            <ul
              className={`flex items-start px-2  justify-center flex-col transition-height duration-500 ease-in-out ${
                state ? "h-0 p-0 overflow-hidden" : "min-h-10 "
              } `}
            >
              <li>
                <Link
                  className="px-3 transition-all py-1  inline-block  cursor-pointer  text-[14px]"
                  href={`https://blog.hiringplug.com/`}
                  target="_blank"
                >
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  className={` px-3 transition-all inline-block py-1   cursor-pointer  text-[14px]`}
                  href={`/resources`}
                >
                  Case Studies
                </Link>
              </li>

              <li>
                <Link
                  className="px-3 transition-all py-1 inline-block  border-white  cursor-pointer  text-[14px]"
                  target="_blank"
                  href="/about-us.php"
                >
                About us
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              className="px-3 transition-all inline-block md:py-[6px] py-2  hover:bg-[#00a63f] cursor-pointer  text-[14px]"
              href="https://my.hiringplug.com/"
              target="_blank"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className="px-3 transition-all inline-block whitespace-nowrap md:py-[6px] py-2  hover:bg-green-500 cursor-pointer  text-[14px]"
              href="https://my.hiringplug.com/agency-signup"
              target="_blank"
            >
              Sign Up
            </Link>
          </li>

          <li ref={wrapperRef} className="text-[14px]">
            <div
              className={` ${
                open ? "border-b border-white" : " "
              }   flex cursor-pointer   relative py-[2px] items-center  justify-start gap-2 w-[100px]`}
            >
              <Link href="/">
                <Image
                  src={IN}
                  alt={'india'}
                  width={25}
                  height={25}
                  className="border w-[25px] border-white object-contain"
                  // loader={loaderProp}
                />
              </Link>
              <Link href="/">
                <p>India</p>
              </Link>
              <FontAwesomeIcon
                onClick={() => setOpen((v) => !v)}
                icon={faCaretDown}
                className="mb-[1px] text-[18px] cursor-pointer"
              />
            </div>
            {open ? (
              <>
                <div className="flex cursor-pointer  flex-col py-[2px] border-t-0 absolute items-start  border-[1px] border-gray-100 justify-between gap-[1px] w-[100px]">
                  <Link
                    target="_blank"
                    href={`https://ca.hiringplug.com/`}
                    className="flex items-center px-[4px] justify-between gap-2"
                  >
                    <Image
                      src={CA}
                      alt={'canada'}
                      width={25}
                      className="border w-[25px] border-white object-contain"
                      //     loader={loaderProp}
                    />
                    <p className="  text-[14px]">Canada</p>
                  </Link>
                </div>
              </>
            ) : (
              <></>
            )}
          </li>
          <li>
            <Link
              className={`${
                location.href === `/contact-us.php` ? "bg-[#00a63f]" : ""
              } px-3 transition-all md:py-[6px] whitespace-nowrap  py-2 inline-block md:hidden  hover:bg-[#00a63f] border-white hover:border-white cursor-pointer font-primary  text-[14px]`}
              target={"_blank"}
              href={`/contact-us.php`}
            >
              Contact us
            </Link>
          </li>
        </ul>

        <div
          onClick={() => setClose(!close)}
          className="flex lg:hidden items-center justify-center flex-col gap-1"
        >
          <p className="w-[30px] py-[1px] bg-white"></p>
          <p className="w-[30px] py-[1px] bg-white"></p>
          <p className="w-[30px] py-[1px] bg-white"></p>
        </div>
      </div>
    </header>
  );
}
