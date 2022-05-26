import { XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import { slideIn, list, menuVarient } from "../ANIMATION/menuanimation";

const Menu = ({ setShow, Links }) => {
  return ReactDOM.createPortal(
    <>
      <motion.div
        variants={slideIn}
        animate={{
          opacity: 0.75,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        initial={{
          opacity: 0,
        }}
        exit={{
          opacity: 0,
        }}
        className='bg-black opacity-75 z-50 absolute top-0 bottom-0 left-0 right-0'
      />

      <motion.div
        key='menu'
        variants={slideIn}
        animate='visible'
        initial='hidden'
        exit='exit'
        className='absolute z-50 top-0 bottom-0 left-0 w-64 flex  items-start pt-20 bg-white'>
        <XIcon
          className='w-6 absolute top-4 left-4 text-neutral-Dark-grayish-blue'
          onClick={() => setShow((prev) => !prev)}
        />
        <motion.ul
          variants={menuVarient}
          className='w-full text-subhead font-bold pl-10 space-y-3 '>
          {Links.map((item) => (
            <motion.li key={item} variants={list} className=' cursor-pointer'>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>,

    document.getElementById("model")
  );
};

export default Menu;
