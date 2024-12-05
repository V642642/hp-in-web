import React, { useEffect, useRef } from "react";

function Clientspopup({ setOpen, open }) {
  const wrapperRef = useRef(null);

  const handleClose = () => {
    setOpen({state : false , url : ''});
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
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef]);

  return (
    <>
      {open.state && (
        <React.Fragment>
          <div className="justify-center font-gothic items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative  my-6 mx-auto lg:w-[600px] w-80 -top-28">
              <div className="flex  w-full items-center justify-center">
                <iframe
                  ref={wrapperRef}
                  width="900"
                  height="400"
                  id="ypopupvideo1"
                  src={`${open.url}?autoplay=1`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default Clientspopup;
