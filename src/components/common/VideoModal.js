import dynamic from "next/dynamic";
import React, { useState } from "react";
import { IoCaretForwardOutline } from "react-icons/io5";
import ModalVideo from "react-modal-video";

const VideoModal = ({ className, onlyButton }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId="MPkfO8vMlIs"
        onClose={() => setOpen(false)}
      />
      <a
        onClick={() => setOpen(true)}
        className={` ${
          className
            ? "text-decoration-none popup-youtube align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0 ms-3"
            : "video-icon popup-youtube text-decoration-none"
        }`}
      >
        <IoCaretForwardOutline className={`${onlyButton && "fa-2x"}`} />
      </a>
      <span className="text-white ms-2 small">
        {!onlyButton && "Videoyu İzle"}
      </span>
    </>
  );
};

export default dynamic(() => Promise.resolve(VideoModal), { ssr: false });
