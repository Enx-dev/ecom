import React, { useState, useRef, useEffect } from "react";
//components
import { LeftArrow, RightArrow } from "./Arrow";
import Lightbox from "./Lightbox";
import { AnimatePresence } from "framer-motion";
//icons
import {
  ShoppingCartIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/outline";
// images
import Product1 from "../images/image-product-1.jpg";
import Product2 from "../images/image-product-2.jpg";
import Product3 from "../images/image-product-3.jpg";
import Product4 from "../images/image-product-4.jpg";
//thumb
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";

const Product = ({ setTotal }) => {
  const slide = useRef();
  const current = useRef();
  const [value, setValue] = useState(0);
  const [currentImg, setCurrentImg] = useState(Product1);
  const [show, setShow] = useState(false);
  const items = [Product1, Product2, Product3, Product4];
  function clicked(img, e) {
    let currentImg = document.getElementsByClassName("active");
    currentImg[0].className = currentImg[0].className.replace("active", "");
    e.target.classList.add("active");
    setCurrentImg(img);
  }
  return (
    <section className='md:flex md:mx-20 md:gap-20 md:mt-5 md:justify-center'>
      <div className='grid grid-cols-1 md:space-y-7  md:max-w-[412px] md:min-w-[300px]  md:max-h-[400px] md:min-h-[400px]'>
        <div>
          <img
            onClick={() => setShow(true)}
            className='hidden cursor-pointer md:block w-full object-cover md:h-[350px] md:rounded-xl'
            src={currentImg}
            alt='product'
          />
        </div>
        <div
          id='Image-container'
          ref={slide}
          className='md:hidden w-full md:h-[350px] md:rounded-xl col-start-1 col-end-[-1] row-start-1 row-end-[-1] snap-mandatory  snap-x scroll-smooth  overscroll-contain overflow-x-hidden  grid grid-flow-col auto-cols-[100%] h-96 overflow-hidden'>
          {items.map((img) => (
            <Box itemID={img} key={img} src={img}></Box>
          ))}
        </div>

        <AnimatePresence>
          {show && (
            <Lightbox
              src={currentImg}
              setCurrentImg={setCurrentImg}
              setShow={setShow}
            />
          )}
        </AnimatePresence>

        <div
          ref={current}
          className=' hidden md:grid gap-4 auto-cols-auto grid-flow-col'>
          <img
            className='rounded-lg  hover:opacity-75 active'
            onClick={(e) => clicked(Product1, e)}
            src={thumb1}
            alt='thumb1'
          />

          <img
            className='rounded-lg hover:opacity-75'
            onClick={(e) => clicked(Product2, e)}
            src={thumb2}
            alt='thumb2'
          />
          <img
            className='rounded-lg hover:opacity-75'
            onClick={(e) => clicked(Product3, e)}
            src={thumb3}
            alt='thumb3'
          />
          <img
            className='rounded-lg hover:opacity-75'
            onClick={(e) => clicked(Product4, e)}
            src={thumb4}
            alt='thumb4'
          />
        </div>
        <div
          initial='initial'
          animate='animate'
          className='md:hidden px-4  h-fit self-center flex row-start-1 row-end-[-1] col-start-1 col-end-[-1] justify-between items-center'>
          <LeftArrow slide={slide} />
          <RightArrow slide={slide} />
        </div>
      </div>
      <div className='md:flex md:flex-col md:justify-between min-w-[300px]'>
        <div className='px-4 my-4 space-y-3 max-w-md'>
          <h2 className='text-primary-Orange text-base font-bold '>
            Sneaker Company
          </h2>
          <h1 className='text-neutral-dark-blue font-bold text-subhead2'>
            Fall Limited Edition Sneakers
          </h1>
          <p className='text-base text-neutral-Dark-grayish-blue'>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className='px-4 flex justify-between md:flex-col md:items-start items-center'>
          <span className='space-x-2 flex  items-center'>
            <h2 className='inline text-subhead font-bold text-neutral-dark-blue'>
              $125.00
            </h2>
            <span className='text-primary-Orange text-base bg-primary-Pale-orange font-bold px-2 rounded-sm'>
              50%
            </span>
          </span>
          <span className='text-neutral-Grayish-blue line-through font-bold'>
            $250.00
          </span>
        </div>
        <div className='px-4 mt-4 md:mt-6 md:flex md:items-center mb-10 md:mb-0 space-y-4 md:space-y-0 md:space-x-1'>
          <div className='w-full md:w-[30%] h-16 flex justify-between items-center px-4 md:px-1 rounded-lg bg-neutral-Light-grayish-blue'>
            <MinusIcon
              onClick={() => value > 0 && setValue((prev) => prev - 1)}
              className='w-4 text-primary-Orange font-bold'
            />

            <p>{value}</p>
            <PlusIcon
              onClick={() => setValue((prev) => prev + 1)}
              className='w-4 text-primary-Orange font-bold'
            />
          </div>
          <div
            onClick={() => {
              setTotal(value);
              setValue(0);
            }}
            className='w-full h-16 flex-grow md:w-[70%] hover:opacity-75 transition-all ease-in shadow-md shadow-primary-Pale-orange rounded-lg bg-primary-Orange flex items-center justify-center space-x-2 text-neutral-Light-grayish-blue'>
            <ShoppingCartIcon className='w-6' />
            <p className='font-bold '>Add to cart</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;

const Box = ({ src }) => {
  return <img className=' snap-center' src={src} alt='' />;
};

//
//

// const ImgeScrollBar = ({data}) =>(
//
// )
// export default ImgeScrollBar;
