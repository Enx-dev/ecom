import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { XIcon } from "@heroicons/react/solid";
const Lightbox = ({ src, setShow }) => {
  return ReactDOM.createPortal(
    <>
      <motion.div
        key='lightboxfade'
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.75,

          transition: {
            duration: 0.2,
          },
        }}
        exit={{
          opacity: 0,

          transition: {
            duration: 0.2,
          },
        }}
        className='absolute top-0 left-0 bottom-0 right-0 bg-black opacity-75'
      />
      <motion.div
        key='lightbox'
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,

          transition: {
            duration: 0.2,
          },
        }}
        exit={{
          opacity: 0,

          transition: {
            duration: 0.2,
          },
        }}
        className='w-[500px] h-[500px] absolute top-0 right-0 bottom-0 left-0 m-auto bg-white'>
        <XIcon
          onClick={() => setShow(false)}
          className='w-6 absolute top-[-10px] right-[-30px] text-primary-Orange text-right'
        />
        <div>
          <img src={src} alt='img' />
        </div>
      </motion.div>
    </>,
    document.getElementById("lightbox")
  );
};

export default Lightbox;
