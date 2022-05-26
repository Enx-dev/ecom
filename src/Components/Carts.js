import React from "react";
import { motion } from "framer-motion";
import { TrashIcon } from "@heroicons/react/solid";
import img from "../images/image-product-1-thumbnail.jpg";

const Carts = ({ total, setTotal }) => {
  return (
    <motion.div
      key='cart'
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
      className='z-40 md:max-w-[375px] md:w-[375px] md:left-[revert] md:right-12 md:top-[90px] rounded-xl shadow-2xl  absolute top-28 left-4 right-4
      h-80
      bg-white
     '>
      <div className='font-bold text-base shadow-sm py-6 px-4 text-neutral-Dark-grayish-blue'>
        Cart
      </div>

      {total > 0 ? (
        <div className='flex flex-col px-4 justify-evenly h-3/4 space-y-3'>
          <div className='flex items-center justify-center space-x-2'>
            <div className='h-32 flex items-center'>
              <img className='h-24 object-contain' src={img} alt='img' />
            </div>
            <div className='flex flex-col justify-center h-full space-y-3'>
              <h1 className='text-neutral-Grayish-blue text-base font-bold'>
                Autumn Limited Edition...
              </h1>
              <p className='space-x-3'>
                <span className='text-base text-neutral-Grayish-blue font-bold'>
                  $125.00 x {total}
                </span>
                <span className='text-neutral-dark-blue font-bold'>
                  ${125 * total}.00
                </span>
              </p>
            </div>
            <TrashIcon
              onClick={() => setTotal(0)}
              className='w-6 text-neutral-Dark-grayish-blue'
            />
          </div>
          <div className='w-full h-16 rounded-lg flex items-center justify-center text-white font-bold bg-primary-Orange'>
            Checkout
          </div>
        </div>
      ) : (
        <div className=' h-3/4 flex items-center justify-center text-neutral-Dark-grayish-blue font-bold'>
          Your Cart is empty.
        </div>
      )}
    </motion.div>
  );
};

export default Carts;
