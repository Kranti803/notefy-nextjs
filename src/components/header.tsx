"use client";
import React, { Dispatch, useState, SetStateAction } from "react";
import { Button } from "./ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Logo from "../assets/logo.png";
import SideMenu from "./SideMenu";

const Header = ({
  nav,
  setNav,
}: {
  nav: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
}) => {

  
  return (
    <div>
      <div className="flex items-center gap-x-4 h-14">
        <Button variant={"ghost"} onClick={() => setNav(!nav)}>
          <GiHamburgerMenu size={30} />
        </Button>
        <Image src={Logo} height={40} width={40} alt="logo" />
      </div>
      <div
        className={`md:hidden min-h-screen fixed bg-white text-black top-0 left-0 shadow-2xl p-2  ${
          nav ? "translate-x-[0%]" : "translate-x-[-150%]"
        } duration-200 ease-linear`}
      >
        <SideMenu setNav={setNav} />
      </div>
    </div>
  );
};

export default Header;
