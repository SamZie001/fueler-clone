// @ts-nocheck
import React, { useState } from "react";
import { Modal, Slide, Dialog, useMediaQuery, useTheme } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Guide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  return (
    <div className="container">
      <h1 className="header-text">A short guide to help you use Fueler</h1>
      <p className="subhead-text">
        Let us show you how you can use Fueler productively for your different
        career need.
      </p>

      <img
        onClick={() => setIsOpen(true)}
        src="/assets/video_device.png"
        className="mx-auto my-0 cursor-pointer"
        width={551}
        alt=""
      />

      <Dialog
        TransitionComponent={Transition}
        fullScreen={fullScreen}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="outline-none h-[100%] flex justify-center items-center">
          <iframe
            width="768"
            height="432"
            src="https://www.youtube.com/embed/fu3VNaZU12I"
            title="The Ultimate Guide to Use Fueler | Fueler"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </Dialog>
    </div>
  );
};

export default Guide;
