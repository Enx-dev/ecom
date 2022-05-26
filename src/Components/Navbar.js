import React, { useState } from "react";
//icons
import { MenuIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";
//animation
import { motion, AnimatePresence } from "framer-motion";
//images
import logo from "../images/logo.svg";
import avater from "../images/image-avatar.png";
//componets
import { Carts, Menu } from ".";

const Navbar = ({ setTotal, total }) => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(false);
  const Links = ["Contact", "Collections", "Women", "Men", "About"];
  return (
    <nav className='w-full md:px-20 items-center md:shadow-sm  h-20 px-4 flex justify-between'>
      <div className='flex space-x-2 items-center h-full'>
        {/* menu */}
        <MenuIcon
          className='w-6  text-neutral-Dark-grayish-blue md:hidden'
          onClick={() => setShow((prev) => !prev)}
        />
        {/* Lodo */}
        <img className='w-40' src={logo} alt='logo' />
        {/* Links */}
        <ul className='hidden pl-3 text-base text-neutral-Grayish-blue space-x-4 items-center justify-evenly md:flex'>
          {Links.map((link) => (
            <motion.li key={link} className='cursor-pointer Link'>
              {link}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className=' space-x-2 items-center flex'>
        {/*cart icon */}
        <span onClick={() => setCart((prev) => !prev)}>
          {total > 10 ? (
            <div className='w-5 fancy flex items-center justify-center text-white h-5 top-3  left-3 relative bg-primary-Orange'>
              10<sup>+</sup>
            </div>
          ) : total > 0 ? (
            <div className='w-5 fancy flex items-center justify-center text-white h-5 top-3  left-3 relative bg-primary-Orange'>
              {total}
            </div>
          ) : null}
          <ShoppingCartIcon
            data-title='hola'
            className=' w-6 text-neutral-Dark-grayish-blue'
          />
        </span>

        {/*avater */}
        <img
          className='w-10 hover:border-primary-Orange hover:border-[3px] transition-all ease-in hover:rounded-full object-contain'
          src={avater}
          alt='avater'
        />
      </div>{" "}
      <AnimatePresence>
        {show && <Menu setShow={setShow} Links={Links} />}
      </AnimatePresence>
      <AnimatePresence>
        {cart && <Carts setTotal={setTotal} total={total} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
