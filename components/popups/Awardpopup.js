import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Award from "../../public/images/Awardpopup.webp";

function Awardpopup({ setOpen, open }) {
  const wrapperRef = useRef(null);
  const handleClose = () => {
    setOpen(false);
  };

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
    // eslint-disable-next-line
  }, [wrapperRef]);

  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center font-gothic items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative  my-6 mx-auto lg:w-[600px] w-80 -top-28">
              <div className="flex bg-green-500  relative items-center justify-center">
                <Image
                  ref={wrapperRef}
                  src={Award}
                  alt="Award1212"
                />
                <span className="absolute text-white right-2 text-[20px] top-1 cursor-pointer font-semibold">
                  X
                </span>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default Awardpopup;
