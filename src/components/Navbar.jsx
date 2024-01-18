"use client";
import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    if (openMenu === false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <ul className="flex gap-3">
        <li className="hover:bg-red-500 cursor-pointer">Home</li>
        <li className="hover:bg-red-500 cursor-pointer">About</li>
        <li
          className="hover:bg-red-500 cursor-pointer"
          onMouseEnter={() => handleOpenMenu()}
        >
          Shop D
        </li>
        <li className="hover:bg-red-500 cursor-pointer">Contact</li>
        <li className="hover:bg-red-500 cursor-pointer">Study</li>
        <li className="hover:bg-red-500 cursor-pointer">Education</li>
      </ul>
      <Dropdown openMenu={openMenu} />
    </div>
  );
};

export default Navbar;
