"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import User from "./User";
import AddNoteBook from "./AddNoteBook";
import { Button } from "./ui/button";
import { IoMdClose } from "react-icons/io";
import WriteNote from "./WriteNote";
import NoteBooks from "./NoteBooks";
import { GiNotebook } from "react-icons/gi";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

const SideMenu = ({
  setNav,
}: {
  setNav: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex gap-x-4 items-center border-b-2 border-gray-300 pb-3">
        <Image src={Logo} height={40} width={40} alt="logo" />
        <span className="font-montserrat font-semibold text-2xl">Notefy</span>
        <Button
          variant={"ghost"}
          onClick={() => setNav(false)}
          className="md:hidden"
        >
          <IoMdClose size={30} />
        </Button>
      </div>
      <User />
      <AddNoteBook />
      <Button onClick={()=>setNav(false)} variant={"ghost"} className="flex gap-x-2 justify-start w-full font-roboto font-semibold">
       <Link href={'/notes'} className="flex items-center gap-x-2">Your Notes <GiNotebook/></Link>
      </Button>
      <WriteNote />
      <NoteBooks />
      <Button onClick={()=>setNav(false)}  variant={"ghost"} className="flex gap-x-2 justify-start w-full font-roboto font-semibold">
        <Link href={'/notes/favouritenotes'} className="flex items-center gap-x-2">Favourite Notes <FaRegHeart /></Link>
      </Button>
    </div>
  );
};

export default SideMenu;
