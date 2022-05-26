import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
export const LeftArrow = ({ slide }) => {
  return (
    <div
      className='w-10 h-10  rounded-full flex items-center justify-center bg-white'
      onClick={() => (slide.current.scrollLeft -= 450)}>
      <ChevronLeftIcon className='w-6' />
    </div>
  );
};
export const RightArrow = ({ slide }) => {
  return (
    <div
      className='w-10  h-10 rounded-full flex items-center justify-center bg-white'
      onClick={() => (slide.current.scrollLeft += 450)}>
      <ChevronRightIcon className='w-6' />
    </div>
  );
};
