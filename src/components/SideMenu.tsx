'use client'
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import User from "./User";
import AddCategory from "./AddCategory";
import CreateNote from "./CreateNote";
import { Button } from "./ui/button";
import { IoMdClose } from "react-icons/io";

const SideMenu = ({
  setNav,
}: {
  setNav: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="flex gap-x-4 items-center border-b-2 border-gray-300 pb-2">
        <Image src={Logo} height={40} width={40} alt="logo" />
        <span className="font- font-semibold text-2xl">Notefy</span>
        <Button variant={"ghost"} onClick={()=>setNav(false)} className="md:hidden">
          <IoMdClose size={30} />
        </Button>
      </div>
      <User />
      <AddCategory />
      <CreateNote />
    </>
  );
};

export default SideMenu;
