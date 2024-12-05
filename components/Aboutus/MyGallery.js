"use client"
import Image from "next/image";
import { useState } from "react";
import GalleryPopup from "../popups/GalleryPopup";

export default function MyGallery() {
  const [open, setOpen] = useState({ state: false, initialSlide: 0 });


  return (
    <div className="flex flex-col items-center px-4 py-20 justify-center gap-2 w-full">
      {open ? <GalleryPopup open={open} setOpen={setOpen} /> : <></> }
      <div className=" flex w-full items-center gap-3 justify-center flex-col md:flex-row">
        <Image
          alt="gallery1" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 0 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/slide6.webp`}
          width={300}
          
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
        <Image
          alt="gallery2" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 1 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/slide9.webp`}
          width={300}
          
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
          alt="gallery3" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 2 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/slide2.jpeg`}
          width={300}
          
          height={130}
          className="w-full h-[250px] object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
          alt="gallery4" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 3 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/slide3.jpeg`}
          width={300}
          height={130}
          loading="lazy"
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
      </div>
      <div className=" flex w-full items-center gap-3 justify-center flex-col md:flex-row">
        <Image
          alt="gallery5" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 4 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/slide4.webp`}
          width={300}
          loading="lazy"
          height={130}
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
        <Image
          alt="gallery6" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 5 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/slide5.webp`}
          width={300}
          height={130}
          loading="lazy"
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
          alt="gallery7" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 6 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/slide8.webp`}
          width={300}
          loading="lazy"
          height={130}
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
          alt="gallery8" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 7 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/slide1.jpeg`}
          width={300}
          height={130}
          loading="lazy"
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
      </div>
      <div className=" flex w-full items-center gap-3 justify-center flex-col md:flex-row">
        <Image
          alt="gallery9" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 8 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/HRAIAward.jpeg`}
          width={300}
          height={130}
          loading="lazy"
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
        <Image
          alt="gallery10" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 9 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/IMG_2148.webp`}
          width={300}
          loading="lazy"
          height={130}
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 " 
        />

        <Image
          alt="gallery11" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 10 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/hiringplug1.webp`}
          width={300}
          loading="lazy"
          height={130}
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
          alt="gallery12" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 11 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/hiringplug2.webp`}
          width={300}
          loading="lazy"
          height={130}
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
      </div>
      <div className=" flex w-full items-center gap-3 justify-center flex-col md:flex-row">
        <Image
          alt="gallery13" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 12 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/hiringplug3.webp`}
          width={300}
          loading="lazy"
          height={130}
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
        <Image
          alt="gallery14" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 13 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/hiringplug4.webp`}
          width={300}
          height={130}
          loading="lazy"
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
          alt="gallery15" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 14 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/team.webp`}
          width={300}
          loading="lazy"
          height={130}
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
          alt="gallery16" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 15 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/team2.webp`}
          width={300}
          height={130}
          loading="lazy"
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
      </div>
      <div className=" flex w-full items-center gap-3 justify-center flex-col md:flex-row">
        <Image
          alt="gallery17" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 16 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/team3.webp`}
          width={300}
          height={130}
          loading="lazy"
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
        <Image
          alt="gallery18" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 17 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/team4.webp`}
          width={300}
          height={130}
          loading="lazy"
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
          alt="gallery19" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 18 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/conf.webp`}
          width={300}
          loading="lazy"
          height={130}
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />

        <Image
          alt="gallery20" unoptimized
          onClick={() => setOpen({ state: true, initialSlide: 19 })}
          src={`${process.env.NEXT_PUBLIC_S3_URL}/images/hiringplug4 (1).webp`}
          width={300}
          loading="lazy"
          height={130}
          className="w-full h-[250px] sm:inline-block hidden object-cover hover:scale-[1.2] cursor-pointer transition-scale ease-in-out duration-500 md:w-3/12 "
        />
      </div>
    </div>
  );
}
